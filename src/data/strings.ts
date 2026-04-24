import { I18nString } from '../types';

// ── UI 문자열 ───────────────────────────────────────────────
export const UIStrings: Record<string, I18nString> = {
  welcome:          { ko: '금천구 다국어 민원 가이드',            en: 'Geumcheon Multilingual Guide',       zh: '衿川多语种指南',     ja: '衿川多言語ガイド',             vi: 'Hướng dẫn Geumcheon'              },
  subWelcome:       { ko: '41종의 행정 서식을 모국어로 안내합니다.', en: '41 administrative forms in your language.', zh: '用母语提供41种行政表格。', ja: '41種類の行政書類を母国語で案内。', vi: '41 mẫu đơn bằng tiếng mẹ đẻ.'   },
  searchPlaceholder:{ ko: '서식 명칭 검색...',                   en: 'Search forms...',                    zh: '搜索表格...',       ja: '書類検索...',                  vi: 'Tìm kiếm mẫu đơn...'              },
  catAll:           { ko: '전체',                               en: 'All',                                zh: '全部',             ja: '全て',                         vi: 'Tất cả'                           },
  viewForm:         { ko: '양식 보기',                           en: 'View Form',                          zh: '查看表格',          ja: '様式を見る',                   vi: 'Xem mẫu đơn'                      },
  viewGuide:        { ko: '안내사항 보기',                       en: 'View Instructions',                  zh: '查看说明',          ja: '案内事項を見る',               vi: 'Xem hướng dẫn'                    },
  feedback:         { ko: '피드백 보내기',                       en: 'Feedback',                           zh: '反馈',             ja: '感想',                         vi: 'Phản hồi'                         },
  download:         { ko: '서류 양식 다운로드',                  en: 'Download Form',                      zh: '下载表格',          ja: '書類をダウンロード',            vi: 'Tải xuống mẫu đơn'               },
  downloading:      { ko: '다운로드 중...',                      en: 'Downloading...',                     zh: '正在下载...',       ja: 'ダウンロード中...',            vi: 'Đang tải xuống...'               },
  noResult:         { ko: '검색 결과가 없습니다.',               en: 'No results found.',                  zh: '无结果。',          ja: '結果がありません。',            vi: 'Không có kết quả.'               },
  zoomHint:         { ko: '핀치로 확대 · 더블탭으로 초기화',    en: 'Pinch to zoom · Double-tap to reset', zh: '捏合缩放 · 双击重置', ja: 'ピンチで拡大 · ダブルタップでリセット', vi: 'Chụm để thu phóng · Nhấn đúp để đặt lại' },
  zoomHintReset:    { ko: '두 번 탭하면 원래 크기로',           en: 'Double-tap to reset zoom',            zh: '双击恢复原始大小',   ja: 'ダブルタップで元のサイズに',        vi: 'Nhấn đúp để đặt lại thu phóng'   },
  zoomReset:        { ko: '초기화',                             en: 'Reset',                              zh: '重置',             ja: 'リセット',                      vi: 'Đặt lại'                          },
  fbTitle:          { ko: '피드백',                             en: 'Feedback',                           zh: '反馈',             ja: 'フィードバック',                 vi: 'Phản hồi'                         },
};
