// console.log("inside display page");
//  Crafty.init(2000,480, document.getElementById('game1'));
//  var game1=document.getElementById('game1');
// for(var i=0;i<objList.length;i++){
// 	console.log(objList[i].src);
// 	var ele=document.getElementById('imgg');
// 	ele.src=objList[i].src;

// 	  Crafty.sprite(ele.naturalWidth,ele.naturalHeight, ele.src, {flower:[0,0]});
// var bg = Crafty.e("2D, DOM, flower,Mouse").attr({
// 	w:objList[i].w,
// 	h:objList[i].h,
// 	 x:objList[i].x,
//      y:objList[i].y
//              	});
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var wx=window.innerWidth;
var wy=window.innerHeight;
var sh=wy/480;
console.log("wx="+wx+"wy="+wy);

Crafty.init(1000,wy, document.getElementById('game1'));

console.log('inside display');
for(var i=0;i<objList.length;i++){

		var ele=document.getElementById('imgg');
	ele.src=objList[i].src;
	
	Crafty.sprite(ele.naturalWidth,ele.naturalHeight, ele.src, {flower:[0,0]});
    var bg = Crafty.e("2D, DOM, flower,Mouse").attr({
	w:objList[i].w*1.8,
	h:objList[i].h*sh,
	x:objList[i].x+objList[i].w*0.9,
    y:objList[i].y+objList[i].h*sh/2
             	});
 
  if(objList[i].apple==true){
    selectedEntity.addComponent('Gravity');
    selectedEntity.gravity('Floor');
   }
   if(objList[i].collision==true){
    selectedEntity.addComponent('Solid');  
   }
if(objList[i].rotate==true){
   objList[i].rotation = 45;
}
var g=objList[i].gravity;
if(g.length!=0){
  for(var j=0;j<g.length;j++){
  
    var line=Crafty.e('2D, DOM, Color,Mouse').attr({
    x:g[j].x,
    y:g[j].y+10,
    w:g[j].w,
    h:3
  });
  line.addComponent('Floor');  
}
}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var square = Crafty.e("2D, DOM, Mouse, Color,Keyboard").attr({
	x:0,
	y:0,
	w:100,
	h:100
}).color('green').bind('Click', function(MouseEvent){
  alert('clicked', MouseEvent);
});
var start=1;
var stop=100;
square.addComponent('Twoway');
square.twoway(200);

for(var i=start;i<=stop;i++){
	console.log("hi hi abeer");

}

// 	var wasTriggered = false;

// square.requires('KeyboardState')
//    .bind('KeyDown', function(evt) {
//       wasTriggered = true;
//       console.log('keyDown');
//      // square.x+=100;
//    }).bind('KeyUp', function(evt) {
//       wasTriggered = true;
//        console.log('keyup');
//    });
  // square.bind('Click',function(e){
   // console.log('inside click');
//    	square.triggerKey('KeyDown', { key: Crafty.keys.RIGHT_ARROW });
// for(var h=0;h<1000;h++){
// console.log('d');
// }
// square.triggerKey('KeyUp', { key: Crafty.keys.RIGHT_ARROW });

// square.triggerKey('KeyDown', { key: Crafty.keys.RIGHT_ARROW });
// for(var h=0;h<1000;h++){
// console.log('d');
// }
//  square.triggerKey('KeyUp', { key: Crafty.keys.RIGHT_ARROW });

// square.triggerKey('KeyDown', { key: Crafty.keys.RIGHT_ARROW });
// for(var h=0;h<1000;h++){
// console.log('d');
// }
//  square.triggerKey('KeyUp', { key: Crafty.keys.RIGHT_ARROW });

// Crafty.log(wasTriggered); // prints false
// console.log(square.x);


  // });









