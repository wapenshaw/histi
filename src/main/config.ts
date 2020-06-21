/*
 * @CreateTime: Jun 17, 2020 7:19 PM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 17, 2020 7:19 PM
 * @Description: Modify Here, Please
 */
import * as path from 'path';
import * as url from 'url';

export const dev = process.env.NODE_ENV !== 'production';
// export const devURL = 'http://localhost:1980';
export const devURL = url.format({
	pathname: path.join(__dirname, '../../app/index.html'),
	protocol: 'file:',
	slashes: true,
});
export const prodURL = url.format({
	pathname: path.join(__dirname, '../../app/index.html'),
	protocol: 'file:',
	slashes: true,
});

export const loadURL = dev ? devURL : prodURL;
// export const nodeIntegration = true; // secure ...
export const isNotMac = process.platform !== 'darwin';
