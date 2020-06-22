import { shell } from 'electron';
import imagemin from 'imagemin';
import jpeg from 'imagemin-mozjpeg';
import png from 'imagemin-pngquant';
import slash from 'slash';
import { FileOptions } from './definitions';

export const resizeImage = async (options: FileOptions) => {
	try {
		const file = await imagemin([slash(options.imgPath)], {
			destination: options.destPath,
			plugins: [
				jpeg({ quality: options.quality }),
				png({
					quality: [options.quality / 100, options.quality / 100],
				}),
			],
		});
		shell.openPath(file[0].destinationPath);
		return file[0].destinationPath;
	} catch (error) {
		console.error(error);
	}
};
