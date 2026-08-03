import { ui, defaultLang, type Lang } from './ui';

export type { Lang };

export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split('/');
	if (maybeLang && maybeLang in ui) return maybeLang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function useTranslatedPath(lang: Lang) {
	return function translatePath(path: string, targetLang: Lang = lang) {
		return targetLang === defaultLang ? path : `/${targetLang}${path}`;
	};
}
