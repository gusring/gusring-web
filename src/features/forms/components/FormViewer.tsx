import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import { ZoomOut, Info, Maximize2 } from 'lucide-react';
import { FormItem, I18nString, LangId } from '../../../shared/types';
import FormMockPreview from './FormMockPreview';
import ImageLightbox from '../../../components/ImageLightbox';
import { UIStrings } from '../../../data/strings';

interface Props {
  form: FormItem;
  t: (obj: I18nString) => string;
  lang?: LangId;
}

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

const getTouchDist = (t1: React.Touch, t2: React.Touch) => {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

const FormViewer: React.FC<Props> = ({ form, t, lang }) => {
  const [scale, setScale]       = useState(1);
  const [pan, setPan]           = useState({ x: 0, y: 0 });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imgSrc = lang ? form.images?.[lang] : undefined;

  const initDist  = useRef(0);
  const initScale = useRef(1);
  const initPan   = useRef({ x: 0, y: 0 });
  const lastPan   = useRef({ x: 0, y: 0 });
  const lastTap   = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, [form.id]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      initDist.current  = getTouchDist(e.touches[0], e.touches[1]);
      initScale.current = scale;
      initPan.current   = { ...pan };
    } else if (e.touches.length === 1) {
      lastPan.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      const now = Date.now();
      if (now - lastTap.current < 280) {
        if (scale > 1.2) { setScale(1); setPan({ x: 0, y: 0 }); }
        else { setScale(2.5); }
      }
      lastTap.current = now;
    }
  }, [scale, pan]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dist = getTouchDist(e.touches[0], e.touches[1]);
      setScale(clamp(initScale.current * (dist / initDist.current), 1, 4));
    } else if (e.touches.length === 1 && scale > 1.05) {
      const dx = e.touches[0].clientX - lastPan.current.x;
      const dy = e.touches[0].clientY - lastPan.current.y;
      setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      lastPan.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, [scale]);

  const handleTouchEnd = useCallback(() => {
    if (scale < 1.08) { setScale(1); setPan({ x: 0, y: 0 }); }
  }, [scale]);

  const resetZoom = () => { setScale(1); setPan({ x: 0, y: 0 }); };

  return (
    <>
    <div className="rounded-3xl overflow-hidden border border-gusring-border bg-white shadow-card">

      {/* 힌트 바 */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gusring-bg border-b border-gusring-border">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gusring-yellow rounded-full flex items-center justify-center">
            <Info size={11} className="text-gusring-brand-950" />
          </div>
          <span className="text-[11px] font-bold text-gusring-text-sub">
            {scale > 1.1 ? t(UIStrings.zoomHintReset) : t(UIStrings.zoomHint)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {scale > 1.1 && (
            <button
              onClick={resetZoom}
              className="btn-press flex items-center gap-1 px-2.5 py-1 bg-white rounded-xl text-[11px] font-bold text-gusring-brand-600 border border-gusring-brand-100"
            >
              <ZoomOut size={12} /> {t(UIStrings.zoomReset)}
            </button>
          )}
          {imgSrc && (
            <button
              onClick={() => setLightboxOpen(true)}
              className="btn-press flex items-center gap-1 px-2.5 py-1 bg-white rounded-xl text-[11px] font-bold text-gusring-text-sub border border-gusring-border"
            >
              <Maximize2 size={12} />
            </button>
          )}
        </div>
      </div>

      {/* 줌어블 서식 영역 */}
      <div
        ref={containerRef}
        className="relative overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
        style={{ minHeight: 260 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)`,
            transformOrigin: 'top center',
            transition: scale === 1 ? 'transform 0.32s cubic-bezier(0.34,1.2,0.64,1)' : 'none',
            willChange: 'transform',
          }}
        >
          <FormMockPreview form={form} t={t} lang={lang} />
        </div>
      </div>

    </div>

    {/* 라이트박스 */}
    {lightboxOpen && imgSrc && (
      <ImageLightbox
        images={[imgSrc]}
        initialIndex={0}
        onClose={() => setLightboxOpen(false)}
      />
    )}
    </>
  );
};

export default FormViewer;
