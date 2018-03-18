
// // Get an array of all 2D entities
// var array_of_entities = Crafty("2D").get();

//window.onload = function(){




	

//}
var toyObj=[];

var objBackground=function(p){
var that={};
that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;
that.src=p.src;
that.id=p.id;
return that;
}

var actionList=[];
var objAction=function(p){
	var that={};
that.move=p.move;
that.jump=p.jump;
that.fly=p.fly;
that.fall=p.fall;
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
that.floors=p.floors;
return that;

}
var entityNameCounter=0;
var xpos;
var ypos;
var Game;
var objList=[];
var circles=[];
var lines=[];
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

var initWidht=800;


//function ff(){

  //alert(Game);
 Game=document.getElementById('game');
 Crafty.init(800,480, document.getElementById('game'));
  selectedEntity=Crafty.e('2D,DOM').attr({
	w:0,
	h:0

});

  Game.addEventListener("contextmenu",function(){

	selectedEntity.css({'border': '0px'});


        removeCircle();
     
});





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
var bg = Crafty.e("2D, DOM, flower,Mouse").attr({
	w:200,
	h:150,
	 x:(xpos- 100),
     y:(ypos-50)
             	});



bg.addComponent('Draggable');


  	console.log("must draw square");
	var line=Crafty.e('2D, DOM, Color,Mouse').attr({
		x:bg.x,
		y:bg.y+10,
		w:bg.w,
		h:2
	}).color('green');
	line.addComponent('Draggable');
	line.dragDirection({x:0, y:1})
	

bg.attach(line);
lines.push(line);
line.bind('MouseMove',function(e){
if(line.y>(line._parent.y+line._parent.h)){
	line.y=line._parent.y+line._parent.h
}
else if(line.y<(line._parent.y)){
line.y=line._parent.y;
}	

});
    
  //  document.getElementById('obj_info').style.display='block';
  // document.getElementById('objName').innerHTML=bg.getId();
  //   document.getElementById('objW').innerHTML='width:'+bg._w;
  //      document.getElementById('objH').innerHTML='hieght:'+bg._h;

createResizeEntity(bg);

 




 console.log(bg.__image);
 //objList.push(bg);
 



 


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
	var arrObj;
	for(var i=0 ;i<array_of_entities.length;i++){
		 arrObj=new objBackground({
	x:array_of_entities[i].x,
	y:array_of_entities[i].y,
	w:array_of_entities[i].w,
	h:array_of_entities[i].h,
	src:array_of_entities[i].__image,
	id:array_of_entities[i].getId()

});
		objList.push(arrObj);

	}

for(var i=0 ;i<objList.length;i++){
console.log(objList[i]);


}
}



function removeCircle(){
	for(var i=0;i<circles.length;i++){

    circles[i].destroy();
    
   


}

circles.length=0;

}

//////////////////////////////////////background color//////////////////////

 function setBackColor(col){
 	//getInit();

 	  Crafty.background(col);
 	  //document.getElementById(col).style.border(2px solid white);

 }

//////////////////////////////////////background color//////////////////////


function createResizeEntity(rootm){
//var array_of_entities = Crafty("2D").get();
rootm.setName(entityNameCounter);
entityNameCounter++;
var appleFlag=false;
//console.log(array_of_entities.length);
var oa=objAction({
	move:false,
jump:false,
fly:false,
fall:false,
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
floors:{}

});
//Number(x1)
actionList[Number(rootm.getName())]=oa;


/////////////////////remove all exsisting circles///////////////////


	rootm.bind('Click', function (e) {
  console.log(Number(rootm.getName()));
  


	selectedEntity.css({'border': '0px'});


        removeCircle();
     
  

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

	w:250,
	h:28,
	 x:rootm.x,
     y:rootm.y-34
             	}).color('white');
boxs.css({'border': '2px solid  #b3b3b3',
'border-radius':'16px'});

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


notVisible();

	}
	
	});


circle1.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;


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

notVisible();
	}
	
	});


circle2.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;



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

notVisible();
	}
	
	});


circle3.bind('MouseUp',function(e){
rootm.css({'border': '1px dashed #b3b3b3'});	
resizeFlag=false;





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


notVisible();

	}
	
	});


circle4.bind('MouseUp',function(e){
	rootm.css({'border': '1px dashed #b3b3b3'});
resizeFlag=false;


//  


Visible(rootm);

	});
//////////////////////////////////circle4///////////////////////////////////////// 
/////////////////////////////////delete///////////////////////////

del.bind('Click', function (e) {
rootm.destroy();

	selectedEntity.css({'border': '0px'});


        removeCircle();


});


/////////////////////////////////delete///////////////////////////
////////////////////////////////copy/////////////////////////////////
copy.bind('Click', function (e) {

 var ent2 = rootm.clone()
              .attr({x:100, y:100});

              createResizeEntity(ent2);
             
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
	}
	else if(actionList[Number(selectedEntity.getName())].collision==true){
		console.log("not true for collision");
		selectedEntity.removeComponent('Solid');
         //collisionFlag=false;
          this.css({'border': '0px '});
  actionList[Number(selectedEntity.getName())].collision=false;
	}

});

