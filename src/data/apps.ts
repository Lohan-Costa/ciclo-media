import type { Lang } from '../i18n/ui';

export interface AppEntry {
	/** URL slug, e.g. ciclo.media/orbita */
	slug: string;
	repoOwner: string;
	repoName: string;
	/** 'desktop' apps ship installers via GitHub Releases; 'web' apps run in-browser. */
	kind: 'desktop' | 'web';
	/** Only for kind: 'web' */
	webUrl?: string;
	status?: 'alpha' | 'beta';
	name: string;
	tagline: Record<Lang, string>;
	description: Record<Lang, string>;
}

export const apps: AppEntry[] = [
	{
		slug: 'orbita',
		repoOwner: 'Lohan-Costa',
		repoName: 'orbita',
		kind: 'desktop',
		status: 'alpha',
		name: 'Órbita',
		tagline: {
			pt: 'Sincronização multicâmera automática para montadores(as).',
			en: 'Automatic multicam sync for editors.',
		},
		description: {
			pt: 'O Órbita sincroniza automaticamente o material bruto de múltiplas câmeras, poupando tempo de organização antes da montagem. Está em fase alpha: bugs são esperados e o seu retorno ajuda o programa a evoluir. Use sempre em cópias do material, nunca no original.',
			en: 'Órbita automatically syncs raw footage from multiple cameras, saving organization time before editing starts. It is in alpha: bugs are expected, and your feedback helps it improve. Always use it on copies of your footage, never the original.',
		},
	},
	{
		slug: 'vp9-to-wav-dcp',
		repoOwner: 'Lohan-Costa',
		repoName: 'vp9-to-wav-dcp',
		kind: 'desktop',
		name: 'VP9 para WAV',
		tagline: {
			pt: 'Conversor de vídeo VP9 para WAV PCM, pronto para DCP.',
			en: 'VP9 video to WAV PCM converter, DCP-ready.',
		},
		description: {
			pt: 'Converte vídeos em VP9 para áudio WAV PCM seguindo o padrão ISDCF Doc 13, facilitando a inclusão de uma trilha de Libras em DCPs.',
			en: 'Converts VP9 video into WAV PCM audio following the ISDCF Doc 13 standard, making it easy to include a sign-language track in DCPs.',
		},
	},
	{
		slug: 'legenda-para-aaf',
		repoOwner: 'Lohan-Costa',
		repoName: 'legenda-para-aaf',
		kind: 'web',
		webUrl: 'https://lohan-costa.github.io/legenda-para-aaf/',
		name: 'Legenda para AAF',
		tagline: {
			pt: 'Converta legendas .srt ou .txt para .stl do Avid Media Composer.',
			en: 'Convert .srt or .txt subtitles to Avid Media Composer .stl.',
		},
		description: {
			pt: 'Ferramenta simples que roda direto no navegador: transforma arquivos de legenda .srt ou .txt no formato .stl usado pelo Avid Media Composer, sem precisar instalar nada.',
			en: 'A simple browser-based tool that turns .srt or .txt subtitle files into the .stl format used by Avid Media Composer, no install required.',
		},
	},
];

export function getApp(slug: string): AppEntry | undefined {
	return apps.find((app) => app.slug === slug);
}
