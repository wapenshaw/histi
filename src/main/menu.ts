// import { MenuItemConstructorOptions } from 'electron';

import { MenuItemConstructorOptions, app } from 'electron';
import { isNotMac, dev } from './config';
import { createAboutWindow } from './aboutwindow';

export const menuTemplate: MenuItemConstructorOptions[] = [
	...(!isNotMac ? [{ role: 'appMenu' } as const] : []),
	{
		role: 'fileMenu',
	},
	{
		label: 'About',
		submenu: [
			{
				label: 'About Histi',
				click: () => {
					createAboutWindow(app);
				},
			},
		],
	},
	...(dev ? [{ role: 'viewMenu' as const }] : []),
];
