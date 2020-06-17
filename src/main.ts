/*
 * @CreateTime: Jun 17, 2020 5:30 AM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 17, 2020 5:30 AM
 * @Description: Modify Here, Please
 */
import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createMainWindow(): void {
	const mainWindow = new BrowserWindow({
		title: 'Histi',
		width: 550,
		height: 650,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	mainWindow.loadFile(path.join(__dirname, '../resources/index.html'));
}

app.on('ready', createMainWindow);
