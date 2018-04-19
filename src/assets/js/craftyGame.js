

// // Get an array of all 2D entities
// var array_of_entities = Crafty("2D").get();

//window.onload = function(){



var walls=[];

var maxFlag=false;
var arrObj=[];//for backgroundobject final

var lastScrollTop = 0;

	
var isDown=false;
var isUp=false;
var isBack=false;
var isFor=true;
//}
var toyObj=[];
var actionA=[];
var actionAEnt=[];
var objBackground=function(p){
var that={};

that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;
that.src=p.src;
that.id=p.id;
that.rotate=p.rotate;
that.collision=p.collision;
that.freez=p.freez;
that.apple=p.apple;
that.gravity=[];
return that;
}
var actionAEntObj=function(p){
var that={};

that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;
that.src=p.src;
that.id=p.id;
return that;
}
var lineObj=function(p){
 var that={};

that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;

return that;
}

var actionInfo=function(p){
var that={};

that.x=p.x;
that.y=p.y;
that.xf=p.xf;
that.yf=p.yf;

that.w=p.w;
that.h=p.h;
//that.src=p.src;
that.id=p.id;
that.action=p.action;
that.startTime=p.startTime;
that.stopTime=p.stopTime;
that.keyType=p.keyType;
that.speed=p.speed;
return that;
}

var actionList=[];
var entList=[];
var objAction=function(p){
	var that={};
that.move=p.move;
that.jump=p.jump;
that.fly=p.fly;
// that.initPosX=p.initPosX;
// that.initPosY=p.initPosY;
that.dissapear=p.dissapear;
that.growing=p.growing;
that.delete=p.delete;
that.copy=p.copy;
that.rotate=p.rotate;
that.expand=p.expand;
that.collision=p.collision;
that.freez=p.freez;
that.gravity=p.gravity;
that.apple=p.apple;
that.order=p.order;
return that;

}
var entityNameCounter=0;
var xpos;
var ypos;
var Game;
var objList=[];
var circles=[];
var gravity_list=[];
var lines=[];
var cirList=[];
var selectedEntity;

var bg;

var expandFlag=false;
var collisionFlag=false;
var freezFlag=false;
var collisionFlag=false;
var gravityFlag=false;
var jumpFlag=true;
var moveFlag=false;
var flyFlag=false;
var fallFlag=false;
var dissapearFlag=false;
var growingFlag=false;
var flyf=true;
var initHeight=480;
var fullSize=false;
var initWidht=2000;
var speedFlag=false;
var objL;
var objR;
var objU;
var objD;
console.log("initilization");

var firstOneDown={
up:true,
down:true,
left:true,
right:true
};
var firstOneUp={
up:true,
down:true,
left:true,
right:true
};
//function ff(){

  //alert(Game);
 Game=document.getElementById('game');
 Crafty.init(2000,480, document.getElementById('game'));

///////////////////////////////////////new code for viewport/////////////////////////////////////////
console.log("canvas width"+cropPx(document.getElementById('canvas-div').style.width));
 // Crafty.viewport.width=700;
//console.log("viewport"+Crafty.viewport.width)
   //Crafty.viewport.height=480;
    
     //Crafty.viewport.clampToEntites=false;
 
     //Crafty.viewport.scale(1);


     /////////////////////////////////////scrol////////////////////////////////////////////////////////////
//     scrolEn=Crafty.e('2D,DOM,Color,Floor').attr({
// 	w:650,//center-div width is 55% but we cant use it so we but equvelant value 650
// 	h:3,
// 	x:0,
// 	y:477
	


// }).color('red');


//   var scrollW=scrolEn.w-(2000-650);
//   if(scrollW<0){
//   	scrollW=20;
//   }
//     scrolbar=Crafty.e('2D,DOM,Color,Mouse,Draggable').attr({
// 	w:scrollW,
// 	h:15,
// 	x:1,
// 	y:470
	


// }).color('green');

//     scrolbar.css({'borderRadius':'5px'});
// scrolbar.dragDirection({x:1, y:0});
// scrolEn.attach(scrolbar);
// var startMove=false;
// var startVaule;
// scrolbar.bind('MouseDown',function(e){
// startMove=true;
// startVaule=scrolbar.x;
// console.log("mouse down");
// });
// scrolbar.bind('MouseMove',function(e){
// if(startMove==true){
// 	if(startVaule>scrolbar.x){
// 		if(scrolbar.x<=0){
// 			scrolbar.x=0;
// 		}
// 		else{
// 			movetoRight();
// 		startVaule=scrolbar.x;
// 		console.log("scroll move left");
// 		}
		
// 	}
// 	else if (startVaule<scrolbar.x){
// // if(scrolbar.x>=(650-scrolbar.x)){
// // 	scrolbar.x=650-scrolbar.x;
// // }
// // else{
// 	movetoLeft();
	
// 		startVaule=scrolbar.x;
// 		console.log("scroll move right");
// // }

		
// 	}
	
// 	console.log("mouse move");


// }

// });
// scrolbar.bind('MouseUp',function(e){
// startMove=false;
// console.log("mouse up");
// });


///////////////////////////////////////scroll///////////////////////////////
/////////////////////////////////////new code for viewport////////////////////////////////////////////

  selectedEntity=Crafty.e('2D,DOM').attr({
	w:0,
	h:0

});
  Crafty.sprite(512,512, 'assets/imgs/minimize.png', {min:[0,0]});
   min=Crafty.e('2D,DOM,min,Mouse').attr({
	w:0,
	h:0
	


});

Game.addEventListener('contextmenu',function(){
	removeCircle();
	selectedEntity.css({'border': '0px'});
})
   min.bind('Click',function(e){
    maxFlag=false;
   	 
	document.getElementById('canvas-div').style.position="relative";
document.getElementById('canvas-div').style.backgroundColor='white';
document.getElementById('color_scroll').style.display='inline-block';

// document.getElementById('canvas-div').style.left= "0px";
// document.getElementById('canvas-div').style.top= "0px";
document.getElementById('canvas-div').style.width= "100%" ;
document.getElementById('canvas-div').style.height= "480px" ;
document.getElementById('game').style.width= "800px" ;
document.getElementById('game').style.height= "480px" ;
document.getElementById('canvas-div').style.overflowX ="hidden";
document.getElementById('canvas-div').style.overflowY ="hidden";

  // scrolbar.x=1;
  // scrolbar.y=465;
  // scrolEn.x=0;
  // scrolEn.y=467;

Crafty.viewport.scale(1); 
Crafty.viewport.width=700;
Crafty.viewport.height=480;
min.w=0;
min.h=0;
  Crafty.viewport.reload();   
});

var square = Crafty.e("2D, DOM");
square.addComponent("Floor");
console.log("secret width"+cropPx(document.getElementById('game').style.width));
square.attr({x:0, y:480,w:800,h:5});
square.color='blue';
square.visible=false;

//}

 Crafty.sprite(100,100, 'assets/imgs/gray.png', {f:[0,0]});

       Crafty.sprite(256,256, 'assets/imgs/dele1.png', {d:[0,0]});
       Crafty.sprite(2000,1707, 'assets/imgs/expand.png', {e:[0,0]});
        Crafty.sprite(512,512, 'assets/imgs/rotate.png', {r:[0,0]});
          Crafty.sprite(2000,2000, 'assets/imgs/copy2.png', {c:[0,0]});
           Crafty.sprite(512,512, 'assets/imgs/freez.png', {a:[0,0]});
            Crafty.sprite(199,150, 'assets/imgs/collison3.png', {co:[0,0]});
            Crafty.sprite(261,193, 'assets/imgs/gravity.png', {gravity:[0,0]});
            Crafty.sprite(512,512, 'assets/imgs/apple.png', {apple:[0,0]});
            Crafty.sprite(300,300, 'assets/imgs/circle.png', {cir:[0,0]});

/////////////////////////////////////////////////////////

   var config = {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
  };
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   var userId = firebase.auth().currentUser.uid;
	console.log(userId);
var databaseWebsites = firebase.database().ref('userImg').child(userId);
console.log(databaseWebsites.toString());
databaseWebsites.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {

     
     console.log(childSnapshot.val().imgN);
    // document.getElementById('yourObjList').appendChild('img').src=childSnapshot.val().imgN;
    toyObj.push(childSnapshot.val().imgN);

  });

 // order = 0;
});

  }
});

//////////////////////////////////////////////////////


function allowDrop(ev) {
	
    ev.preventDefault();
}

function drag(ev) {
	
    ev.dataTransfer.setData("text", ev.target.id);
}

 function mouseUp(ev,ele){
console.log("inside mousedown");
xpos=ev.offsetX;
ypos=ev.offsetY;
console.log(xpos);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  
  mouseUp(ev);
var ele= document.getElementById(data);
 mouseUp(ev,ele);

    console.log("****************");
  
    console.log(ele);

  // getInit();
    Crafty.sprite(ele.naturalWidth,ele.naturalHeight, ele.src, {flower:[0,0]});
var bg = Crafty.e("2D, DOM, flower,Mouse,Keyboard").attr({
	w:200,
	h:150,
	 x:(xpos- 100),
     y:(ypos-50)
             	});


bg.addComponent('Draggable');


  	console.log("must draw square");
	
    
  //  document.getElementById('obj_info').style.display='block';
  // document.getElementById('objName').innerHTML=bg.getId();
  //   document.getElementById('objW').innerHTML='width:'+bg._w;
  //      document.getElementById('objH').innerHTML='hieght:'+bg._h;

entList.push(bg);
createResizeEntity(bg,true);
 



 console.log(bg.__image);
 //objList.push(bg);
 
Crafty.viewport.reload();


 


}


     
//      function changeD(num){

//    // window.alert(document.getElementById('objName').innerHTML-1);
//      	switch(num){
// case 1://increment width 

// var e = Crafty("2D").get(document.getElementById('objName').innerHTML-1);
// //document.getElementById('wd').style.color='red';

// e.w=e.w+20;

//  document.getElementById('objW').innerHTML='width:'+e.w;

// break;
// case 2://decrement width
// var e = Crafty("2D").get(document.getElementById('objName').innerHTML-1);
// //document.getElementById('wd').style.color='red';

// e.w=e.w-20;

//  document.getElementById('objW').innerHTML='width:'+e.w;

