/**
 * analytics.ts — Gusring GA4 이벤트 트래킹
 *
 * 측정 ID 변경 방법:
 *   1. analytics.google.com → 속성 만들기 → 측정 ID 발급 (G-XXXXXXXXXX)
 *   2. public/index.html 의 'G-XXXXXXXXXX' 두 곳을 실제 ID로 교체
 *
 * 구스링 백엔드(gusring-server)에도 같은 지점의 이용 기록을 같이 보낸다 (track, ./gusring-api).
 * GA4는 그대로 유지한다. 서식 제목은 백엔드로 보내지 않는다 (서버는 서식 번호로 센다).
 */

import { track, type Lang } from './gusring-api';

// ── gtag 타입 선언 ───────────────────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** gtag가 로드됐는지 확인 후 이벤트 전송 */
function send(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

// ── 페이지 뷰 ────────────────────────────────────────────────

/** 랜딩(언어선택) 화면 진입 */
export function trackLandingView(): void {
  send('page_view', {
    page_title:    '언어 선택',
    page_location: window.location.href,
    page_path:     '/landing',
  });
  track({ type: 'landing_view' });
}

/** 서식 목록 화면 진입 */
export function trackListView(lang: string): void {
  send('page_view', {
    page_title:    '서식 목록',
    page_location: window.location.href,
    page_path:     '/list',
    language:      lang,
  });
  track({ type: 'list_view', lang: lang as Lang });
}

/** 서식 상세 화면 진입 */
export function trackDetailView(params: {
  formId:    number;
  formTitle: string;
  category:  string;
  lang:      string;
}): void {
  send('page_view', {
    page_title:    `서식: ${params.formTitle}`,
    page_location: window.location.href,
    page_path:     `/detail/${params.formId}`,
    form_id:       params.formId,
    form_title:    params.formTitle,
    category:      params.category,
    language:      params.lang,
  });
  track({ type: 'form_view', lang: params.lang as Lang, formNo: params.formId, category: params.category });
}

// ── 언어 선택 ────────────────────────────────────────────────

/** 언어 선택 */
export function trackLanguageSelect(lang: string): void {
  send('language_select', { language: lang });
  track({ type: 'language_select', lang: lang as Lang });
}

// ── 서식 관련 ────────────────────────────────────────────────

/** 서식 다운로드 버튼 클릭 */
export function trackFormDownload(params: {
  formId:    number;
  formTitle: string;
  category:  string;
  lang:      string;
}): void {
  send('form_download', {
    form_id:    params.formId,
    form_title: params.formTitle,
    category:   params.category,
    language:   params.lang,
  });
  track({ type: 'form_download', lang: params.lang as Lang, formNo: params.formId, category: params.category });
}

// ── 검색 & 필터 ──────────────────────────────────────────────

/** 검색 입력 (300ms debounce 권장) */
export function trackSearch(params: {
  term:         string;
  resultCount:  number;
  lang:         string;
}): void {
  if (!params.term.trim()) return;
  send('search', {
    search_term:   params.term,
    result_count:  params.resultCount,
    language:      params.lang,
  });
  track({ type: 'search', lang: params.lang as Lang, searchTerm: params.term, resultCount: params.resultCount });
}

/** 카테고리 필터 선택 */
export function trackCategoryFilter(category: string, lang: string): void {
  send('category_filter', { category, language: lang });
  track({ type: 'category_filter', lang: lang as Lang, category });
}

// ── 버튼 클릭 ────────────────────────────────────────────────

/** 피드백 버튼 클릭 */
export function trackFeedbackClick(lang: string): void {
  send('feedback_click', { language: lang });
  track({ type: 'feedback_click', lang: lang as Lang });
}

// ── 체류 시간 ────────────────────────────────────────────────

/** 서식 상세 화면 체류 시간 기록 (초 단위) */
export function trackTimeOnDetail(params: {
  formId:      number;
  formTitle:   string;
  durationSec: number;
  lang:        string;
}): void {
  send('time_on_detail', {
    form_id:      params.formId,
    form_title:   params.formTitle,
    duration_sec: params.durationSec,
    language:     params.lang,
  });
  track({ type: 'detail_time', lang: params.lang as Lang, formNo: params.formId, durationSec: params.durationSec });
}
