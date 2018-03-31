console.log("inside display page");
 Crafty.init(2000,480, document.getElementById('game1'));
for(var i=0;i<objList.length;i++){
	console.log(objList[i].src);
	var ele=document.getElementById('imgg');
	ele.src=objList[i].src;

	  Crafty.sprite(ele.naturalWidth,ele.naturalHeight, ele.src, {flower:[0,0]});
var bg = Crafty.e("2D, DOM, flower,Mouse").attr({
	w:objList[i].w,
	h:objList[i].h,
	 x:objList[i].x,
     y:objList[i].y
             	});
}



// var square = Crafty.e("2D, DOM, Mouse, Color,").attr({
// 	x:10,
// 	y:10,
// 	w:100,
// 	h:100
// }).color('green');
// var start=1;
// var stop=2;
// square.addComponent('Twoway');
// square.twoway(200);
// for(var i=start;i<=stop;i++){
// 	square.trigger(Crafty.keys.RIGHT_ARROW, {color:"blue"});
// }
