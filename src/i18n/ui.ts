export const languages = {
	pt: 'Português',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
	pt: {
		'site.title': 'Ciclo Media',
		'site.tagline': 'Ferramentas para quem edita.',
		'nav.home': 'Início',

		'home.heading': 'Soluções',
		'home.subheading':
			'Apps e plugins para acelerar o fluxo de trabalho em pós-produção.',
		'home.card.viewmore': 'Ver mais',

		'app.back': 'Todas as soluções',
		'app.download.heading': 'Baixar',
		'app.download.mac': 'macOS (Apple Silicon)',
		'app.download.windows': 'Windows (64 bits)',
		'app.download.loading': 'Buscando a última versão…',
		'app.download.error':
			'Não foi possível carregar a versão mais recente agora.',
		'app.download.viewall': 'Ver todas as releases no GitHub',
		'app.download.version': 'Versão',
		'app.opentool.button': 'Abrir ferramenta',
		'app.opentool.desc': 'Roda direto no navegador, sem instalação.',
		'app.viewsource': 'Ver código no GitHub',
		'app.status.alpha': 'Alpha',
		'app.status.beta': 'Beta',

		'footer.madeby': 'Feito por Ciclo Media.',
		'footer.github': 'GitHub',
	},
	en: {
		'site.title': 'Ciclo Media',
		'site.tagline': 'Tools for editors.',
		'nav.home': 'Home',

		'home.heading': 'Solutions',
		'home.subheading':
			'Apps and plugins to speed up your post-production workflow.',
		'home.card.viewmore': 'Learn more',

		'app.back': 'All solutions',
		'app.download.heading': 'Download',
		'app.download.mac': 'macOS (Apple Silicon)',
		'app.download.windows': 'Windows (64-bit)',
		'app.download.loading': 'Fetching the latest version…',
		'app.download.error':
			'Could not load the latest version right now.',
		'app.download.viewall': 'See all releases on GitHub',
		'app.download.version': 'Version',
		'app.opentool.button': 'Open tool',
		'app.opentool.desc': 'Runs right in your browser, no install needed.',
		'app.viewsource': 'View source on GitHub',
		'app.status.alpha': 'Alpha',
		'app.status.beta': 'Beta',

		'footer.madeby': 'Made by Ciclo Media.',
		'footer.github': 'GitHub',
	},
} as const;
