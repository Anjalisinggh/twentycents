import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Fallback to 'ja' if locale is undefined
  const validLocale = locale || 'ja';
  
  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default
  };
});

