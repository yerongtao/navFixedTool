$(function(){

	$(window).resize();

	//平滑滚动导航
	// 点击这些链接的时候，一个平滑滚动的效果
	$('#fstPage-down a, nav a, #logo, .linkAboutMe').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-$("#nav").outerHeight()}, 600);
		event.preventDefault();
	});

	$("#nav").navFixed();
});

$(window).resize(function(){
    //设置 firstPage 页的高度为屏幕高度
	$("#firstPage").css("height", $(window).height());
	//设置 thanks 页的高度为屏幕高度 - 上内边距 - 下内边距 - 导航栏高度
	$("#thanks").css("height", $(window).outerHeight()-rmpx($("#thanks").css("padding-top"))-rmpx($("#thanks").css("padding-bottom"))-52+"px");

	//设置 firstPage 页的文字运动形式
	//fadeIn() 淡入效果
	//animate() 方法执行 CSS 属性集的自定义动画，运动到距上方top为(屏幕高度 - p标签的元素高度 ) / 2
	//耗时500毫秒
	$('#firstPage>p').stop().fadeIn("normal").animate({"top":($(window).height()-$('#firstPage>p').outerHeight())/2},500);
	//设置 thank 页 p 标签的上边距为屏幕高度 - p 标签的元素高度
	// outerWidth()方法用于获得包括内边界(padding)和边框(border)的元素宽度，如果outerWidth()方法的参数为true则外边界(margin)也会被包括进
	$('#thanks>p').css({"top":($(window).height()-$('#thanks>p').outerHeight())/2}); 
}); 

function rmpx(str){
	var num;
	//substring() 用于提取字符串中介于两个指定下标之间的字符
	// 语法（stringObject.substring(start,stop)）
	num = parseInt(str.substring(0, str.length-2));
	return num;
}