// break;
// case 3:// increment height
// var e = Crafty("2D").get(document.getElementById('objName').innerHTML-1);
// //document.getElementById('wd').style.color='red';

// e.h=e.h+20;

//  document.getElementById('objW').innerHTML='width:'+e.h;


// break;
// case 4:// decrement height
// var e = Crafty("2D").get(document.getElementById('objName').innerHTML-1);
// //document.getElementById('wd').style.color='red';

// e.h=e.h-20;

//  document.getElementById('objW').innerHTML='width:'+e.h;

// break;

// case 5:
// //alert(document.getElementById('game').style.width+30);
//   var res = document.getElementById('game').style.width.substring(0, document.getElementById('game').style.width.length-2);

//   //alert(Number(res)+30);
// //document.getElementById('game').style.width=Number(res)+30;


//  Crafty.init(Number(res)+30,480, document.getElementById('game'));
//   document.getElementById('map').innerHTML='map width '+document.getElementById('game').style.width;
// break;


// case 6:
// //alert(document.getElementById('game').style.width+30);
//   var res = document.getElementById('game').style.width.substring(0, document.getElementById('game').style.width.length-2);

//   //alert(Number(res)+30);
// //document.getElementById('game').style.width=Number(res)+30;


//  Crafty.init(Number(res)-30,480, document.getElementById('game'));
//   document.getElementById('map').innerHTML='map width '+document.getElementById('game').style.width;
// break;
//      	}
//      }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////










































     ////////////////////////////////////////////////////////////////////////////////////////////////////////////


     function store(){

     	alert("hi");
        copyEntToArray();

   var config = {
    apiKey: "AIzaSyAlx0SvI8rLi2KxMOqqGjM3cr-2_CtnnkM",
    authDomain: "grdprogect.firebaseapp.com",
    databaseURL: "https://grdprogect.firebaseio.com",
    projectId: "grdprogect",
    storageBucket: "grdprogect.appspot.com",
    messagingSenderId: "304904675026"
  };
  firebase.initializeApp(config);



  var database = firebase.database();// Get a reference to the database service

writeUserData("1");
 
     }

     function writeUserData(backId) {
  firebase.database().ref('backs/' + backId).set({
    
    back: objList
   
  });


  //var userId1 = firebase.auth().currentUser.userId;
//readData(userId);
}


function readData(userId){
	return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  console.log(username);
});
}


function copyEntToArray(){
	var array_of_entities = Crafty("2D").get();
	var exiIn=false;
	for(var i=0 ;i<entList.length;i++){
    for(var j=0;j<actionAEnt.length;j++){
      if(actionAEnt[j].id==entList[i].getName()){
        exiIn=true;
        break;
      }
    }
    if(!exiIn){
     // console.log("this entity exsist in action array ");
    

           arrObj=new objBackground({
  x:entList[i].x,
  y:entList[i].y,
  w:entList[i].w,
  h:entList[i].h,
  src:entList[i].__image,
  id:entList[i].getName(),
   rotate:actionList[entList[i].getName()].rotate,
collision:actionList[entList[i].getName()].collision,
freez:actionList[entList[i].getName()].freez,
apple:actionList[entList[i].getName()].apple,
gravity:""
});
             var entLine=[];
      var chArr=entList[i]._children;
      for(var k=0;k<chArr.length;k++){
        console.log("inside for loop for line");
        if(chArr[k].getName()=="line"){
          console.log("line ##");
           var ob=lineObj({
            x:chArr[k].x,
            y:chArr[k].y,
            w:chArr[k].w,
            h:chArr[k].h
           });
           arrObj.gravity.push(ob);
        }
      }

           console.log("hi hih");
            for(var k=0;k<arrObj.gravity.length;k++){
      console.log("x="+arrObj.gravity[k].x+",");
      console.log("y="+arrObj.gravity[k].y+",");
    }
    objList.push(arrObj);
    }
 

	}

// for(var i=0 ;i<objList.length;i++){
// console.log(objList[i]);


// }
}



function removeCircle(){
	for(var i=0;i<circles.length;i++){

    circles[i].destroy();
    
   


}

circles.length=0;

}
function removeList(){
	for(var i=0;i<gravity_list.length;i++){

    gravity_list[i].destroy();
    
   


}

gravity_list.length=0;

}

function removecir(){
	for(var i=0;i<cirList.length;i++){

    cirList[i].destroy();
    
   


}

cirList.length=0;

}
//////////////////////////////////////background color//////////////////////

 function setBackColor(col){
 	//getInit();

 	  Crafty.background(col);
 	  //document.getElementById(col).style.border(2px solid white);

 }

//////////////////////////////////////background color//////////////////////


function createResizeEntity(rootm,flag){
//var array_of_entities = Crafty("2D").get();

if(flag==true) {
	

  rootm.setName(entityNameCounter);
   console.log("name"+rootm.getName());
entityNameCounter++;
var appleFlag=false;
//console.log(array_of_entities.length);
var oa=objAction({
	move:false,
jump:false,
fly:false,
// initPosX:'n',
// initPosY:'n',
dissapear:false,
growing:false,
delete:false,
copy:false,
rotate:false,
expand:false,
collision:false,
freez:false,
gravity:false,
apple:false,
order:'n'
//floors:[]

});
//Number(x1)
actionList[Number(rootm.getName())]=oa;


}


/////////////////////remove all exsisting circles///////////////////


	rootm.bind('Click', function (e) {

        //rootm.removeComponent("HUD",false);
         // if(rootm.has("HUD")){
         // 	console.log("has hud");
         // }
            
       // selectedEntity.addComponent("Draggable,Motion");

	selectedEntity.css({'border': '0px'});

     console.log('circles size before='+circles.length);
        removeCircle();
     
     console.log('circles size after='+circles.length);

/////////////////////remove all exsisting circles///////////////////
///////////////////////////circle def///////////////////////////////////
 
var resizeFlag=false;
var rc;
var bc;
  var xn=rootm.x+rootm.w;
 var yn=rootm.y+rootm.h;
var circle1 = Crafty.e("2D, DOM, f,Mouse,Draggable").attr({

	w:13,
	h:13,
	 x:rootm.x-5,
     y:rootm.y-5
             	});

var circle2 = Crafty.e("2D, DOM, f,Mouse,Draggable").attr({
	w:13,
	h:13,
	 x:xn-5,
     y:rootm.y-5
             	});

var circle3 = Crafty.e("2D, DOM, f,Mouse,Draggable").attr({
	w:13,
	h:13,
	 x:rootm.x-5,
     y:yn-5
             	});

var circle4 = Crafty.e("2D, DOM, f,Mouse,Draggable").attr({
	w:13,
	h:13,
	 x:xn-5,
     y:yn-5
             	});

var boxs = Crafty.e("2D, DOM, Color").attr({

	w:280,
	h:28,
	 x:rootm.x,
     y:rootm.y-34
             	}).color('white');
boxs.css({'border': '2px solid  #b3b3b3',
'border-radius':'16px'});
// boxs.attach(up);
// up.w=30;
// up.h=30;
// up.x=boxs.x+boxs.w-25;
// up.y=boxs.y-5;
var del = Crafty.e("2D, DOM, d,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+10,
     y:rootm.y-29
             	});

var copy = Crafty.e("2D, DOM, c,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+40,
     y:rootm.y-29
             	});

var rotate = Crafty.e("2D, DOM, r,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+70,
     y:rootm.y-29
             	});

var expand = Crafty.e("2D, DOM, e,Mouse").attr({

	w:25,
	h:25,
	 x:rootm.x+100,
     y:rootm.y-29
             	});
var collision = Crafty.e("2D, DOM, co,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+135,
     y:rootm.y-29
             	});
var freez = Crafty.e("2D, DOM, a,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+165,
     y:rootm.y-29
             	});
var gravity = Crafty.e("2D, DOM, gravity,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+195,
     y:rootm.y-29
             	});



var apple = Crafty.e("2D, DOM, apple,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+225,
     y:rootm.y-29
             	});

rootm.css({'border': '1px dashed #b3b3b3'});



circles.push(circle1);//0
circles.push(circle2);//1
circles.push(circle3);//2
circles.push(circle4);//3
circles.push(boxs);//4
circles.push(del);
circles.push(copy);
circles.push(rotate);
circles.push(expand);
circles.push(collision);
circles.push(freez);
circles.push(gravity);
circles.push(apple);
		selectedEntity=rootm;
checkIfClick();
 removeEventFromOtherEnitiy();

///////////////////////////circle def///////////////////////////////////
       /////////////////////circle1////////////////////////

