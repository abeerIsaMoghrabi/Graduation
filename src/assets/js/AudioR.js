// var s;
// var SN;
// var StoryObj2=function(p){
// var that={};

// //that.actionAEnt=p.actionAEnt;
// that.actionA=p.actionA;
// that.objList=p.objList;
// //that.len=p.len;
// that.natu=p.natu;
// that.textArr=p.textArr;
// return that;
// }

// function activeS(){

//    SN=document.getElementById('story-label').innerHTML;
//   var config = {
//     apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
//     authDomain: "myapp-b575c.firebaseapp.com",
//     databaseURL: "https://myapp-b575c.firebaseio.com",
//     projectId: "myapp-b575c",
//     storageBucket: "myapp-b575c.appspot.com",
//     messagingSenderId: "68982032969"
//   };
//   firebase.initializeApp(config);
//   //firebase.auth().onAuthStateChanged(function(user) {
//  //if(user) {

  

//       readd();

//       var delayInMilliseconds = 3000000; //1 second

//      setTimeout(function() {
  
//    }, delayInMilliseconds);
      

// // }

//  //});

// }













// function readd(){
// //alert("read");
  
// var userId = document.getElementById('UI').innerHTML;

// var story = firebase.database().ref(userId).child(" "+SN+"/").on("value",function(snapshot) {
//     snapshot.forEach(function(data) {

//       s=new StoryObj({
   
//     actionA:data.val().StoryObj.actionA,
//     objList:data.val().StoryObj.objList ,
//     natu:data.val().StoryObj.natu ,
//      textArr:data.val().StoryObj.textArr,
//      isPublic:true,          

//       });
//     });
      
//   writew();
     
    
// });
// }

// function writew(){
//    var db =firebase.database().ref("publicS").child(" "+SN+"/").push({
//     StoryObj: s
//  });
// }







