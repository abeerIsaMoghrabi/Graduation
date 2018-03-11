
// // Get an array of all 2D entities
// var array_of_entities = Crafty("2D").get();



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


var xpos;
var ypos;
var Game;
var objList=[];
var circles=[];
var selectedEntity;

var bg;

var expandFlag=false;
var collisionFlag=false;
var freezFlag=false;
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


	rootm.bind('Click', function (e) {

  
 Crafty.sprite(100,100, 'assets/imgs/gray.png', {f:[0,0]});

       Crafty.sprite(256,256, 'assets/imgs/dele1.png', {d:[0,0]});
       Crafty.sprite(2000,1707, 'assets/imgs/expand.png', {e:[0,0]});
        Crafty.sprite(512,512, 'assets/imgs/rotate.png', {r:[0,0]});
          Crafty.sprite(2000,2000, 'assets/imgs/copy2.png', {c:[0,0]});
           Crafty.sprite(512,512, 'assets/imgs/freez.png', {a:[0,0]});
            Crafty.sprite(199,150, 'assets/imgs/collison3.png', {co:[0,0]});
            Crafty.sprite(256,256, 'assets/imgs/act2.png', {act:[0,0]});
/////////////////////remove all exsisting circles///////////////////


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

	w:220,
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
var act = Crafty.e("2D, DOM, act,Mouse").attr({

	w:20,
	h:20,
	 x:rootm.x+195,
     y:rootm.y-29
             	});
rootm.css({'border': '1px dashed #b3b3b3'});



circles.push(circle1);
circles.push(circle2);
circles.push(circle3);
circles.push(circle4);
circles.push(boxs);
circles.push(del);
circles.push(copy);
circles.push(rotate);
circles.push(expand);
circles.push(collision);
circles.push(freez);
circles.push(act);
		selectedEntity=rootm;


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

	if(expandFlag==false){
		 var neww=cropPx(Game.style.width);
   var newh=cropPx(Game.style.height);
 rootm.w=neww;
 rootm.h=newh;
 console.log(neww);
 expandFlag=true;
 // this.css({'border': '1px solid #0FB1B3 '});
	}

	else if(expandFlag==true){
		rootm.w=200;
 rootm.h=150;
 expandFlag=false;
 // this.css({'border': '0px '});
	}
  
             
});

//////د\\\\\/////////////////////expand//////////////////////////////

/////////////////////////////////freez///////////////////////////////
freez.bind('Click', function (e) {
	if(freezFlag==false){
		  rootm.removeComponent("Draggable", false);
		  freezFlag=true;
		   //this.css({'border': '1px solid #0FB1B3 '});
		   for(var i=0 ;i<4;i++){
			circles[i].addComponent('Draggable');
		}
	}
	else if(freezFlag==true){
		rootm.addComponent("Draggable");
		for(var i=0 ;i<4;i++){
			circles[i].addComponent('Draggable');
		}
		freezFlag=false;
		 //this.css({'border': '0px '});
	}
 

             
});

//////د\\\\\/////////////////////freez//////////////////////////////

/////////////////////////////////act///////////////////////////////
act.bind('Click', function (e) {
	modalPlugin();
 

             
});

//////د\\\\\/////////////////////act//////////////////////////////


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


for(var i=4;i<circles.length;i++){
	circles[i].visible=true;
}


}


function modalPlugin(){
// 	var modal = new tingle.modal({
//     footer: true,
//     stickyFooter: false,
//     closeMethods: ['overlay', 'button', 'escape'],
//     closeLabel: "Close",
//     cssClass: ['custom-class-1', 'custom-class-2'],
//     onOpen: function() {
//         console.log('modal open');
//     },
//     onClose: function() {
//         console.log('modal closed');
//     },
//     beforeClose: function() {
//         // here's goes some logic
//         // e.g. save content before closing the modal
//         return true; // close the modal
//         return false; // nothing happens
//     }
// });

// // set content
// modal.setContent('<h1>here\'s some content</h1>');

// // add a button
// modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
//     // here goes some logic
//     modal.close();
// });

// // add another button
// modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
//     // here goes some logic
//     modal.close();
// });

// // open modal
// modal.open();

// // close modal
// modal.close();
}


// 
function move(){

	//////////move action/////////////

}
function jump(){


}
function fly(){

}
function fall(){

}
function dissapear(){

}
function growing(){

}