selectedEntity.bind('KeyDown',function(e){
console.log('keydown');
if(actionList[Number(selectedEntity.getName())].jump==true||actionList[Number(selectedEntity.getName())].fly==true){
	
	 checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h); 
switch(e.key){
	//////////////////////////left////////////////
case Crafty.keys.LEFT_ARROW:
if(firstOneDown.left==true){
	firstOneDown.left=false;
	firstOneUp.left=true;

var d = new Date(); // for now
console.log("keydown left");

   action= actionList[Number(selectedEntity.getName())].order;
    objL=actionInfo({
x:selectedEntity.x,
y:selectedEntity.y,
xf:'',
yf:'',
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:action ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'',
	keyType:e.key,
	speed:200

});

 actionA.push(objL);
}

break;
//////////////////////////////////left///////////////////////
/////////////////////////////////right/////////////////////
case Crafty.keys.RIGHT_ARROW:
if(firstOneDown.right==true){
	firstOneDown.right=false;
	firstOneUp.right=true;

var d = new Date(); // for now
console.log("keydown right");

   action= actionList[Number(selectedEntity.getName())].order;
    objR=actionInfo({
x:selectedEntity.x,
y:selectedEntity.y,
xf:'',
yf:'',
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:action ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'',
	keyType:e.key,
	speed:200

});
// checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h); 
 actionA.push(objR);
}

break;
/////////////////////////////////right////////////////////
/////////////////////////////////up/////////////////////
case Crafty.keys.UP_ARROW:
if(firstOneDown.up==true){
	firstOneDown.up=false;
	firstOneUp.up=true;

var d = new Date(); // for now
console.log("keydown up");

   action= actionList[Number(selectedEntity.getName())].order;
    objU=actionInfo({
x:selectedEntity.x,
y:selectedEntity.y,
xf:'',
yf:'',
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:action ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'',
	keyType:e.key,
	speed:200

});
 actionA.push(objU);
 //checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h); 
}

break;
/////////////////////////////////up////////////////////
/////////////////////////////////down/////////////////////
case Crafty.keys.DOWN_ARROW:
if(firstOneDown.down==true){
	firstOneDown.down=false;
	firstOneUp.down=true;

var d = new Date(); // for now
console.log("keydown down");

   action= actionList[Number(selectedEntity.getName())].order;
    objD=actionInfo({
x:selectedEntity.x,
y:selectedEntity.y,
xf:'',
yf:'',
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:action ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'',
	keyType:e.key,
	speed:200

});
 actionA.push(objD);
 //checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h); 
}

break;
/////////////////////////////////down////////////////////
}

selectedEntity.css({'border': '0px'});
 removeCircle();

}
     
});
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////
////////////////////////////
/////////////////////
selectedEntity.bind('KeyUp',function(e){
	//check if event is active fly & jump
	//when moved entity delete
if(actionList[Number(selectedEntity.getName())].jump==true||actionList[Number(selectedEntity.getName())].fly==true){
switch(e.key){
	//////////////////////////left////////////////
case Crafty.keys.LEFT_ARROW:
if(firstOneUp.left==true){
	firstOneUp.left=false;
	firstOneDown.left=true;

var d = new Date(); // for now



 console.log("keyUp left");


    objL.stopTime=document.getElementById('timer').innerHTML;
    objL.xf=selectedEntity.x;
    objL.yf=selectedEntity.y; 


}

break;
//////////////////////////////////left///////////////////////
/////////////////////////////////right/////////////////////
case Crafty.keys.RIGHT_ARROW:
if(firstOneUp.right==true){
	firstOneUp.right=false;
	firstOneDown.right=true;

var d = new Date(); // for now



 console.log("keyUp right");


    objR.stopTime=document.getElementById('timer').innerHTML;
       objR.xf=selectedEntity.x;
    objR.yf=selectedEntity.y; 
// actionA.push(objR);

}

break;
/////////////////////////////////right////////////////////
/////////////////////////////////up/////////////////////
case Crafty.keys.UP_ARROW:
if(firstOneUp.up==true){
	firstOneUp.up=false;
	firstOneDown.up=true;

var d = new Date(); // for now



 console.log("keyUp up");


    objU.stopTime=document.getElementById('timer').innerHTML;
 //actionA.push(objU);
    objU.xf=selectedEntity.x;
    objU.yf=selectedEntity.y; 


}

break;
/////////////////////////////////up////////////////////
/////////////////////////////////down/////////////////////
case Crafty.keys.DOWN_ARROW:
if(firstOneUp.down==true){
	firstOneUp.down=false;
	firstOneDown.down=true;

var d = new Date(); // for now



 console.log("keyUp down");


    objD.stopTime=document.getElementById('timer').innerHTML;
 //actionA.push(objD);
    objD.xf=selectedEntity.x;
    objD.yf=selectedEntity.y; 


}
break;
/////////////////////////////////down////////////////////
}

 	







}


        
     
});




circle1.bind('MouseDown',function(e){

rootm.css({'border': '1px dashed red'});
	resizeFlag=true;
rc=rootm.x+rootm.w;
bc=rootm.y+rootm.h;

	});



circle1.bind('MouseMove',function(e){


	if(resizeFlag){
		rootm.css({'border': '1px dashed red'});
		
		rootm.w=rc-circle1.x;
		rootm.h=bc-circle1.y;
		
rootm.x=circle1.x+5;
rootm.y=circle1.y+5;



circle2.x=(rootm.x+rootm.w)-5;
circle2.y=rootm.y-5;

circle3.x=rootm.x-5;
circle3.y=(rootm.y+rootm.h)-5;

circle4.x=(rootm.x+rootm.w)-5;
circle4.y=(rootm.y+rootm.h)-5;

var chArr=rootm._children;
for(var n=0;n<chArr.length;n++){
	chArr[n].h=3;
}
removecir();


notVisible();
selectedEntity._children.forEach(function(ch){

  if(ch.getName()=='wall'){
  ch.destroy();
}
              });

	}
	
	});


circle1.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;
if(actionList[Number(selectedEntity.getName())].collision==true){

  var w2=selectedEntity.w;
     var h2=selectedEntity.h;
     var x2=selectedEntity.x;
     var y2=selectedEntity.y;

     var t1=y2+h2;
     var t2=y2-(h2/2.0);

     var s1=x2+w2;
     var s2=x2-w2;
   var tt = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x2, y: y2, w: w2, h: 1})
      ;
   var bb =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x2, y: t1, w: w2, h: 1})
      ;
   var ll =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x2, y: y2, w: 1, h: h2})
      ;
   var rr = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s1, y: y2, w: 1, h: h2})
      ;
tt.setName("wall");
bb.setName("wall");
ll.setName("wall");
rr.setName("wall");
      walls.push(tt);
      walls.push(bb);
      walls.push(ll);
      walls.push(rr);
    selectedEntity.attach(tt);
    selectedEntity.attach(bb);
    selectedEntity.attach(ll);
    selectedEntity.attach(rr);
  }

Visible(rootm);

	});
//////////////////////////////////circle1/////////////////////////////////////////
         /////////////////////circle2////////////////////////



circle2.bind('MouseDown',function(e){
rootm.css({'border': '1px dashed red'});
	resizeFlag=true;
rc=rootm.x+rootm.w;
bc=rootm.y+rootm.h;

	});



circle2.bind('MouseMove',function(e){

	if(resizeFlag){
		rootm.css({'border': '1px dashed red'});
		rootm.w=(circle2.x-rootm.x)+5;
		rootm.h=(bc-circle2.y);

		rootm.y=circle2.y+5;
		
circle1.x=rootm.x-5;
circle1.y=rootm.y-5;

circle3.x=rootm.x-5;
circle3.y=rootm.y+rootm.h-5;

circle4.x=rootm.x+rootm.w-5;
circle4.y=rootm.y+rootm.h-5;
var chArr=rootm._children;
for(var n=0;n<chArr.length;n++){
	chArr[n].h=3;
}
removecir();
notVisible();
selectedEntity._children.forEach(function(ch){

  if(ch.getName()=='wall'){
  ch.destroy();
}
              });
	}
	
	});


circle2.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;
if(actionList[Number(selectedEntity.getName())].collision==true){
    var w2=selectedEntity.w;
     var h2=selectedEntity.h;
     var x2=selectedEntity.x;
     var y2=selectedEntity.y;

     var t1=y2+h2;
     var t2=y2-(h2/2.0);

     var s1=x2+w2;
     var s2=x2-w2;
   var tt = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x2, y: y2, w: w2, h: 1})
      ;
   var bb =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x2, y: t1, w: w2, h: 1})
      ;
   var ll =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x2, y: y2, w: 1, h: h2})
      ;
   var rr = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s1, y: y2, w: 1, h: h2})
      ;
tt.setName("wall");
bb.setName("wall");
ll.setName("wall");
rr.setName("wall");
      walls.push(tt);
      walls.push(bb);
      walls.push(ll);
      walls.push(rr);
    selectedEntity.attach(tt);
    selectedEntity.attach(bb);
    selectedEntity.attach(ll);
    selectedEntity.attach(rr);
  }


Visible(rootm);
	});
//////////////////////////////////circle2///////////////////////////////////////// 

    /////////////////////circle3////////////////////////



circle3.bind('MouseDown',function(e){
rootm.css({'border': '1px dashed red'});
	resizeFlag=true;
rc=rootm.x+rootm.w;
bc=rootm.y+rootm.h;

	});



circle3.bind('MouseMove',function(e){

	if(resizeFlag){
		rootm.css({'border': '1px dashed red'});
	
        rootm.w=rc-circle3.x;
		rootm.h=circle3.y-rootm.y+5;


		rootm.x=circle3.x+5;
		
circle1.x=rootm.x-5;
circle1.y=rootm.y-5;

circle2.x=rootm.x+rootm.w-5;
circle2.y=rootm.y-5;

circle4.x=rootm.x+rootm.w-5;
circle4.y=rootm.y+rootm.h-5;
var chArr=rootm._children;
for(var n=0;n<chArr.length;n++){
	chArr[n].h=3;
}
removecir();

notVisible();
selectedEntity._children.forEach(function(ch){

  if(ch.getName()=='wall'){
  ch.destroy();
}
              });
	}
	
	});


circle3.bind('MouseUp',function(e){
rootm.css({'border': '1px dashed #b3b3b3'});	
resizeFlag=false;
if(actionList[Number(selectedEntity.getName())].collision==true){
    var w2=selectedEntity.w;
     var h2=selectedEntity.h;
     var x2=selectedEntity.x;
     var y2=selectedEntity.y;

     var t1=y2+h2;
     var t2=y2-(h2/2.0);

     var s1=x2+w2;
     var s2=x2-w2;
   var tt = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x2, y: y2, w: w2, h: 1})
      ;
   var bb =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x2, y: t1, w: w2, h: 1})
      ;
   var ll =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x2, y: y2, w: 1, h: h2})
      ;
   var rr = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s1, y: y2, w: 1, h: h2})
      ;
tt.setName("wall");
bb.setName("wall");
ll.setName("wall");
rr.setName("wall");
      walls.push(tt);
      walls.push(bb);
      walls.push(ll);
      walls.push(rr);
    selectedEntity.attach(tt);
    selectedEntity.attach(bb);
    selectedEntity.attach(ll);
    selectedEntity.attach(rr);

}




Visible(rootm);

	});
//////////////////////////////////circle3///////////////////////////////////////// 

   /////////////////////circle4////////////////////////



circle4.bind('MouseDown',function(e){
rootm.css({'border': '1px dashed red'});
	resizeFlag=true;
rc=rootm.x+rootm.w;
bc=rootm.y+rootm.h;

	});



circle4.bind('MouseMove',function(e){

	if(resizeFlag){
		rootm.css({'border': '1px dashed red'});
	
        rootm.w=circle4.x-rootm.x+5;
		rootm.h=circle4.y-rootm.y+5;


		
		
circle1.x=rootm.x-5;
circle1.y=rootm.y-5;

circle2.x=rootm.x+rootm.w-5;
circle2.y=rootm.y-5;

circle3.x=rootm.x-5;
circle3.y=rootm.y+rootm.h-5;
//console.log(rootm._children);
var chArr=rootm._children;
for(var n=0;n<chArr.length;n++){
	chArr[n].h=3;
}

removecir();

notVisible();
selectedEntity._children.forEach(function(ch){

  if(ch.getName()=='wall'){
  ch.destroy();
}
              });

	}
	
	});


