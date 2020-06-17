/*
 * @CreateTime: Jun 17, 2020 5:29 AM
 * @Author: Siddharth Abbineni
 * @Contact: thescarletcars@gmail.com
 * @Last Modified By: Siddharth Abbineni
 * @Last Modified Time: Jun 17, 2020 5:29 AM
 * @Description: Modify Here, Please
 */
window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector: string, text: string) => {
		const element = document.getElementById(selector);
		if (element) {
			element.innerText = text;
		}
	};
	//this is testing

	for (const type of ['chrome', 'node', 'electron']) {
		replaceText(`${type}-version`, (process.versions as any)[type]);
	}
});
