/*
 * @CreateTime: Jun 19, 2020 3:17 AM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 19, 2020 3:17 AM
 * @Description: Modify Here, Please
 */
import { App, BrowserWindow } from 'electron';
import * as path from 'path';
import { dev, loadURL } from './config';

export const createWindow = async (app: App) => {
	// const preload = path.join(__dirname, 'preload.js');

	const win = new BrowserWindow({
		width: 400,
		height: 800,
		resizable: dev ? true : false,
		icon: path.join(__dirname, '../../app/icons/png/256x256.png'),
		backgroundColor: 'white',
		webPreferences: {
			preload: path.join(__dirname, './preload'),
		},
	});
	win.loadURL(path.join(__dirname, '../../app/index.html'));
	if (dev) {
		win.webContents.once('dom-ready', () => {
			win.webContents.openDevTools();
		});
	}

	return win;
};