circle4.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;


//  

if(actionList[Number(selectedEntity.getName())].collision==true){
     var w2=selectedEntity.w;
     var h2=selectedEntity.h;
     var x2=selectedEntity.x;
     var y2=selectedEntity.y;

     var t1=y2+h2;
     var t2=y2-(h2/2.0);

     var s1=x2+w2;
     var s2=x2-w2;
   var tt = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x2, y: y2, w: w2, h: 1});
   var bb =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x2, y: t1, w: w2, h: 1})
      ;
   var ll =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x2, y: y2, w: 1, h: h2})
      ;
   var rr = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s1, y: y2, w: 1, h: h2})
      ;
tt.setName("wall");
bb.setName("wall");
ll.setName("wall");
rr.setName("wall");
      walls.push(tt);
      walls.push(bb);
      walls.push(ll);
      walls.push(rr);
    selectedEntity.attach(tt);
    selectedEntity.attach(bb);
    selectedEntity.attach(ll);
    selectedEntity.attach(rr); 


Visible(rootm);
}

	});
//////////////////////////////////circle4///////////////////////////////////////// 
/////////////////////////////////delete///////////////////////////

del.bind('Click', function (e) {


	selectedEntity.css({'border': '0px'});


        removeCircle();
        for(var k=0;k<entList.length;k++){
		if(entList[k]==selectedEntity){
			entList.splice(k, k+1);
			break;
		}
	}
console.log("entList after remove");
for(var k=0;k<entList.length;k++){
console.log(entList[k].getName());
}



     for(var k=0;k<actionA.length;k++){
		if(actionA[k].id==selectedEntity.getName()){
      if(actionA.length==1){
        actionA.length=0;
        break;
      }
      else{
        actionA.splice(k, k+1); 
      }
		
		//	break;
		}
	}
console.log("actionA after remove");
for(var k=0;k<actionA.length;k++){
console.log(actionA[k].id);
}
     for(var k=0;k<actionAEnt.length;k++){
    if(actionAEnt[k].id==selectedEntity.getName()){
      actionAEnt.splice(k, k+1);
      break;
    }
  }
  console.log("actionAEnt after remove");
for(var k=0;k<actionAEnt.length;k++){
console.log(actionAEnt[k].id);
}
rootm.destroy();
});


/////////////////////////////////delete///////////////////////////
////////////////////////////////copy/////////////////////////////////
copy.bind('Click', function (e) {

 var ent2 = rootm.clone()
              .attr({x:100, y:100});
entList.push(ent2);
              createResizeEntity(ent2,true);

             
});

////////////////////////////////copy/////////////////////////////////
/////////////////////////////////rotate///////////////////////////////
rotate.bind('Click', function (e) {

 rootm.rotation = 45;
  del.x=rootm.x+10;
    del.y=rootm.y-29;
copy.x=rootm.x+40;
copy.y=rootm.y-29;
rotate.x=rootm.x+70;
rotate.y=rootm.y-29;
expand.x=rootm.x+100;
expand.y=rootm.y-29;

circle1.x=rootm.x-5,
     circle1.y=rootm.y-5
 circle2.x=xn-5,
     circle2.y=rootm.y-5
circle3.x=rootm.x-5,
     circle3.y=yn-5
circle4.x=xn-5,
     circle4.y=yn-5
             
});

/////////////////////////////////rotate//////////////////////////////
/////////////////////////////////expand///////////////////////////////
expand.bind('Click', function (e) {

	if(actionList[Number(selectedEntity.getName())].expand==false){
		 var neww=cropPx(Game.style.width);
   var newh=cropPx(Game.style.height);
 rootm.w=neww;
 rootm.h=newh;
 console.log(neww);
 //expandFlag=true;
  this.css({'border': '1px solid #0FB1B3 '});
  actionList[Number(selectedEntity.getName())].expand=true;

	}

	else if(actionList[Number(selectedEntity.getName())].expand==true){
		rootm.w=200;
 rootm.h=150;
 //expandFlag=false;
  this.css({'border': '0px '});
  actionList[Number(selectedEntity.getName())].expand=false;
	}
  
             
});


//////د\\\\\/////////////////////expand//////////////////////////////

/////////////////////////////////freez///////////////////////////////
freez.bind('Click', function (e) {
	if(actionList[Number(selectedEntity.getName())].freez==false){
		  rootm.removeComponent("Draggable", false);
		 // freezFlag=true;
		   this.css({'border': '1px solid #0FB1B3 '});

		   for(var i=0 ;i<4;i++){
			circles[i].addComponent('Draggable');
		}
		actionList[Number(selectedEntity.getName())].freez=true;
	}
	else if(actionList[Number(selectedEntity.getName())].freez==true){
		rootm.addComponent("Draggable");
		for(var i=0 ;i<4;i++){
			circles[i].addComponent('Draggable');
		}
		//freezFlag=false;
		 this.css({'border': '0px '});
		 actionList[Number(selectedEntity.getName())].freez=false;
	}
 

             
});



//////د\\\\\/////////////////////freez//////////////////////////////

/////////////////////////////////solid///////////////////////////////

collision.bind('Click', function (e) {
if(actionList[Number(selectedEntity.getName())].collision==false){
		selectedEntity.addComponent('Solid');
        // collisionFlag=true;
          this.css({'border': '1px solid #0FB1B3 '});
  actionList[Number(selectedEntity.getName())].collision=true;

var w2=selectedEntity.w;
     var h2=selectedEntity.h;
     var x2=selectedEntity.x;
     var y2=selectedEntity.y;

     var t1=y2+h2;
     var t2=y2-(h2/2.0);

     var s1=x2+w2;
     var s2=x2-w2;
var tt = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x2, y: y2, w: w2, h: 1})
      .color('white');
   var bb =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x2, y: t1, w: w2, h: 1})
      .color('white');
   var ll =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x2, y: y2, w: 1, h: h2})
      .color('white');
   var rr = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s1, y: y2, w: 1, h: h2})
      .color('white');
tt.setName("wall");
bb.setName("wall");
ll.setName("wall");
rr.setName("wall");
      walls.push(tt);
      walls.push(bb);
      walls.push(ll);
      walls.push(rr);
      selectedEntity.attach(tt);
  selectedEntity.attach(bb);
    selectedEntity.attach(ll);
      selectedEntity.attach(rr);
          for(var i=0;i<walls.length;i++){

    walls[i].visible=false;
}

	}
	else if(actionList[Number(selectedEntity.getName())].collision==true){
		console.log("not true for collision");
		selectedEntity.removeComponent('Solid');
         //collisionFlag=false;
          this.css({'border': '0px '});
     actionList[Number(selectedEntity.getName())].collision=false;

      for(var i=0;i<walls.length;i++){

    walls[i].destroy();
}
walls.length=0;

	}
     



	

});

//////د\\\\\/////////////////////solid//////////////////////////////

/////////////////////////////////gravity///////////////////////////////

