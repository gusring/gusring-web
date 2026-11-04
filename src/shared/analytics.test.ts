import {
  trackCategoryFilter, trackDetailView, trackFeedbackClick, trackFormDownload, trackLandingView,
  trackLanguageSelect, trackListView, trackSearch, trackTimeOnDetail,
} from './analytics';
import { configureGusringApi, flush } from './gusring-api';

// analytics.ts의 각 함수가 GA4와 함께 구스링 백엔드로 보내는 내용
describe('analytics → 구스링 백엔드', () => {
  // CRA jest는 테스트마다 목 구현을 지운다(resetMocks) → beforeEach에서 다시 정한다
  const fetchMock = jest.fn();

  beforeAll(() => {
    (global as unknown as { fetch: typeof fetchMock }).fetch = fetchMock;
    configureGusringApi({ baseUrl: 'http://api.test', flushMs: 60000 });
  });

  beforeEach(() => fetchMock.mockImplementation(() => Promise.resolve({ ok: true, status: 202 })));

  const sentEvents = () =>
    fetchMock.mock.calls.flatMap((call) => {
      const [url, init] = call as unknown as [string, RequestInit];
      expect(url).toBe('http://api.test/api/v1/events');
      expect((init.headers as Record<string, string>)['Content-Type']).toBe('text/plain');
      return JSON.parse(init.body as string).events;
    });

  it('9개 함수가 서버 이벤트 종류·칸으로 바뀌어 한 묶음으로 간다', async () => {
    const form = { formId: 6, formTitle: '出生届', category: 'FAMILY', lang: 'ja' };
    trackLandingView();
    trackLanguageSelect('ja');
    trackListView('ja');
    trackSearch({ term: ' 出生 ', resultCount: 2, lang: 'ja' });
    trackCategoryFilter('FAMILY', 'ja');
    trackDetailView(form);
    trackFormDownload(form);
    trackTimeOnDetail({ formId: 6, formTitle: '出生届', durationSec: 37, lang: 'ja' });
    trackFeedbackClick('ja');
    await flush();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(sentEvents()).toEqual([
      { type: 'landing_view' },
      { type: 'language_select', lang: 'ja' },
      { type: 'list_view', lang: 'ja' },
      { type: 'search', lang: 'ja', searchTerm: '出生', resultCount: 2 },
      { type: 'category_filter', lang: 'ja', category: 'FAMILY' },
      { type: 'form_view', lang: 'ja', formNo: 6, category: 'FAMILY' },
      { type: 'form_download', lang: 'ja', formNo: 6, category: 'FAMILY' },
      { type: 'detail_time', lang: 'ja', formNo: 6, durationSec: 37 },
      { type: 'feedback_click', lang: 'ja' },
    ]);
  });

  it('서식 제목은 보내지 않는다 (서버는 번호로 센다)', async () => {
    trackDetailView({ formId: 6, formTitle: '出生届', category: 'FAMILY', lang: 'ja' });
    await flush();
    expect(JSON.stringify(fetchMock.mock.calls)).not.toContain('出生届');
  });

  it('빈 검색어는 보내지 않는다', async () => {
    trackSearch({ term: '   ', resultCount: 41, lang: 'ko' });
    await flush();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('fetch가 바로 예외를 던져도 밖으로 번지지 않는다', async () => {
    fetchMock.mockImplementation(() => {
      throw new TypeError('no network');
    });
    trackLandingView();
    await expect(flush()).resolves.toBeUndefined();
  });

  it('방문자 id는 브라우저에 저장해 같은 값을 쓴다', async () => {
    trackLandingView();
    await flush();
    trackLandingView();
    await flush();
    const ids = fetchMock.mock.calls.map((call) => JSON.parse((call as unknown as [string, RequestInit])[1].body as string).visitorId);
    expect(ids[0]).toMatch(/^[0-9a-f-]{36}$/);
    expect(ids[1]).toBe(ids[0]);
    expect(localStorage.getItem('gusring_visitor_id')).toBe(ids[0]);
  });
});
