/*
 * @CreateTime: Jun 19, 2020 3:16 AM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 19, 2020 3:21 AM
 * @Description: Modify Here, Please
 */
import { App, BrowserWindow } from 'electron';
import * as path from 'path';

export const createAboutWindow = (app: App) => {
	path.join(__dirname, 'preload.js');

	const win = new BrowserWindow({
		width: 400,
		height: 410,
		resizable: true,
		icon: path.join(__dirname, '../../app/icons/png/256x256.png'),
		backgroundColor: 'white',
		frame: true,
	});
	win.loadURL(path.join(__dirname, '../../app/about.html'));
	return win;
};