gravity.bind('Click', function (e) {

console.log("inside gravity");


  

	// if(actionList[Number(selectedEntity.getName())].gravity==false){
	// 	var chArr=selectedEntity._children
	// 	chArr[0].addComponent('Floor');
 //         //gravityFlag=true;
           this.css({'border': '1px solid #0FB1B3 '});
   actionList[Number(selectedEntity.getName())].gravity=true;
removeList();
removecir();
var list = Crafty.e("2D, DOM, Color,Mouse").attr({

	w:100,
	h:90,
	 x:gravity.x+5,
     y:gravity.y+10
             	}).color('white');
list.css({'border': '2px solid  #b3b3b3',
'border-radius':'16px'});
  gravity_list.push(list);
  gravity.attach(list);

var list_show_hide_line=Crafty.e("2D, DOM, Text,Mouse").attr({ x: list.x, y: list.y , w:list.w , h:30 }).text("show/hide");
list_show_hide_line.textAlign('center');
list_show_hide_line.textColor('#b3b3b3');
list_show_hide_line.textFont({ size: '15px', weight: 'bold' });
list_show_hide_line.css({'border-bottom': '2px solid  #b3b3b3',
'padding-top':'10px'});
var listNew=Crafty.e("2D, DOM, Text,Mouse").attr({ x: list.x, y: list.y+30 , w:list.w , h:30 }).text("New");
listNew.textAlign('center');
listNew.textColor('#b3b3b3');
listNew.textFont({ size: '15px', weight: 'bold' });
listNew.css({'border-bottom': '2px solid  #b3b3b3',
'padding-top':'10px'});
var listEdit=Crafty.e("2D, DOM, Text,Mouse").attr({ x: list.x, y: list.y+60 , w:list.w , h:30 }).text("Edit");
listEdit.textAlign('center');
listEdit.textColor('#b3b3b3');
listEdit.textFont({ size: '15px', weight: 'bold' });
listEdit.css({'padding-top':'10px'});


gravity_list.push(list_show_hide_line);
gravity_list.push(listNew);
gravity_list.push(listEdit);
list.attach(list_show_hide_line);
list.attach(listNew);
list.attach(listEdit);
 
listNew.bind('Click',function(e){
	removeList();
	console.log("inside new");
var line=Crafty.e('2D, DOM, Color,Mouse').attr({
		x:selectedEntity.x,
		y:selectedEntity.y+10,
		w:selectedEntity.w,
		h:3
	}).color('green');
	line.addComponent('Draggable');
	line.addComponent('Floor');
	line.dragDirection({x:0, y:1});
	//actionList[Number(selectedEntity.getName())].floors.push(line);
selectedEntity.attach(line);
line.setName('line');
lines.push(line);
line.bind('MouseMove',function(e){
if(line.y>(line._parent.y+line._parent.h)){
	line.y=line._parent.y+line._parent.h
}
else if(line.y<(line._parent.y)){
line.y=line._parent.y;
}	

});


});

listEdit.bind('Click',function(e){
	removecir();

removeList();

selectedEntity._children.forEach(function(ch){
	//console.log('ij='+ij);
   //var ch=selectedEntity._children[ij];
if(ch.getName()=='line'){
	console.log('linee');
	var cir1 = Crafty.e("2D, DOM, cir,Mouse,Draggable").attr({
	w:15,
	h:15,
	 x:ch.x-2,
     y:ch.y-3
             	});

	ch.attach(cir1);
	cirList.push(cir1);
		cir1.dragDirection({x:1, y:0});


	var cir2 = Crafty.e("2D, DOM, cir,Mouse,Draggable").attr({
	w:15,
	h:15,
	 x:ch.x+ch.w-2,
     y:ch.y-3
             	});
	ch.attach(cir2);
	cirList.push(cir2);
	cir2.dragDirection({x:1, y:0});


var dLine = Crafty.e("2D, DOM, d,Mouse").attr({
	w:17,
	h:17,
	 x:ch.x+(ch.w/2)-8,
     y:ch.y-8
             	});
	ch.attach(dLine);
	cirList.push(dLine);
  dLine.css({'backgroundColor': 'white'});

	var resizeFlag=false;
var rc;
//////////////////////////cir1//////////////////////////////
cir1.bind('MouseDown',function(e){
console.log('hi yoy click circle1')
ch.css({'border': '1px dashed red'});
	resizeFlag=true;
 rc=ch.x+ch.w;

	});

cir1.bind('MouseMove',function(e){

	if(resizeFlag){
		ch.css({'border': '1px dashed red'});
		
		ch.w=rc-cir1.x;
		console.log("ch width="+ch.w);
		
ch.x=cir1.x;

	cir1.h=15;
	cir1.w=15;

    cir2.h=15;
    cir2.w=15;
    cir2.x=ch.x+ch.w;
    dLine.h=17;
    dLine.w=17;
     dLine.x=ch.x+(ch.w/2)-8;
     dLine.y=ch.y-8;

	}
	
	});


cir1.bind('MouseUp',function(e){
	ch.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;




	});


 cir1.bind("StopDrag", function() {
 	ch.css({'border': '1px dashed #b3b3b3'});
 
resizeFlag=false;

    }); 

/////////////////////////////cir1///////////////////////////////////
//////////////////////////cir2//////////////////////////////
cir2.bind('MouseDown',function(e){

ch.css({'border': '1px dashed red'});
	resizeFlag=true;
 rc=ch.x+ch.w;

	});

cir2.bind('MouseMove',function(e){

	if(resizeFlag){
		ch.css({'border': '1px dashed red'});
		// 	rootm.w=(circle2.x-rootm.x)+5;
		// rootm.h=(bc-circle2.y);

		// rootm.y=circle2.y+5;
		ch.w=cir2.x-ch.x;
		console.log("ch width="+ch.w);
		
//ch.x=cir1.x;

	cir1.h=15;
	cir1.w=15;

    cir2.h=15;
    cir2.w=15;
    cir1.x=ch.x;
    dLine.h=17;
    dLine.w=17;
     dLine.x=ch.x+(ch.w/2)-8;
     dLine.y=ch.y-8;


	}
	
	});


cir2.bind('MouseUp',function(e){
	ch.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;




	});


 cir2.bind("StopDrag", function() {
 	ch.css({'border': '1px dashed #b3b3b3'});
 
resizeFlag=false;

    }); 







/////////////////////////////cir2///////////////////////////////////
/////////////////////////////delete line///////////////////////////

dLine.bind('Click',function(e){
	removecir();

	for(var k=0;k<lines.length;k++){
		if(lines[k]==ch){
			lines.splice(k, k+1);
			break;
		}
	}
	ch.destroy();

});
/////////////////////////////delete line///////////////////////////	
}



});

});

list_show_hide_line.bind('Click',function(e){
	removeList();
	removecir();
//  if(actionList[Number(selectedEntity.getName())].gravity==false){//hide
 
//  	hideCir();
// actionList[Number(selectedEntity.getName())].gravity=true;
//  }

//  else if(actionList[Number(selectedEntity.getName())].gravity==true){
	
//  	showCir();

// actionList[Number(selectedEntity.getName())].gravity=false;

// 	 }

for(var h=0;h<selectedEntity._children.length;h++){
		if(selectedEntity._children[h].visible==true&&selectedEntity._children[h].getName()=='line'){
                selectedEntity._children[h].visible=false;
		}
		else if(selectedEntity._children[h].visible==false&&selectedEntity._children[h].getName()=='line'){
			selectedEntity._children[h].visible=true;
		}
	}
});




//	 }


	





});

//////د\\\\\/////////////////////gravity//////////////////////////////

/////////////////////////////////apple///////////////////////////////

apple.bind('Click', function (e) {
	selectedEntity.css({'border': '0px'});
      removeCircle();
	if(actionList[Number(selectedEntity.getName())].apple==false){
		if(checkIfFloor()==true){
			selectedEntity.addComponent('Gravity');
		selectedEntity.gravity('Floor');
         //appleFlag=true;
          this.css({'border': '1px solid #0FB1B3 '});
  actionList[Number(selectedEntity.getName())].apple=true;

		}
		else{
			console.log("please make floor");
		}
		
	}
	else if(actionList[Number(selectedEntity.getName())].apple==true){
		selectedEntity.removeComponent('Gravity');
	
		// if( actionList[Number(selectedEntity.getName())].jump==true){
		// 	var x= selectedEntity.x;
		// 	selectedEntity.twoway(0.1);
		// 	selectedEntity.removeComponent('Twoway');
		// 	selectedEntity.x=x;
		// }
		// if( actionList[Number(selectedEntity.getName())].fly==true){
			
			
		// 	selectedEntity.removeComponent('Multiway');
		
		// }
		
        
          this.css({'border': '0px '});
  actionList[Number(selectedEntity.getName())].apple=false;
	}





});

//////د\\\\\/////////////////////apple//////////////////////////////
rootm.bind("StartDrag", function() {
   removeCircle();
    rootm.css({'border': '0px '});
    });
 

    rootm.bind("StopDrag", function() {
        //up.visible=true; 


    }); 

});
}



function cropPx(txt){
	 var res = txt.substring(0, txt.length-2);

  
return Number(res);

}



function notVisible(){

for(var i=4;i<circles.length;i++){
	circles[i].visible=false;
}


}

function Visible(rootm){

	 circles[5].x=rootm.x+10;
    circles[5].y=rootm.y-29;
circles[6].x=rootm.x+40;
circles[6].y=rootm.y-29;
circles[7].x=rootm.x+70;
circles[7].y=rootm.y-29;

circles[8].x=rootm.x+100;
circles[8].y=rootm.y-29;

circles[9].x=rootm.x+135;
circles[9].y=rootm.y-29;
circles[10].x=rootm.x+165;
circles[10].y=rootm.y-29;

circles[4].x=rootm.x+3;
     
circles[4].y=rootm.y-34
circles[11].x=rootm.x+195;
circles[11].y=rootm.y-29;

circles[12].x=rootm.x+225;
circles[12].y=rootm.y-29;

for(var i=4;i<circles.length;i++){
	circles[i].visible=true;
}
// up.visible=true;
// up.x=10;
// up.y=10;
// up.w=30;
// up.h=30;

}



////////////////////////////////////////////////////////////////////














