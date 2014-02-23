jquery.textAnimation
====================

1文字づつテキストをアニメーションで表示するjQuery  Plugin

[DEMO]
[DEMO]: http://github.develo.org/jquery.textAnimation/
（下のエリアのコードを使えばその動きを実行することができます。）

仕様
------
1. 1文字づつテキストをアニメーションで表示する

使い方
------
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.textAnimation.js"></script>
	<script type="text/javascript">
		$('.text1').textAnimation();
	</script>


オプション
------


 * speed: CSSのスピード（ms）
 * delay: 次の文字までの時間（ms）
 * left: leftの移動量（px）
 * top: topの移動量（px）
 * scale: transformのscale変化量
 * rotateY: transformのrotateY変化量
 * rotateX: transformのrotateX変化量
 * translateZ: transformのrotateZ変化量
 * letterSpacing: letter-spacing変化量
 * easing: transition-timing-functionで指定できるeasing,
 * backgroundColor: 変化させたい背景色
 * isRandomScale:  scaleをランダムの値にするか。（delayで指定した値までのランダム）
 * isRandomPosition: left,topをランダムの値にするか。（left,topで指定した値までのランダム  マイナスの値も含む 200の場合 -200 ~ 200となる）
 * isRandomRotateY: rotateYをランダムの値にするか。（rotateYで指定した値までのランダム）
 * isRandomRotateX: rotateXをランダムの値にするか。（rotateXで指定した値までのランダム）
 * isRandomTranslateZ: rotateZをランダムの値にするか。（rotateZで指定した値までのランダム）
 * isRandomSpeed: speedをランダムの値にするか。（speedで指定した値までのランダム）
 * isRandomDelay: delayをランダムの値にするか。


### 初期設定 ###
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

ライセンス
----------
+ Copyright 2014 &copy; kamem
+ [http://www.opensource.org/licenses/mit-license.php][mit]

[MIT]: http://www.opensource.org/licenses/mit-license.php