import { useEffect } from 'react';

const GTM_ID = 'GTM-N2VDBFZX';

const loadGTM = () => {
  if (document.getElementById('gtm-script')) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

export default function GTMDeferredLoader() {
  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;

    const scheduleLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadGTM, { timeout: 3000 });
      } else {
        window.setTimeout(loadGTM, 2000);
      }
    };

    if (document.readyState === 'complete') {
      scheduleLoad();
      return undefined;
    }

    window.addEventListener('load', scheduleLoad, { once: true });
    return () => window.removeEventListener('load', scheduleLoad);
  }, []);

  return null;
}
