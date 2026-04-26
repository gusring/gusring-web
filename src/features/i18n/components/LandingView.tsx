import React, { useState, useEffect } from 'react';
import { Language, LangId } from '../../../shared/types';

interface Props {
  languages: Language[];
  onSelect: (lang: LangId) => void;
}

const LandingView: React.FC<Props> = ({ languages, onSelect }) => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const isOdd = languages.length % 2 !== 0;
  const gridLangs = isOdd ? languages.slice(0, -1) : languages;
  const lastLang  = isOdd ? languages[languages.length - 1] : null;

  return (
    <div className="relative h-screen bg-gusring-bg flex flex-col items-center overflow-hidden safe-top safe-bottom">

      {/* 배경 데코 */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(254,219,2,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-20 w-56 h-56 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(254,219,2,0.08) 0%, transparent 70%)' }}
      />

      {/* ── 로고 및 마스코트 그룹 (시작 시 화면 전체 flex-1로 중앙 배치) ── */}
      <div 
        className={`flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] px-8 w-full
          ${isSplash ? 'flex-[10] h-full scale-110' : 'flex-1 pt-8 pb-4 scale-100'}`}
      >
        {/* 로고 */}
        <div className="animate-scale-in">
          <img
            src="/gusring_logo.png"
            alt="Gusring"
            className="w-40 sm:w-52 h-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        {/* 마스코트 */}
        <div className="animate-scale-in" style={{ animationDelay: '150ms' }}>
          <img
            src="/waving.png"
            alt="mascot"
            className="w-24 sm:w-32 h-auto object-contain animate-bounce-soft"
          />
        </div>

        {/* 영문 플랫폼 명칭 */}
        <p 
          className={`mt-3 text-[11px] sm:text-[13px] font-black text-gusring-brand-700 tracking-[0.12em] uppercase transition-all duration-700
            ${isSplash ? 'opacity-80' : 'opacity-100'}`}
        >
          Administrative Guide Platform
        </p>

        {/* 브랜드 구분선 */}
        <div
          className={`mt-4 sm:mt-6 w-10 h-[3px] rounded-full bg-[#fedb02] transition-opacity duration-500
            ${isSplash ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>

      {/* ── 언어 선택 영역 (인트로 동안 flex-0으로 공간 차지 안함) ── */}
      <div 
        className={`w-full max-w-[280px] sm:max-w-sm px-4 pb-10 flex flex-col justify-center transition-all duration-1000
          ${isSplash ? 'flex-[0.001] opacity-0 translate-y-10 pointer-events-none' : 'flex-[12] opacity-100 translate-y-0 pointer-events-auto'}`}
      >
        <div className="space-y-2">
          {/* 2-column 그리드 */}
          <div className="grid grid-cols-2 gap-2">
            {gridLangs.map((lang, idx) => (
              <button
                key={lang.id}
                onClick={() => onSelect(lang.id)}
                className="bg-gusring-surface rounded-[24px] pt-4 pb-3 px-2
                           flex flex-col items-center gap-1
                           btn-press shadow-card
                           hover:-translate-y-1 hover:shadow-card-md
                           transition-all duration-200"
              >
                <span className="text-[32px] leading-none">{lang.icon}</span>
                <span className="font-black text-gusring-text text-[13px] tracking-tight">
                  {lang.label}
                </span>
              </button>
            ))}
          </div>

          {/* 홀수일 때 마지막 항목 */}
          {lastLang && (
            <button
              onClick={() => onSelect(lastLang.id)}
              className="w-full bg-gusring-surface rounded-[24px] py-3 px-6
                         flex items-center justify-center gap-3
                         btn-press shadow-card
                         hover:-translate-y-1 hover:shadow-card-md
                         transition-all duration-200"
            >
              <span className="text-[28px] leading-none">{lastLang.icon}</span>
              <span className="font-black text-gusring-text text-[13px] tracking-tight">
                {lastLang.label}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ── 푸터 ── */}
      {!isSplash && (
        <p className="text-[9px] text-gusring-text-hint font-medium pb-4 tracking-wide animate-fade-in shrink-0">
          © 2026 Team EL · Geumcheon-gu Living Lab
        </p>
      )}
    </div>
  );
};

export default LandingView;
