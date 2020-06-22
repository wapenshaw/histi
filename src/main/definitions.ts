export interface FileOptions {
	imgPath: string;
	quality: number;
	destPath: string;
}
export function convertToFo(options: any) {
	const { imgPath, quality, destPath } = options;
	if (typeof imgPath === 'string' && typeof quality === 'string' && typeof destPath === 'string') {
		return { imgPath, quality: parseInt(quality, 10), destPath } as FileOptions;
	} else {
		throw new Error("Options Object isn't in the correct format");
	}
}
