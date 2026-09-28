import React from 'react';
import { Phone, Send } from 'lucide-react';
import { content } from '../lib/content';
import { track } from '../lib/tracking';

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="flex gap-3">
        <a 
          href={`tel:${content.hotline.replace(/\s/g, '')}`} onClick={() => track('click_phone', { location: 'floating_cta' })} 
          className="flex min-h-12 flex-1 items-center justify-center gap-2 border border-slate-300 bg-white py-3 text-xs font-bold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:text-sm"
        >
          <Phone className="w-5 h-5 text-brand-blue" />
          <span>GỌI TƯ VẤN</span>
        </a>
        <a 
          href="#registration-form" onClick={() => track('click_cta', { location: 'floating_cta', cta: 'registration' })} 
          className="flex min-h-12 flex-[1.5] items-center justify-center gap-2 whitespace-nowrap bg-brand-red px-2 py-3 text-xs font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:text-sm"
        >
          <Send className="w-5 h-5" />
          <span>GIỮ SUẤT MIỄN PHÍ</span>
        </a>
      </div>
    </div>
  );
}
