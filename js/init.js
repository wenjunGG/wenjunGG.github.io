/**
 * 初始化js
 * @authors lewis (847.55719@qq.com)
 * @date    2019-01-25 18:49:58
 * @version $Id$
 */



var html = document.querySelector('html');
changeRem();
//添加resize事件
window.addEventListener('resize', changeRem);

function changeRem() {
	//获取设备宽度
	var width = html.getBoundingClientRect().width;
	//console.log( width );
	html.style.fontSize = width / 10 + 'px';
}