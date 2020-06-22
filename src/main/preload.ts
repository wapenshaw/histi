/*
 * @CreateTime: Jun 17, 2020 5:29 AM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 17, 2020 5:29 AM
 * @Description: Modify Here, Please
 */

import { ipcRenderer } from 'electron';
import * as os from 'os';
import * as path from 'path';

window.addEventListener('DOMContentLoaded', () => {
	const outputPath = document.getElementById('outputpath');
	const outputHeader = document.getElementById('outputheader');
	if (outputPath) {
		outputPath.innerText = path.join(os.homedir(), 'histi');
	}
	if (outputHeader) {
		outputHeader.innerText = 'Output Path;';
	}
});

window.addEventListener('change', (e) => {
	const fileInput = document.getElementById('imgupload') as HTMLInputElement;
	if (fileInput.files!.length > 0) {
		const fileName = document.getElementById('imageurl') as HTMLInputElement;
		fileName!.innerText = fileInput.files![0].name;
		fileName!.value = fileInput.files![0].name;
	}
});

window.addEventListener('submit', (e) => {
	e.preventDefault();
	let imgPath: string = '';
	let quality: string = '';

	const qualityrange = document.getElementById('qualityrange') as HTMLInputElement;
	const destPath = path.join(os.homedir(), 'histi');
	const imageupload = document.getElementById('imgupload') as HTMLInputElement;

	if (imageupload?.files) {
		imgPath = imageupload.files[0].path;
	}

	if (qualityrange) {
		quality = qualityrange.value;
	}
	ipcRenderer.send('image-resize', {
		imgPath,
		quality,
		destPath,
	});
	// console.log(imgPath, quality, destPath);
});

ipcRenderer.on('resize-done', (event, filepath) => {
	const outputPath = document.getElementById('outputpath');
	const outputHeader = document.getElementById('outputheader');
	if (outputPath) {
		outputPath.innerText = `${filepath}`;
	}
	if (outputHeader) {
		outputHeader.innerText = 'Your Image has been Shrunk! Its at: ';
	}
});
