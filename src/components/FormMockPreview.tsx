import React from 'react';
import { FormItem, I18nString, LangId } from '../types';

// 언어별 "이미지 준비중" 문구
const PREPARING: Record<string, { title: string; sub: string }> = {
  ko: { title: '이미지 준비중',      sub: '해당 서식 이미지를 준비하고 있어요.' },
  en: { title: 'Image coming soon',  sub: 'We\'re preparing the form image.'    },
  zh: { title: '图片准备中',          sub: '我们正在准备表格图片。'               },
  ja: { title: '画像準備中',          sub: '書類の画像を準備しています。'         },
  vi: { title: 'Đang chuẩn bị ảnh', sub: 'Chúng tôi đang chuẩn bị hình ảnh mẫu đơn.' },
};

interface Props {
  form: FormItem;
  t: (obj: I18nString) => string;
  lang?: LangId;
}

const FormMockPreview: React.FC<Props> = ({ form, t, lang }) => {
  const imgSrc = lang && form.images?.[lang];

  // 실제 이미지가 있으면 그대로 표시
  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt={t(form.title)}
        className="w-full block"
        style={{ display: 'block' }}
      />
    );
  }

  // 이미지 없으면 "준비중" 플레이스홀더
  const msg = PREPARING[lang ?? 'ko'] ?? PREPARING.ko;

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 px-6 text-center bg-gusring-bg">
      <img src="/sign.png" alt="preparing" className="w-36 h-auto object-contain" />
      <div className="space-y-1">
        <p className="font-black text-gusring-text text-[15px]">{msg.title}</p>
        <p className="text-[12px] text-gusring-text-hint leading-relaxed">{msg.sub}</p>
      </div>
    </div>
  );
};

export default FormMockPreview;