// 
function expand(){
	maxFlag=true;
   removeCircle();
selectedEntity.css({'border': '0px'});
var wx=window.outerWidth;
var wy=window.outerHeight;
console.log("wx="+wx+"wy="+wy);

min.w=30;
min.h=30;
min.x=5;
min.y=5;


document.getElementById('canvas-div').style.position="absolute";
document.getElementById('canvas-div').style.backgroundColor='white';
document.getElementById('color_scroll').style.display='none';
var cavW=cropPx(document.getElementById('canvas-div').style.width);
var gW=cropPx(document.getElementById('game').style.width);
var diff=gW-cavW;
//document.getElementById('canvas-div').style.backgroundColor='red';
//document.getElementById('game').style.position="absolute";
var newgw=wx+diff;
var newh=wy-50;
console.log('cavw='+wx);
console.log('gw='+newgw);
document.getElementById('canvas-div').style.left= "0px";
document.getElementById('canvas-div').style.top= "0px";
document.getElementById('canvas-div').style.width= wx+"px" ;
document.getElementById('canvas-div').style.height= newh+"px" ;
document.getElementById('game').style.width= newgw+"px" ;
document.getElementById('game').style.height= newh+"px" ;

document.getElementById('canvas-div').style.overflow ="hidden";
var newCD=cropPx(document.getElementById('canvas-div').style.width);
console.log("parcent"+newCD/cavW);
//Crafty.viewport.scale(newCD/cavW);
var f1=document.getElementById('center-div').offsetWidth;;
var sh=wy/480;
var xc=wx/f1;
if(Crafty.viewport.width==700){
  Crafty.viewport.width=wx;
  Crafty.viewport.height=wy;
}

Crafty.viewport.scale(sh);  
Crafty.viewport.reload();  

	


}
function jump(){
removeCircle();
selectedEntity.css({'border': '0px'});

if (actionList[Number(selectedEntity.getName())].jump==false){
	

//checkIfFloor()==true
if(actionList[Number(selectedEntity.getName())].apple==true){
   actionList[Number(selectedEntity.getName())].order='j'; 

actionList[Number(selectedEntity.getName())].jump=true;
	  //jumpFlag=false;
	selectedEntity.addComponent("Twoway,Collision,Gravity, player,Motion") 
	  //.checkHits('Solid') // check for collisions with entities that have the Solid component in each frame
    .checkHits('wall') // check for collisions with entities that have the Solid component in each frame
    .bind("HitOn", function(hitData) {
        Crafty.log("Collision with Solid entity occurred for the first time.");
        if(isUp==true && isFor==false && isBack==false){
        this.y+=20;
        //this.x-=10;
    }

    if(isUp==true && isFor==true && isBack==false){
        this.y+=20;
        this.x-=20;
    }

    if(isUp==true && isFor==false && isBack==true){
        this.y+=20;
        this.x+=20;
    }


    if(isBack==true && isUp==false){
        this.x+=20;
      //  this.y+=20;
        
    }
     if(isUp==true && isBack==true){
        this.x+=20;
        this.y+=20;
        
    } 
    if(isFor==true && isUp==false){

    	this.x-=20;
    	//this.y+=20;
    
    }
    if( isUp==true && isFor==true){

    	this.x-=20;
    	this.y+=20;
    
    }
    
    
    })
    .bind("HitOff", function(comp) {
        Crafty.log("Collision with Solid entity ended.");
    })
    .bind('KeyDown', function(e) {
       if(e.key == Crafty.keys.UP_ARROW){
     isDown=false;
//      if(this.y<20){
//     console.log(this.y);
//      this.multiway(150, {UP_ARROW: 0, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
// }
}

if(e.key == Crafty.keys.DOWN_ARROW){
	isDown=true;
	isBack=false;
	isUp=false;
	isFor=false;
 }
 if(e.key == Crafty.keys.UP_ARROW){
	isUp=true;
	isBack=false;
	isDown=false;
	isFor=false;
 }

 if(e.key == Crafty.keys.RIGHT_ARROW){
	isBack=false;
	isDown=false;
	isUp=false;
	isFor=true;
 }

 if(e.key == Crafty.keys.LEFT_ARROW){
	isBack=true;
	isDown=false;
	isUp=false;
	isFor=false;
 }

    });
// 	 .
   selectedEntity.twoway(200);
 




	document.getElementById('jump').style.backgroundColor = "blue";
	

}

else{
	console.log("please make select gravity button");
	  document.getElementById('jump').style.backgroundColor = "white";
}


}

else if (actionList[Number(selectedEntity.getName())].jump==true){
	// jumpFlag=true;
  actionList[Number(selectedEntity.getName())].jump=false;
  // var x=selectedEntity.x;
  // var y=selectedEntity.y;
  // console.log("x="+x);
  // console.log("y="+y);
  document.getElementById('jump').style.backgroundColor = "white";
 //   selectedEntity.addComponent(" Gravity");
 // selectedEntity.gravity('Floor');
 selectedEntity.twoway(1);
 
  selectedEntity.removeComponent("Twoway") ;
 
// selectedEntity.x=x;
// selectedEntity.y=y;
  if(selectedEntity.has('Twoway')){
  	console.log("jump not remove");
  }
}

  Crafty.viewport.width=700;
   Crafty.viewport.height=480;

    Crafty.viewport.clampToEntites=false;
    selectedEntity.addComponent("Solid");
    //Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(selectedEntity,0,0);
    });
    Crafty.viewport.centerOn(selectedEntity,0); 


}
function fly(){
	
removeCircle();
selectedEntity.css({'border': '0px'});

if(actionList[Number(selectedEntity.getName())].fly==false){	
	//flyf=false;


if(actionList[Number(selectedEntity.getName())].apple==true){

	
        actionList[Number(selectedEntity.getName())].order='f'; 
	

		actionList[Number(selectedEntity.getName())].fly=true;
	selectedEntity.addComponent("Motion,Collision, Gravity,Multiway") .checkHits('wall') // check for collisions with entities that have the Solid component in each frame
    .bind("HitOn", function(hitData) {
        Crafty.log("Collision with Solid entity occurred for the first time.");
        if(isUp==true){
        this.y+=10;
        this.x-=5;
    }
    if(isBack==true){
        this.x+=10;
        //this.y+=5;
        
    }
    if(isFor==true){

    	this.x-=10;
    	//this.y+=5;
    
    }
    if(isDown==true){

    	this.y-=10;
    	this.x-=5;
    
    }
    })
    .bind("HitOff", function(comp) {
        Crafty.log("Collision with Solid entity ended.");
    })
    .bind('KeyDown', function(e) {
       if(e.key == Crafty.keys.UP_ARROW){
     isDown=false;
//      if(this.y<20){
//     console.log(this.y);
//      this.multiway(150, {UP_ARROW: 0, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
// }
}

if(e.key == Crafty.keys.DOWN_ARROW){
	isDown=true;
	isBack=false;
	isUp=false;
	isFor=false;
 }
 if(e.key == Crafty.keys.UP_ARROW){
	isUp=true;
	isBack=false;
	isDown=false;
	isFor=false;
 }

 if(e.key == Crafty.keys.RIGHT_ARROW){
	isBack=false;
	isDown=false;
	isUp=false;
	isFor=true;
 }

 if(e.key == Crafty.keys.LEFT_ARROW){
	isBack=true;
	isDown=false;
	isUp=false;
	isFor=false;
 }

    });
      //var ay = selectedEntity.ay; 
      //selectedEntity.ay -= 50; 
    selectedEntity.multiway(150, {UP_ARROW: -45, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
 
     Crafty.viewport.width=700;
     Crafty.viewport.height=460;
    
    Crafty.viewport.clampToEntites=false;
     selectedEntity.addComponent("Solid");
   Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(selectedEntity,0,0);
    });
    Crafty.viewport.centerOn(selectedEntity,0); 
    //Crafty.stage.fullscreen=true;



    document.getElementById('fly').style.backgroundColor = "blue";
   // document.getElementById('jump').style.backgroundColor = "white";
    	


}

else{
	console.log("please make floor");
}

}
else if (actionList[Number(selectedEntity.getName())].fly==true){
	actionList[Number(selectedEntity.getName())].fly=false;
//flyf=true;
selectedEntity.removeComponent('Multiway');
document.getElementById('fly').style.backgroundColor = "white";
if(selectedEntity.has('Multiway')){
	console.log("has multiway");
}

}



}
function fall(){

	 var ent3 = selectedEntity.clone()
              .attr({x:selectedEntity.x, 
              	y:selectedEntity.y

              });
              console.log("selectedEntity name="+selectedEntity.getName());
                 console.log("ent3 name="+ent3.getName());
             ent3.setName(selectedEntity.getName());
              createResizeEntity(ent3,false);
              selectedEntity.destroy();

              for(var g=0;g<4;g++){
              	circles[g].visible=false;
              }
              entList.push(ent3);

              notVisible();


  ///////////////////////////////////////////////////left///////////////////////////////
  //selectedEntity.x=selectedEntity.x-20;
//   for(var i=0;i<entList.length;i++){
// 	entList[i].x=entList[i].x-2;
// }
//     removeCircle();
  //////////////////////////////////////////////////left///////////////////////////////////


 }
function dissapear(){
	var d = new Date(); 
	if(actionList[Number(selectedEntity.getName())].dissapear==false){
		actionList[Number(selectedEntity.getName())].dissapear=true;
		 var  obj=actionInfo({x:selectedEntity.x,
y:selectedEntity.y,
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:'d' ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'n',
	keyType:'n',
	speed:200

});
     checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h);
  actionA.push(obj);
  
removeCircle();
selectedEntity.css({'border': '0px'});

selectedEntity.visible=false;
	}
 else if(actionList[Number(selectedEntity.getName())].dissapear==true){
		actionList[Number(selectedEntity.getName())].dissapear=false;
		 var  obj=actionInfo({x:selectedEntity.x,
y:selectedEntity.y,
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:'a' ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'n',
	keyType:'n',
	speed:200

});
     checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h);
  actionA.push(obj);
  
//removeCircle();
//selectedEntity.css({'border': '0px'});

selectedEntity.visible=true;
	}
}
function growing(){
var d = new Date(); 
  var  obj=actionInfo({x:selectedEntity.x,
y:selectedEntity.y,
h:selectedEntity.h,
w:selectedEntity.w,
//src:selectedEntity.__image,
	id:selectedEntity.getName(),
	action:'g' ,
	startTime:document.getElementById('timer').innerHTML,
	stopTime:'n',
	keyType:'n',
	speed:200

});
 
   checkIfexsist(selectedEntity.x,selectedEntity.y,selectedEntity.w,selectedEntity.h);
    actionA.push(obj);
	removeCircle();
selectedEntity.css({'border': '0px'});

	var ww=selectedEntity.w;
ww+=10;
var hh=selectedEntity.h;
hh+=10;
var xx=selectedEntity.x;
xx+=5;
yy-=5;
var yy=selectedEntity.y;

selectedEntity.attr({
	x:xx,
	y:yy,
	w:ww,
	h:hh
});
selectedEntity.visible=true;
 


}

function close1(){
	console.log('close');
	document.getElementById('warning').style.display='none';
}


function checkIfClick(){
if(actionList[Number(selectedEntity.getName())].expand==true){
	circles[8].css({'border': '1px solid blue'});
}
if(actionList[Number(selectedEntity.getName())].collision==true){
	circles[9].css({'border': '1px solid blue'});
}
if(actionList[Number(selectedEntity.getName())].freez==true){
	circles[10].css({'border': '1px solid blue'});
}

if(actionList[Number(selectedEntity.getName())].gravity==true){
	circles[11].css({'border': '1px solid blue'});
}

if(actionList[Number(selectedEntity.getName())].apple==true){
	circles[12].css({'border': '1px solid blue'});
}
}



