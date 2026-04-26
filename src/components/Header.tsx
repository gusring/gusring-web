import React from 'react';
import { ArrowLeft, Map, MessageSquare } from 'lucide-react';
import { Language, LangId, ViewName } from '../shared/types';

interface Props {
  view: ViewName;
  currentLang: LangId;
  languages: Language[];
  onBack: () => void;
  onLanding: () => void;
  onMap: () => void;
}

const FEEDBACK_URL = 'https://forms.gle/wmRLR4rZjTGkge2u6';

const Header: React.FC<Props> = ({ view, currentLang, languages, onBack, onLanding, onMap }) => {
  return (
    <header className="sticky top-0 z-30 glass border-b border-gusring-border safe-top">
      <div className="px-5 h-14 flex items-center justify-between">
        {/* 왼쪽: 뒤로가기 or 로고 */}
        <div className="flex items-center gap-3">
          {(view === 'detail' || view === 'map') ? (
            <button
              onClick={onBack}
              className="btn-press p-2 -ml-2 rounded-2xl hover:bg-gusring-yellow-soft text-gusring-brand-600 transition-colors"
              aria-label="뒤로가기"
            >
              <ArrowLeft size={22} />
            </button>
          ) : (
            <button onClick={onLanding} className="btn-press" aria-label="홈으로">
              <img
                src="/gusring_logo.png"
                alt="Gusring"
                className="h-9 w-auto object-contain rounded-xl"
                style={{ mixBlendMode: 'multiply' }}
              />
            </button>
          )}
        </div>

        {/* 오른쪽: 지도 + 피드백 */}
        <div className="flex items-center gap-2">
          <button
            onClick={onMap}
            className={`btn-press h-9 w-9 flex items-center justify-center rounded-xl border border-gusring-brand-100 shadow-card active:scale-95 transition-all ${
              view === 'map' ? 'bg-gusring-brand-600 text-white' : 'bg-gusring-yellow-soft text-gusring-brand-700'
            }`}
            aria-label="통합민원실 지도"
          >
            <Map size={18} />
          </button>
          <button
            onClick={() => window.open(FEEDBACK_URL, '_blank', 'noopener,noreferrer')}
            className="btn-press h-9 w-9 flex items-center justify-center bg-gusring-yellow-soft rounded-xl text-gusring-brand-700 border border-gusring-brand-100 shadow-card active:scale-95 transition-transform"
            aria-label="피드백 남기기"
          >
            <MessageSquare size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
