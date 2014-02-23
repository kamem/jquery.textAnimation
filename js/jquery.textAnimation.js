/**
 *	jQuery textAnimation.
 *	jQuery required.
 *	
 *	* Copyright 2014 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *	 
 *	Date: 2014.02.23
 *
 *	* speed: CSSのスピード（ms）
 *	* delay: 次の文字までの時間（ms）
 *	* left: leftの移動量（px）
 *	* top: topの移動量（px）
 *	* scale: transformのscale変化量
 *	* rotateY: transformのrotateY変化量
 *	* rotateX: transformのrotateX変化量
 *	* translateZ: transformのrotateZ変化量
 *	* letterSpacing: letter-spacing変化量
 *	* easing: transition-timing-functionで指定できるeasing,
 *	* backgroundColor: 変化させたい背景色
 *	* isRandomScale:  scaleをランダムの値にするか。（delayで指定した値までのランダム）
 *	* isRandomPosition: left,topをランダムの値にするか。（left,topで指定した値までのランダム  マイナスの値も含む 200の場合 -200 ~ 200となる）
 *	* isRandomRotateY: rotateYをランダムの値にするか。（rotateYで指定した値までのランダム）
 *	* isRandomRotateX: rotateXをランダムの値にするか。（rotateXで指定した値までのランダム）
 *	* isRandomTranslateZ: rotateZをランダムの値にするか。（rotateZで指定した値までのランダム）
 *	* isRandomSpeed: speedをランダムの値にするか。（speedで指定した値までのランダム）
 *	* isRandomDelay: delayをランダムの値にするか。
 *
 * @class textAnimation
*/

(function($,global){

$.fn.textAnimation = function(options) {
	var $content = $(this),
	
	c = $.extend({
		speed: 1000,
		delay: 200,
		left: 0,
		top: 0,
		scale: 1,
		rotateY: 0,
		rotateX: 0,
		translateZ: 0,
		letterSpacing: $content.css(' letterSpacing'),
		easing: 'ease-out',
		backgroundColor: 'transparent',
		isRandomScale:  false,
		isRandomPosition:  false,
		isRandomRotateY: false,
		isRandomRotateX: false,
		isRandomTranslateZ: false,
		isRandomSpeed: false,
		isRandomDelay: false
	},options),
	speed = c.speed,
	delay = c.delay,
	left = c.left,
	top = c.top,
	scale = c.scale,
	rotateY = c.rotateY,
	rotateX = c.rotateX,
	translateZ = c.translateZ,
	letterSpacing = c.letterSpacing,
	easing = c.easing,
	backgroundColor = c.backgroundColor,
    isRandom = {
        scale:  c.isRandomScale,
        position:  c.isRandomPosition,
        rotateY: c.isRandomRotateY,
        rotateX: c.isRandomRotateX,
        translateZ: c.isRandomTranslateZ,
        speed: c.isRandomSpeed,
        delay: c.isRandomDelay
    };
    
	$content.each(function(){
		var  text = $(this).html().split(/(<\/?[^>]+?>)\/?/g),
			tag = [],
			defaultCss = {
				letterSpacing: $(this).css('letterSpacing'),
				position: $(this).css('position')
			};
	
		for(var i = 0;i < text.length;i++) {
			if(text[i][0] !== '<') {
				for(var j = 0;j < text[i].length;j++) {
					tag.push('<span>' + text[i][j] + '</span>');
				}
			} else {
				tag.push(text[i]);
			};
		};
	
		var $character = $(this).html(tag.join('')).find('span');
	        
		//CSS初期設定
		$(this).css({
			opacity: 1
		});
        
		//一文字ずつのCSS初期設定
		$character.css({
			position: 'relative',
			opacity: 0,
			display: 'inline-block',
			letterSpacing: letterSpacing,
			transitionProperty: 'all',
			transitionDuration: speed + 'ms',
			transitionTimingFunction: easing
		});
        
		$character.each(function(i){
			//それぞれのランダムの値
			var random = {
				left: Math.random() - Math.random(),
				top: Math.random() - Math.random(),
				delay: Math.random() * text.length,
				scale: Math.random(),
				rotateY: Math.random(),
				rotateX: Math.random(),
				translateZ: Math.random(),
				speed: Math.random()
			};

			//一文字ずつCSSを割り当てる
			$(this).css({
				backgroundColor: backgroundColor,
				transformStyle: 'preserve-3d',
				transitionDuration: (isRandom.seed ? random.speed : speed) + 'ms',
				transform: [
					'translate(',
					(isRandom.position ? random.left : 1) * left + 'px' + ',',
					(isRandom.position ? random.top : 1) * top + 'px' + ')',
					'rotateY(' + (isRandom.rotateY ? random.rotateY : 1) * rotateY + 'deg)',
					'rotateX(' + (isRandom.rotateX ? random.rotateX : 1) * rotateX + 'deg)',
					'translateZ(' + (isRandom.translateZ ? random.translateZ : 1) * translateZ + 'px)',
					'scale(' + (isRandom.scale ? random.scale : 1) * scale + ')'].join(' ')
			});
            
			//delayに合わせてCSSを初期状態に戻す
			setTimeout(function(){
				$character.eq(i).css({
					backgroundColor: 'transparent',
					transform: 'scale(' + 1 + ')',
					letterSpacing: defaultCss.letterSpacing,
					opacity: 1
				});
			},delay * (isRandom.delay ? random.delay : i));
		});
	});
};

}(jQuery,this));