function removeEventFromOtherEnitiy(){
	var array_of_entities = Crafty("2D").get();
	for(var i=0;i<array_of_entities.length;i++){
		console.log(array_of_entities[i].getName());
	}

	for(var i=3;i<array_of_entities.length;i++){
		if(array_of_entities[i]==selectedEntity){
			console.log("*****************");
                        console.log(Number(array_of_entities[i].getName()));


                    if(actionList[Number(array_of_entities[i].getName())].jump==true){
                      ////////////////////////////////////////////////
                      if(maxFlag==true){
                        var wx=window.outerWidth;
                        var wy=window.outerHeight;
                            Crafty.viewport.width=wx;
                            Crafty.viewport.height=wy;

                      }
                      else if(maxFlag==false){
                            Crafty.viewport.width=700;
                            Crafty.viewport.height=460;

                      }

    
   Crafty.viewport.clampToEntites=false;
        selectedEntity.addComponent("Solid");
    Crafty.bind("CameraAnimationDone",function(){
    Crafty.viewport.follow( selectedEntity,0,0);
    });
    Crafty.viewport.centerOn( selectedEntity,0); 
                      ///////////////////////////////////////////////
                    	      
	                      array_of_entities[i].addComponent('Twoway');
	                        array_of_entities[i].twoway(200);
	                       console.log("add from select because jump is true");
	                       document.getElementById('jump').style.backgroundColor = "blue";

                                              }
                                               else{
                                               	console.log("jump is false in selected entity");
                                              	 document.getElementById('jump').style.backgroundColor = "white";
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].fly==true){
                    	 document.getElementById('fly').style.backgroundColor = "blue";
                   ////////////////////////////////////////////////
                      if(maxFlag==true){
                        var wx=window.outerWidth;
                        var wy=window.outerHeight;
                            Crafty.viewport.width=wx;
                            Crafty.viewport.height=wy;

                      }
                      else if(maxFlag==false){
                            Crafty.viewport.width=700;
                            Crafty.viewport.height=460;

                      }
    
   Crafty.viewport.clampToEntites=false;
        selectedEntity.addComponent("Solid");
    Crafty.bind("CameraAnimationDone",function(){
    Crafty.viewport.follow( selectedEntity,0,0);
    });
    Crafty.viewport.centerOn( selectedEntity,0); 
                      ///////////////////////////////////////////////
                            
                    	 array_of_entities[i].addComponent('Multiway');
                    	 array_of_entities[i].multiway(150, {UP_ARROW: -45, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
	                     
                                              }
                                               else{
                                              	 document.getElementById('fly').style.backgroundColor = "white";
                                              }

                    if(actionList[Number(array_of_entities[i].getName())].dissapear==true){
                    	 document.getElementById('dissapear').style.backgroundColor = "blue";
	                       
                                              }
                                               else{
                                              	 document.getElementById('dissapear').style.backgroundColor = "white";
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].growing==true){
                    	 document.getElementById('growing').style.backgroundColor = "blue";
	                       
                                              }
                                               else{
                                              	 document.getElementById('growing').style.backgroundColor = "white";
                                              }





		}
		else{
			var doNothing=false;
			for(var j=0;j<circles.length;j++){
                 if(array_of_entities[i]== circles[j]){
                 	doNothing=true;
                 	break;
                 }
			}
			if(doNothing==false){
				for(var j=0;j<lines.length;j++){
                if(array_of_entities[i]==lines[j]){
                		doNothing=true;
                 	break;
                }
               }
			}
			if(doNothing==false){
				for(var j=0;j<gravity_list.length;j++){
                if(array_of_entities[i]==gravity_list[j]){
                		doNothing=true;
                 	break;
                }
               }
			}
			if(doNothing==false){
				for(var j=0;j<cirList.length;j++){
                if(array_of_entities[i]==cirList[j]){
                		doNothing=true;
                 	break;
                }
               }
			}
			if(doNothing==false){
				for(var j=0;j<walls.length;j++){
                if(array_of_entities[i]==walls[j]){
                		doNothing=true;
                 	break;
                }
}
			}
			if(!doNothing){

			 if(actionList[Number(array_of_entities[i].getName())].move==true){
			 	         array_of_entities[i].twoway(1);
	                     array_of_entities[i].removeComponent('Twoway');
                                              }

                    if(actionList[Number(array_of_entities[i].getName())].jump==true){
                    	array_of_entities[i].twoway(1);
	                      array_of_entities[i].removeComponent('Twoway');
	                      console.log("remove from not select");
	                      console.log(array_of_entities[i].getName());
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].fly==true){
                    	array_of_entities[i].removeComponent('Multiway');
	                     
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].fall==true){
	                     
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].dissapear==true){
	                       
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].growing==true){
	                       
                                              }

			}


		}
	}

}




function addGravity(){


	for(var i=1;i<array_of_entities.length;i++){
		if(array_of_entities[i]==selectedEntity){
                      
		}
		else{
			var doNothing=false;
			for(var j=0;j<circles.length;j++){
                 if(array_of_entities[i]== circles[j]){
                 	doNothing=true;
                 	break;
                 }
			}
			if(!doNothing){

			array_of_entities[i].addComponent('Gravity');
			array_of_entities[i].gravity('Floor');

			}


		}
	}
}


function checkIfFloor(){

  
 // actionList[Number(selectedEntity.getName())].jump=true;
	 var arr = Crafty("2D").get();
 var isFloor=false;
for (var i=0;i< arr.length;i++) {
	//console.log("loop");
	if(arr[i]!=selectedEntity){
if(arr[i].has('Floor')){
	//console.log("floor");
	isFloor=true;
	break;
}

}}

if(isFloor==true){
	return true;
}

return false;
}

function hideCir(){
	for(var h=0;h<selectedEntity._children.length;h++){
		selectedEntity._children[h].visible=false;
	}
}

function showCir(){
	for(var h=0;h<selectedEntity._children.length;h++){
		selectedEntity._children[h].visible=true;
	}
}



function speed(){

if(speedFlag==false){
	speedFlag=true;
	document.getElementById('speedList').style.display='inline-block';
}
else if(speedFlag==true){
	speedFlag=false;
	document.getElementById('speedList').style.display='none';
}
}

function finish(){
// 	for(var i=0;i<actionList.length;i++){
// 	console.log("fly="+actionList[i].fly+" , ");
// 	console.log("jump="+actionList[i].jump+" , ");
// 	console.log("growing="+actionList[i].growing+" , ");
// 	console.log("dissapear="+actionList[i].dissapear+" , ");
// 	console.log("pos=("+actionList[i].initPosX+" , "+actionList[i].initPosY+")");

// }
console.log("************action array*************");
console.log("action list lenght="+actionA.length);
for(var i=0;i<actionA.length;i++){
 	console.log("x="+actionA[i].x+" , ");
 	console.log("y="+actionA[i].y+" , ");
    console.log("xf="+actionA[i].xf+" , ");
  console.log("yf="+actionA[i].yf+" , ");
 	console.log("h="+actionA[i].h+" , ");
 	console.log("w="+actionA[i].w+" , ");
   // console.log("src="+actionA[i].src+" , ");
    console.log("id="+actionA[i].id+" , ");
    console.log("action="+actionA[i].action+",");
    console.log("startTime="+actionA[i].startTime+" , ");
    console.log("stopTime="+actionA[i].stopTime+" , ");
    console.log("keyType="+actionA[i].keyType+" , ");
    console.log("speed="+actionA[i].speed+" , ");


}

objList.length=0;
for(var y=0;y<objList.length;h++){
  console.log("objList is not empty");
}
//removeDublicate();
copyEntToArray();
console.log("objList before concat")
 for(var i=0;i<objList.length;i++){
    console.log("x="+objList[i].x+" , ");
  console.log("y="+objList[i].y+" , ");
  console.log("h="+objList[i].h+" , ");
  console.log("w="+objList[i].w+" , ");
    console.log("src="+objList[i].src+" , ");
    console.log("id="+objList[i].id+" , ");
   console.log("collision="+objList[i].collision+" , ");
   console.log("apple="+objList[i].apple+" , ");
   console.log("rotate="+objList[i].rotate+" , ");
 }


for(var i=0;i<actionAEnt.length;i++){
var index=0;

      for(var j=0;j<entList.length;j++){
       if( entList[j].getName()==actionAEnt[i].id){

          index=j;
          console.log("index="+index);
          break;
       }
      }

         var entLine=[];
      var chArr=entList[index]._children;
      console.log("child length"+chArr.length);
      for(var k=1;k<chArr.length;k++){
        console.log(chArr[k]);
        if(chArr[k].getName()=="line"){
           var ob=lineObj({
            x:chArr[k].x,
            y:chArr[k].y,
            w:chArr[k].w,
            h:chArr[k].h
           });
           actionAEnt[i].gravity.push(ob);
        }
      }

actionAEnt[i].collision=actionList[actionAEnt[i].id].collision;
actionAEnt[i].freez=actionList[actionAEnt[i].id].freez;

actionAEnt[i].apple=actionList[actionAEnt[i].id].apple;
actionAEnt[i].rotate=actionList[actionAEnt[i].id].rotate;
//actionAEnt[i].gravity=entLine;

objList.push(actionAEnt[i]);
}
if(objList.length>0){
   var min=objList[0].x;
}

  //console.log("x0="+min);
  var vv;

  for(var i=1;i<objList.length;i++){
vv=objList[i].x;
if(vv<min){
  min=vv;
  
}
  }
  console.log("min1="+min);
  if(min<0){
      for(var i=0;i<objList.length;i++){
  console.log("bb="+objList[i].x);
  objList[i].x=objList[i].x-min;
  console.log("aa="+objList[i].x);
}
  }






console.log("************entity************");
for(var i=0;i<objList.length;i++){
  console.log("x="+objList[i].x+" , ");
  console.log("y="+objList[i].y+" , ");
  console.log("h="+objList[i].h+" , ");
  console.log("w="+objList[i].w+" , ");
    console.log("src="+objList[i].src+" , ");
    console.log("id="+objList[i].id+" , ");
   console.log("collision="+objList[i].collision+" , ");
   console.log("apple="+objList[i].apple+" , ");
   console.log("rotate="+objList[i].rotate+" , ");
console.log("************line for "+objList[i].id+"************");
 //  console.log("gravity="+objList[i].gravity+" , ");

for(var m=0;m<objList[i].gravity.length;m++){
  console.log("line x="+objList[i].gravity[m].x);
  console.log("line y="+objList[i].gravity[m].y);
  console.log("line w="+objList[i].gravity[m].w);
  console.log("line h="+objList[i].gravity[m].h);
}

}
}
function movetoRight(am){
  if(Crafty.viewport.width==700){
    Crafty.viewport.x+=am;
  }
  else{
    for(var i=0;i<entList.length;i++){
  entList[i].x=entList[i].x+am;
}
 

  }


    removeCircle();
}


function movetoLeft(){

for(var i=0;i<entList.length;i++){
	entList[i].x=entList[i].x-5;
}
 
    removeCircle();
}


function speedValue(val){
	var acc = selectedEntity.acceleration();
switch(val){
case'n':
console.log("normal");
acc.x=0;

break;

case's':
console.log("slow");
acc.x=-1;

break;
case'f':
console.log("fast");
acc.x+=2;

break;
}



}


function isFirstEvent(en){

	if(!actionList[Number(en)].fly&&!actionList[Number(en)].jump&&!actionList[Number(en)].dissapear&&!actionList[Number(en)].growing){
		
		actionList[Number(en)].initPosX=selectedEntity.x;
		actionList[Number(en)].initPosY=selectedEntity.y;
	}

}