//////د\\\\\/////////////////////solid//////////////////////////////

/////////////////////////////////gravity///////////////////////////////

gravity.bind('Click', function (e) {

console.log("inside gravity");



	if(actionList[Number(selectedEntity.getName())].gravity==false){
		var chArr=selectedEntity._children
		chArr[0].addComponent('Floor');
         //gravityFlag=true;
          this.css({'border': '1px solid #0FB1B3 '});
  actionList[Number(selectedEntity.getName())].gravity=true;
	}
	else if(actionList[Number(selectedEntity.getName())].gravity==true){
		var chArr=selectedEntity._children
		chArr[0].removeComponent('Floor');
         //gravityFlag=false;
          this.css({'border': '0px '});
  actionList[Number(selectedEntity.getName())].gravity=false;
	}





});

//////د\\\\\/////////////////////gravity//////////////////////////////

/////////////////////////////////apple///////////////////////////////

apple.bind('Click', function (e) {
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


}



////////////////////////////////////////////////////////////////////














// 
function move(){

	//////////move gravityion/////////////

}
function jump(){
if (actionList[Number(selectedEntity.getName())].jump==false){
	

//checkIfFloor()==true
if(actionList[Number(selectedEntity.getName())].apple==true){
actionList[Number(selectedEntity.getName())].jump=true;
	  //jumpFlag=false;
	selectedEntity.addComponent("Twoway,Collision,Gravity") .checkHits('Solid') // check for collisions with entities that have the Solid component in each frame
    .bind("HitOn", function(hitData) {
        Crafty.log("Collision with Solid entity occurred for the first time.");
    })
    .bind("HitOff", function(comp) {
        Crafty.log("Collision with Solid entity ended.");
    });

   // selectedEntity.gravity('Floor');
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




}
function fly(){
	

if(actionList[Number(selectedEntity.getName())].fly==false){	
	//flyf=false;


if(actionList[Number(selectedEntity.getName())].apple==true){
	actionList[Number(selectedEntity.getName())].fly=true;
	selectedEntity.addComponent("Motion,Collision, Gravity,Multiway") .checkHits('Solid') // check for collisions with entities that have the Solid component in each frame
    .bind("HitOn", function(hitData) {
        Crafty.log("Collision with Solid entity occurred for the first time.");
    })
    .bind("HitOff", function(comp) {
        Crafty.log("Collision with Solid entity ended.");
    })
    .bind('KeyDown', function(e) {
       if(e.key == Crafty.keys.UP_ARROW){

if(this.y<20){
console.log(this.y);
this.multiway(150, {UP_ARROW: 0, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
}
}
    });
      //var ay = selectedEntity.ay; 
      //selectedEntity.ay -= 50; 
    selectedEntity.multiway(150, {UP_ARROW: -45, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
    
   
      

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


var arr = Crafty("2D").get();
 var isFloor=false;
for (var i=0;i< arr.length;i++) {
	console.log("loop");
	if(arr[i]!=selectedEntity){
if(arr[i].has('Floor')){
	console.log("floor");
	isFloor=true;
	break;
}

}}

if(isFloor==true){
	selectedEntity.addComponent("Twoway, Gravity,Jumper,Collision") .checkHits('Solid') // check for collisions with entities that have the Solid component in each frame
    .bind("HitOn", function(hitData) {
        Crafty.log("Collision with Solid entity occurred for the first time.");
    })
    .bind("HitOff", function(comp) {
        Crafty.log("Collision with Solid entity ended.");
    });
selectedEntity.twoway(200)
  .gravity('Floor');


	document.getElementById('fall').style.backgroundColor = "blue";
	

}

else{
	console.log("please make floor");
}

}
function dissapear(){



selectedEntity.visible=false;
}
function growing(){

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

	for(var i=1;i<array_of_entities.length;i++){
		if(array_of_entities[i]==selectedEntity){
			console.log("*****************");
                        console.log(Number(array_of_entities[i].getName()));
			        if(actionList[Number(array_of_entities[i].getName())].move==true){

	                     array_of_entities[i].addComponent('Twoway');
	                     array_of_entities[i].twoway(200);
	                      document.getElementById('jump').style.backgroundColor = "blue";
                                              }
                                              else{

                                              	 document.getElementById('jump').style.backgroundColor = "white";
                                              }

                    if(actionList[Number(array_of_entities[i].getName())].jump==true){
                    	      
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

                    	 array_of_entities[i].addComponent('Multiway');
                    	 array_of_entities[i].multiway(150, {UP_ARROW: -45, DOWN_ARROW: 45, RIGHT_ARROW: 0, LEFT_ARROW: 180});
	                     
                                              }
                                               else{
                                              	 document.getElementById('fly').style.backgroundColor = "white";
                                              }
                    if(actionList[Number(array_of_entities[i].getName())].fall==true){
                    	 document.getElementById('fall').style.backgroundColor = "blue";
	                     
                                              }
                                               else{
                                              	 document.getElementById('fall').style.backgroundColor = "white";
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