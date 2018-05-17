var wx=window.innerWidth;
var wy=window.innerHeight;
var walls2=[];
var natu2=[];
var theEndf2=false;
var buf2=[];
//here
var arrObj2=[];
var toyObj2=[];
var actionA2=[];
//var actionAEnt2=[];
var entityNameCounter2=0;
var objList2=[];
var entList2=[];
var txts2=[];
var objL2;
var Game2;
var stopTestF2=false;
var name2=document.getElementById("name").innerHTML;
//alert("js ="+name2);
var myVar2;
var counterST2=0;
var counterMT2=0;
var handredMSecT2=0;
var secfromT2="00";
var minformT2="00";

var firstOneDown2={
up:true,
down:true,
left:true,
right:true
};
var firstOneUp2={
up:true,
down:true,
left:true,
right:true
};
var sh=wy/480;
var x=wy-480;
var vv;
var l1;
var l2;
var l3;
var nw;
var nh;
var f1=true;
var actionAEntObj2=function(p){
var that={};

that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;
that.src=p.src;
that.id=p.id;
return that;
}
var lineObj2=function(p){
 var that={};

that.x=p.x;
that.y=p.y;
that.w=p.w;
that.h=p.h;

return that;
}


var natObj=function(p){
 var that={};

that.nw=p.nw;
that.nh=p.nh;

return that;
}


var objBackground2=function(p){
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

var actionInfo2=function(p){
var that={};

that.x=p.x;
that.y=p.y;
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

var StoryObj2=function(p){
var that={};

//that.actionAEnt=p.actionAEnt;
that.actionA=p.actionA;
that.objList=p.objList;
//that.len=p.len;
that.natu=p.natu;
that.textArr=p.textArr;
return that;
}

var lenObj2=function(p){
 var that={};

that.bl=p.bl;
that.al=p.al;
that.ael=p.ael;
return that;
}


console.log("wx="+wx+"wy="+wy);

Crafty.init(3000,wy, document.getElementById('game1'));
    Crafty.viewport.scale(sh);
Game2=document.getElementById('game1');
var config = {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
  };
  firebase.initializeApp(config);
  



var l=[];
var l2=[]; 
firebase.auth().onAuthStateChanged(function(user) {
 if(user) {

  

      readd();

      var delayInMilliseconds = 3000000; //1 second

     setTimeout(function() {
  
   }, delayInMilliseconds);
      

 }

 });


var z=0;


function readd(){
//alert("read");
  
var userId = firebase.auth().currentUser.uid;  

var story = firebase.database().ref(userId).child(" "+name2+"/").on("value",function(snapshot) {
    snapshot.forEach(function(data) {
      
      //console.log(data.val().StoryObj.actionA);
      objList2=data.val().StoryObj.objList;
      actionA2=data.val().StoryObj.actionA;
      //actionAEnt2=data.val().StoryObj.actionAEnt;
      natu2=data.val().StoryObj.natu;
     txts2=data.val().StoryObj.textArr;
      console.log(objList2);
      console.log(actionA2);
      //console.log(actionAEnt2);
      //alert (actionAEnt2.length);
      console.log(natu2);
      var nat;
//       Crafty.sprite(102,95, 'assets/imgs/paly2.png', {play2:[0,0]});
// var playEnt2=Crafty.e("2D, DOM,play2,Mouse").attr({

//   w:40,
//   h:40,
//    x:43,
//      y:3
//               });

// playEnt2.bind('Click', function (e) {
//   startTest2();

// });
// playEnt2.css({'borderRadius': '50%'});

for(var z=0;z<objList2.length;z++){

  for(var w=0;w<natu2.length;w++){
if(Number(objList2[z].id)==Number(natu2[w].id)){
      nw=natu2[w].nw;
      nh=natu2[w].nh;
    }
  }
      
      var b=objList2[z];

    Crafty.sprite(nw,nh,b.src, {flower:[0,0]});
    var bg = Crafty.e("2D, DOM, flower,Mouse,Gravity").attr({
    w:b.w,
    h:b.h,
    x:b.x,
    y:b.y
               });

    bg.setName(b.id);
    //alert(bg.getName());


  if(b.apple==true){
    bg.addComponent('Gravity');
    bg.gravity('Floor');
   }
   if(b.collision==true){
    var w22=b.w;
     var h22=b.h;
     var x22=b.x;
     var y22=b.y;

     var t11=y22+h22;
     var t22=y22-(h22/2.0);

     var s11=x22+w22;
     var s22=x22-w22;
   var tt2 = Crafty.e("2D, DOM, Color, solid, top, wall, Floor")
      .attr({x: x22, y: y22, w: w22, h: 1})
      ;
   var bb2 =Crafty.e("2D, DOM, Color, solid, bottom, wall")
      .attr({x: x22, y: t11, w: w22, h: 1})
      ;
   var ll2 =Crafty.e("2D, DOM, Color, solid, left, wall")
      .attr({x: x22, y: y22, w: 1, h: h22})
      ;
   var rr2 = Crafty.e("2D, DOM, Color, solid, right, wall")
      .attr({x: s11, y: y22, w: 1, h: h22})
      ;
tt2.setName("wall");
bb2.setName("wall");
ll2.setName("wall");
rr2.setName("wall");
      walls2.push(tt2);
      walls2.push(bb2);
      walls2.push(ll2);
      walls2.push(rr2);
    bg.attach(tt2);
    bg.attach(bb2);
    bg.attach(ll2);
    bg.attach(rr2);  
   }
if(b.rotate==true){
   bg.rotation = 45;
}
var g=b.gravity;
if(g!=null){
  for(var j=0;j<g.length;j++){
  
    var line=Crafty.e('2D, DOM, Color,Mouse').attr({
    x:g[j].x,
    y:g[j].y+10,
    w:g[j].w,
    h:3
  }).color('green');;
  line.addComponent('Floor');  
}
}
//bg.setName(b.id);
//entityNameCounter2++;
entList2.push(bg);
 }

    });  //lhon
});
}




function myJump2(entt,xff,yff,act){
  console.log('clear');
   var wasTriggered = false;
  entt.addComponent('Twoway');
  entt.twoway(200);

     Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
     
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
    Crafty.viewport.centerOn(entt,0); 


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
                          else if(stopTestF2==true){
                 entt.antigravity();
                   clearInterval(myVar);
                    var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:act.stopTime,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                    buf2.push(ee);
                       
                }
               
            }, 10);

}

