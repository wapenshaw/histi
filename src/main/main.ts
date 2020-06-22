/*
 * @CreateTime: Jun 17, 2020 7:21 PM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 19, 2020 3:19 AM
 * @Description: Modify Here, Please
 */
import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { isNotMac } from './config';
import { convertToFo, FileOptions } from './definitions';
import { createWindow } from './mainwindow';
import { menuTemplate } from './menu';
import { resizeImage } from './resize';

let win: BrowserWindow | null = null;

process.env.NODE_ENV = 'development';

app.on('ready', async () => {
	// enableIPC();

	const mainMenu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(mainMenu);
	win = await createWindow(app);
});

app.on('window-all-closed', () => {
	if (isNotMac) {
		app.quit();
	}
});

app.on('activate', async () => {
	if (!win) {
		win = await createWindow(app);
		win.on('closed', () => {
			win = null;
		});
	}
});

ipcMain.on('image-resize', (e, options) => {
	const fileOptions: FileOptions = convertToFo(options);
	resizeImage(fileOptions).then((filePath) => {
		win?.webContents.send('resize-done', filePath);
	});
});
