import React from 'react';
import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { LangId } from '../types';
import { UIStrings } from '../data/strings';
import { useTranslate } from '../hooks/useTranslate';

// ── 구글폼 링크 (여기에 실제 링크로 교체하세요) ──────────────
const GOOGLE_FORM_URL = 'https://forms.gle/XXXXXXXXXXXXXXXX';

// ── 언어별 안내 문구 ──────────────────────────────────────────
const FEEDBACK_DESC: Record<LangId, string> = {
  ko: '아래 버튼을 눌러 피드백을 남겨주세요.\n소중한 의견이 서비스 개선에 큰 도움이 돼요.',
  en: 'Tap the button below to share your feedback.\nYour input helps us improve the service.',
  zh: '点击下方按钮提交您的反馈。\n您的意见对改进服务非常重要。',
  ja: '下のボタンを押してフィードバックをお寄せください。\nご意見はサービス改善に役立てます。',
  vi: 'Nhấn nút bên dưới để gửi phản hồi của bạn.\nÝ kiến của bạn giúp chúng tôi cải thiện dịch vụ.',
};

const FEEDBACK_BTN: Record<LangId, string> = {
  ko: '구글폼으로 피드백 남기기',
  en: 'Leave Feedback via Google Form',
  zh: '通过 Google 表单提交反馈',
  ja: 'Googleフォームでフィードバックを送る',
  vi: 'Gửi phản hồi qua Google Form',
};

// ── 메인 컴포넌트 ────────────────────────────────────────────
interface Props {
  lang: LangId;
  onClose: () => void;
}

const FeedbackThread: React.FC<Props> = ({ lang, onClose }) => {
  const t = useTranslate(lang);

  const handleOpen = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    /* 딤 배경 */
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* 패널 */}
      <div
        className="relative w-full sm:max-w-md sm:mx-auto bg-gusring-surface rounded-t-5xl flex flex-col animate-slide-up shadow-card-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* 드래그 핸들 */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="drag-handle" />
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gusring-border">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gusring-yellow rounded-2xl flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
            <h2 className="font-black text-gusring-text text-base leading-tight">
              {t(UIStrings.fbTitle)}
            </h2>
          </div>
          <button
            className="btn-press w-8 h-8 rounded-full bg-gusring-bg flex items-center justify-center text-gusring-text-sub"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>

        {/* 본문 */}
        <div className="flex flex-col items-center justify-center px-6 py-12 gap-6 text-center">
          <div className="w-16 h-16 bg-gusring-yellow/20 rounded-3xl flex items-center justify-center">
            <MessageCircle size={28} className="text-gusring-brand-500" />
          </div>

          <div className="space-y-2">
            {FEEDBACK_DESC[lang].split('\n').map((line, i) => (
              <p key={i} className={i === 0
                ? 'font-black text-gusring-text text-base'
                : 'text-gusring-text-sub text-sm'
              }>
                {line}
              </p>
            ))}
          </div>

          <button
            className="btn-press flex items-center gap-2 px-6 py-3.5 bg-gusring-yellow rounded-2xl font-black text-white text-sm shadow-yellow-sm w-full justify-center"
            onClick={handleOpen}
          >
            <ExternalLink size={16} />
            {FEEDBACK_BTN[lang]}
          </button>
        </div>

        <div className="safe-bottom" />
      </div>
    </div>
  );
};

export default FeedbackThread;