function myTimerTest2() {
  if(stopTestF2==false&&theEndf2==false){///
    if(buf2.length>0){///
//for(var w=0;w<buf.length;w++){
 //countAction--;
 test2(buf2[0]); ///

 buf2.shift();///

//}
}///


    if(document.getElementById("timer").innerHTML==actionA2[actionA2.length-1].stopTime){
     
      theEndf=true;
     // countAction=0;
    


   
   


document.getElementById("pausee2").style.display="none";//?????
document.getElementById("playd").style.display="inline-block";//?????

      clearInterval(myVarT2);///

    }


  for(var i=0;i<actionA2.length;i++){
  if(actionA2[i].startTime==document.getElementById("timer").innerHTML){

    test2(actionA2[i]);
  }
  if(txts2[0]!="empty"){

        for( var h=0;h<txts2.length;h++){
     // alert(txts[h].sT+"/"+document.getElementById("timer2").innerHTML);
      if(txts2[h].sT==document.getElementById("timer").innerHTML){
       // alert("hi it is text know");
        document.getElementById('txt-sp').style.display="inline-block";

         document.getElementById('wn').innerHTML=txts2[h].txt;
      }
    }
  }
}
 if(handredMSecT2==10){
      handredMSecT2=0;
      counterST2++;

    }

    //var d = new Date();
    if(counterST2==60){
    counterMT2++;
    if(counterMT2>9){
       minformT2=counterMT2;
    }
    else{
      minformT2="0"+counterMT2;
    }
    counterST2=0;
    secfromT2="00"
    }
    else if (counterST2>9){
      secfromT2=counterST2;
    }
    else {
      secfromT2="0"+counterST2;
    }
    document.getElementById("timer").innerHTML = minformT2+":"+secfromT2+":"+handredMSecT2;
  handredMSecT2++;

}
}


function startTest2(){
  
  
  /////////////////////////////////////////////action///////////////////////////////////
   document.getElementById('txt-sp').style.display="none";
  counterST2=0;
 counterMT2=0;
  handredMSecT=0;///
 secfromT2="00";
 minformT2="00";
  buf2.length=0;///
   theEndf2=false;///
   stopTestF2=false;///
 if(stopTestF2==false){
   myVarT2 = setInterval(myTimerTest2 ,100);
 }

 if(stopTestF2==true){
   clearInterval(myVarT2);
 }
//var actArrTime=[];


}