function checkIfexsist(x,y,w,h){
	var flagE=false;
  console.log("inside checkIfexsist");
	for(var l=0;l<actionA.length;l++){
    console.log("check if exsist function selectedEntity id="+selectedEntity.getName()+"actionA id="+actionA[l].id);
		if(actionA[l].id==selectedEntity.getName()){
	
flagE=true;
console.log("check if exsist function find this entity in action");
break;
		}
	
}
if(flagE==false){
	//	console.log("match");
		var entObj=objBackground({
        x:x,
        y:y,
        w:w,
        h:h,
        src:selectedEntity.__image,
	id:selectedEntity.getName(),
  rotate:false,
collision:false,
freez:false,
apple:false,
gravity:""
	});
	
actionAEnt.push(entObj);
}


}

//var myVar = setInterval(myTimer ,1000);
var counterS=0;
var counterM=0;
var handredMSec=0;
var secfrom="00";
var minform="00";
//var handredMSecform="00";
var myVar;
var counterST=0;
var counterMT=0;
var handredMSecT=0;
var secfromT="00";
var minformT="00";
//var handredMSecformT="00";

var myVar;
var myVarT;
function myTimer() {
    var d = new Date();
    if(handredMSec==10){
      handredMSec=0;
      counterS++;

    }

    if(counterS==60){
    counterM++;
    if(counterM>9){
       minform=counterM;
    }
    else{
      minform="0"+counterM;
    }
    counterS=0;
    secfrom="00"
    }
    else if (counterS>9){
      secfrom=counterS;
    }
    else {
      secfrom="0"+counterS;
    }
    document.getElementById("timer").innerHTML = minform+":"+secfrom+":"+handredMSec;
   handredMSec++;
}


function myTimerTest() {
  for(var i=0;i<actionA.length;i++){
  if(actionA[i].startTime==document.getElementById("timer").innerHTML){
    test(actionA[i]);
  }
}
 if(handredMSecT==10){
      handredMSecT=0;
      counterST++;

    }

    //var d = new Date();
    if(counterST==60){
    counterMT++;
    if(counterMT>9){
       minformT=counterMT;
    }
    else{
      minformT="0"+counterMT;
    }
    counterST=0;
    secfromT="00"
    }
    else if (counterST>9){
      secfromT=counterST;
    }
    else {
      secfromT="0"+counterST;
    }
    document.getElementById("timer").innerHTML = minformT+":"+secfromT+":"+handredMSecT;
  handredMSecT++;

}

var alarmF=false;
function start(){
  //console.log(document.getElementById('alarm').display);
  
  if(alarmF==false){
    alarmF=true;
//document.getElementById('start').innerHTML="stop";
  document.getElementById('pause').display="inline-block";
document.getElementById('alarm').display="none";

 myVar = setInterval(myTimer ,100);

  }
  else {

    alarmF=false;
    document.getElementById('alarm').display="inline-block";
document.getElementById('pause').display="none";
   // document.getElementById('start').innerHTML="start";
 
clearInterval(myVar);

  }
}
 
function reset(){
  counterS=0;
 counterM=0;
 handredMSec=0;
 secfrom="00";
 minform="00";
   document.getElementById("timer").innerHTML = minform+":"+secfrom+":"+"00";
}

  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


function myJump(entt,xff,yff){
  console.log('clear');
   var wasTriggered = false;
selectedEntity.addComponent('Twoway');
selectedEntity.twoway(200);


      var count=85;
       ///if(selectedEntity.has('Gravity')){

               entt.antigravity();
                console.log("remove gravity");
              // }
       var myVar = setInterval(function () {
                console.log("jumpp");
                 entt.y-=2.053;
              
                count = count - 1;
                if (count==0) {
                  // console.log("add gravity");
                   entt.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);

      
       ///if(selectedEntity.has('Gravity')){

             //   selectedEntity.removeComponent('Gravity');
  
         
      // console.log("add gravity");
        // selectedEntity.addComponent('Gravity');
   

}

function clearr(){
 for(var i=0;i<entList.length;i++){
  entList[i].destroy();
  
 }
 entList.length=0;
 for(var i=0;i<actionA.length;i++){
  actionA[i]="";
  
 }
 actionA.length=0;
  for(var i=0;i<objList.length;i++){
  objList[i]="";
  
 }
 objList.length=0;
  for(var i=0;i< actionAEnt.length;i++){
  actionAEnt[i]="";
  
 }
 actionAEnt.length=0;
}
function startTest(){
  if (alarmF==true){
     start();
  }

 
    finish();
    expand();
   for(var j=0;j<entList.length;j++){
      if(actionList[Number(entList[j].getName())].dissapear==true){
        entList[j].visible=true;

      }
   }
    
 for(var j=0;j<entList.length;j++){
  for(var i=0;i<actionAEnt.length;i++){
       
      if(actionAEnt[i].id==entList[j].getName()){
        console.log('test set initial pos to ('+actionAEnt[i].x+","+actionAEnt[i].y+")");
     entList[j].x=actionAEnt[i].x;
     entList[j].y=actionAEnt[i].y;
     entList[j].h=actionAEnt[i].h;
     entList[j].w=actionAEnt[i].w;

        break;
      }
    }

  }
  /////////////////////////////////////////////action///////////////////////////////////
  counterST=0;
 counterMT=0;
 secfromT="00";
 minformT="00";
 myVarT = setInterval(myTimerTest ,100);
//var actArrTime=[];


}

function test(act){

 
var index=0;

//   that.x=p.x;
// that.y=p.y;
// that.w=p.w;
// that.h=p.h;

// that.id=p.id;
// that.action=p.action;
// that.startTime=p.startTime;
// that.stopTime=p.stopTime;
// that.keyType=p.keyType;
// that.speed=p.speed;

for(var j=0;j<entList.length;j++){
   if(act.id==entList[j].getName()){
 index=j;
 break;
   }

}


//var amount=findTimeAmount(act.startTime,act.stopTime);
switch(act.action){
  case 'j':
  switch(act.keyType){
   case Crafty.keys.LEFT_ARROW:
    leftMove(act.stopTime,act.xf,act.yf,entList[index]);
   break;
   case Crafty.keys.RIGHT_ARROW:
 rightMove(act.stopTime,act.xf,act.yf,entList[index]);
   break;
   case Crafty.keys.UP_ARROW:
   myJump(entList[index],act.xf,act.yf);
   break;



  }

  break;
 case 'f':
 entList[index].gravityConst(750);
  switch(act.keyType){
   case Crafty.keys.LEFT_ARROW:
     leftMoveF(act.stopTime,act.xf,act.yf,entList[index]);
   break;
   case Crafty.keys.RIGHT_ARROW:
 rightMoveF(act.stopTime,act.xf,act.yf,entList[index]);
   break;
   case Crafty.keys.UP_ARROW:
   upMove(act.stopTime,act.xf,act.yf,entList[index]);
   break;
    case Crafty.keys.DOWN_ARROW:
   downMove(act.stopTime,act.xf,act.yf,entList[index]);
   break;
 }
  break;
   case 'g':
  
  break;
   case 'd':
entList[index].visible=false;
entList[index].destroy();
  
  break;
   case 'a':
  
  break;

}


 

}


// function removeDublicate(){

// for(var k=0;k<actionAEnt.length-1;k++){
// for(var l=k+1;l<actionAEnt.length;l++){
// if(actionAEnt[k].id==actionAEnt[l].id){

//  actionAEnt.splice(l, l+1);
// }


// }


// }

// for(var k=0;k<actionAEnt.length;k++){
// console.log("*******only actionAEn");
// console.log("x="+actionAEnt[k].x+" , ");
//   console.log("y="+actionAEnt[k].y+" , ");
//   console.log("h="+actionAEnt[k].h+" , ");
//   console.log("w="+actionAEnt[k].w+" , ");
//     console.log("src="+actionAEnt[k].src+" , ");
//     console.log("id="+actionAEnt[k].id+" , ");
//    console.log("collision="+actionAEnt[k].collision+" , ");
//    console.log("apple="+actionAEnt[k].apple+" , ");
//    console.log("rotate="+actionAEnt[k].rotate+" , ");

// }


// }


function findTimeAmount(startTime,endTime){
var startM=startTime.slice(0, 2);
var startS=startTime.slice(3);
console.log("M="+startM+"S="+startS);
var endM=endTime.slice(0, 2);
var endS=endTime.slice(3);
var resM=Number(endM)-Number(startM);
var resS=Number(endS)-Number(startS);
console.log("result="+(resM*60)+resS);
return (resM*60)+resS;

}
function leftMove(stopT,xff,yff,entt){
  // var count=amount;
      
       var myVar = setInterval(function () {
                 console.log("leftMovee");
                entt.x-=2.7;
              
              //  count = count - 1;
                if (stopT==document.getElementById("timer").innerHTML||entt.x<=xff ) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);


}


function rightMove(stopT,xff,yff,entt){
   //var count=amount;
      
       var myVar = setInterval(function () {
                 console.log("rightMovee");
                 entt.x+=2.7;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.x>=xff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);
     }

function upMove(stopT,xff,yff,entt){
      
       var myVar = setInterval(function () {
                 console.log("rightMovee");
                 entt.y-=1;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML||entt.y<=yff ) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            },10);


}

function downMove(stopT,xff,yff,entt){
      
       var myVar = setInterval(function () {
                 console.log("rightMovee");
                 entt.y+=1;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.y>=yff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);


}



     function scrollAct(){
      var scroll=document.getElementById('scroll');

      var st = scroll.pageXOffset ||scroll.scrollLeft; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       console.log("scroll pos"+st);
       var am=lastScrollTop-st;
       lastScrollTop = st;
        movetoRight(am);
   // if (st > lastScrollTop){
   //    console.log("scroll right");
   //    movetoLeft();

   // } else {
   //     console.log("scroll left");
   //     movetoRight();
   // }
   // lastScrollTop = st;
     }






function leftMoveF(stopT,xff,yff,entt){
  // var count=amount;
      
       var myVar = setInterval(function () {
                 console.log("leftMovee");
                entt.x-=1.7;
              
              //  count = count - 1;
                if (stopT==document.getElementById("timer").innerHTML||entt.x<=xff ) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);


}


function rightMoveF(stopT,xff,yff,entt){
   //var count=amount;
      
       var myVar = setInterval(function () {
                 console.log("rightMovee");
                 entt.x+=1.7;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.x>=xff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
               
            }, 10);}
     


function removeAllAction(){
 
 for(var i=0;i<actionA.length;i++){
  actionA[i]="";
 } 
 actionA.length=0;

}
function undo(){
actionA[length-1]="";
actionA.length=actionA.length-1;
}




