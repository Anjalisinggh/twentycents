"use client";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    
   if (newLocale === 'ja') {
    router.push('/ja');
   } else {
    router.push('/en');
   }
  };
  console.log(locale, router, pathname);
  console.log(locale == 'ja', locale == 'en');
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('ja')}
        className={`px-3 py-1.5 text-sm font-medium transition-all rounded ${
            pathname == '/ja'
            ? 'bg-white text-black'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-all rounded ${
            pathname == '/en'
            ? 'bg-white text-black'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        English
      </button>
    </div>
  );
}