function test2(act){

  if(stopTestF2==false){
var index=0;

for(var j=0;j<entList2.length;j++){
  //alert("id="+act.id);
   if(act.id==Number(entList2[j].getName())){
    //alert("id="+act.id);
 index=j;
 break;
   }

}


//var amount=findTimeAmount(act.startTime,act.stopTime);
switch(act.action){
  case 'j':
  switch(act.keyType){
   case Crafty.keys.LEFT_ARROW:
  leftMove2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
   case Crafty.keys.RIGHT_ARROW:
   rightMove2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
   case Crafty.keys.UP_ARROW:
   myJump2(entList2[index],act.xf,act.yf,act);
   break;



  }

  break;
 case 'f':
 //entList2[index].gravityConst(750);
  switch(act.keyType){
   case Crafty.keys.LEFT_ARROW:
     leftMoveF2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
   case Crafty.keys.RIGHT_ARROW:
   rightMoveF2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
   case Crafty.keys.UP_ARROW:
   upMove2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
    case Crafty.keys.DOWN_ARROW:
   downMove2(act.stopTime,act.xf,act.yf,entList2[index],act);
   break;
 }
  break;
   case 'g':
  
  break;
   case 'd':
entList2[index].visible=false;

  
  break;
   case 'a':
  entList2[index].visible=true;
  break;

}


 }

}




function findTimeAmount2(startTime,endTime){
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
function leftMove2(stopT,xff,yff,entt,act){
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
                          else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }

               
            }, 10);

     
      
  


}


function rightMove2(stopT,xff,yff,entt,act){
   //var count=amount;
      
       var myVar = setInterval(function () {
        Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
     //Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
   Crafty.viewport.centerOn(entt,0); 
                 console.log("rightMovee");
                 entt.x+=2.7;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.x>=xff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
                           else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }
               
            }, 10);
  
     }

function upMove2(stopT,xff,yff,entt,act){
      
       var myVar = setInterval(function () {
        Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
     //Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
    Crafty.viewport.centerOn(entt,0); 
                 console.log("rightMovee");
                 entt.y-=1.3;
              entt.x+=1.5;
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML||entt.y<=yff&& entt.x>=xff) {
                    clearInterval(myVar);
                   
                }
                                 else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }
               
            },10);


}

function downMove2(stopT,xff,yff,entt,act){
      
       var myVar = setInterval(function () {
        Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
    // Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
    Crafty.viewport.centerOn(entt,0); 
                 console.log("rightMovee");
                 entt.addComponent("gravity");
                 entt.gravityConst(1000);
                 entt.y+=2;
                entt.x+=1.5;
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.y>=yff&&entt.x>=xff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
                           else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }
               
            }, 10);


}



     function scrollAct2(){
      var scroll=document.getElementById('scroll');

      var st = scroll.pageXOffset ||scroll.scrollLeft; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       console.log("scroll pos"+st);
       var am=lastScrollTop-st;
       lastScrollTop = st;
        movetoRight(am);
   
     }


function leftMoveF2(stopT,xff,yff,entt,act){
  // var count=amount;
   
       var myVar = setInterval(function () {
        Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
     //Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
    Crafty.viewport.centerOn(entt,0); 
                 console.log("leftMovee");
                entt.x-=2;
              
              //  count = count - 1;
                if (stopT==document.getElementById("timer").innerHTML||entt.x<=xff ) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
                                 else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }
               
            }, 10);


}


function rightMoveF2(stopT,xff,yff,entt){
   //var count=amount;
      
       var myVar = setInterval(function () {
        Crafty.viewport.width=wx;
     Crafty.viewport.height=wy;
    
     Crafty.viewport.clampToEntites=false;
     //entt.addComponent("Solid");
     //Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone",function(){
    Crafty.viewport.follow(entt,0,0);
    });
    Crafty.viewport.centerOn(entt,0); 
                 console.log("rightMovee");
                 entt.x+=2;
              
               // count = count - 1;
               if (stopT==document.getElementById("timer").innerHTML ||entt.x>=xff) {
                  // console.log("add gravity");
                  // selectedEntity.gravity();
                    clearInterval(myVar);
                   
                }
                              else if(stopTestF2==true){
                  clearInterval(myVar);
                      var ee=actionInfo({
                                  x:entt.x,
                                  y:entt.y,
                                  xf:xff,
                                  yf:yff,
                                  h:selectedEntity.h,
                                  w:selectedEntity.w,
                                 //src:selectedEntity.__image,
                                   id:entt.getName(),
                                   action:act.action ,
                                   startTime:document.getElementById("timer").innerHTML,
                                   stopTime:stopT,
                                   keyType:act.keyType,
                                   speed:200

                                               });
                      buf2.push(ee);
                       
                      


                }
               
            }, 10);


     }

//console.log("len="+actionA2.length);
function startStory(){
   document.getElementById("playd").style.display="none";
     document.getElementById("pausee2").style.display="inline-block";
     startTest2();

}

function pausee2(){
  console.log("pause2");
  stopTestF2=true;
   document.getElementById("playd").style.display="inline-block";
     document.getElementById("pausee2").style.display="none";

}