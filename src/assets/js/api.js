

 function sendRequest_id() {
     var txtRes ,parser, xmlDoc;
     var txtURL;
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText) ;
             txtRes=this.responseText;
         ////    parser = new DOMParser();
           ////  xmlDoc = parser.parseFromString(txtRes,"text/xml");
            //console.log(xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue);
           // document.getElementById('demo').innerHTML= xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue;
           //// txtURL= xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue;
document.getElementById('backgroundT').innerHTML= txtRes;

         }
         else{
          console.log("*****************");
          console.log(this.responseText) ;

          console.log("errrrror");

         }
     };
     xhttp.open("POST", "http://lunapic.com/editor/?action=transparent&url=http://lunapic.com/s.jpg", false);
    // delay(150);
     xhttp.send();
      
     return txtURL;

 }



   


var testao = function () {




sendRequest_id();

  /////////////////////////////////////////////////////////////////////////////////////////////////////



//     console.log(document.getElementById('userInfo').innerHTML);

//   // var img=document.getElementById('imgName').innerHTML;
//   var canvas = document.createElement("canvas");
//   var imgEle=document.getElementById("img_id");
  
//     var img=getBase64Image(imgEle);

// console.log(img);

// var imgUrl=uploadImage('https://www.w3schools.com/tags/smiley.gif');////////////////////
// //uploadImage('https://www.w3schools.com/html/img_logo.gif');
// //'https://i.imgur.com/5KvwSrG.jpg';
// //https://www.w3schools.com/html/img_logo.gif

// /*
// var imgUrl=uploadImage(img);
// if(imgUrl==0){
//     document.getElementById('state').innerHTML= ("error cant upload image");
//     return;

// }
// */
    
//      var hash_data=doneHash(imgUrl);
//    console.log(hash_data);
   
//      var KEY='4d4169b90ed429788e3f4b19acf28f969';

//      var DATA='<image_process_call><image_url>'+imgUrl+'</image_url><methods_list><method><name>cartoon</name></method></methods_list></image_process_call>';
//     //
//     //
//     console.log("hi");
//    console.log( " http://opeapi.ws.pho.to/addtask/?app_id=42c0eccf890af8f83f6647211a863e14&key=4d4169b90ed429788e3f4b19acf28f969&sign_data="+hash_data+"&data="+DATA);
// var finalURL
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText) ;
//            txtRes=this.responseText;
//            parser = new DOMParser();
//            xmlDoc = parser.parseFromString(txtRes,"text/xml");
//            console.log(xmlDoc.getElementsByTagName("request_id")[0].childNodes[0].nodeValue);
//           finalURL=  sendRequest_id(xmlDoc.getElementsByTagName("request_id")[0].childNodes[0].nodeValue);
//           console.log(finalURL);
//            document.getElementById('img_res').src= finalURL;


//         }


//     };
//     xhttp.open("POST", " http://opeapi.ws.pho.to/addtask/?app_id=42c0eccf890af8f83f6647211a863e14&key=4d4169b90ed429788e3f4b19acf28f969&sign_data="+hash_data+"&data="+DATA, false);
//     xhttp.send();
//    return txtRes;
// }



//  function sendRequest_id( req_id) {
//      var txtRes ,parser, xmlDoc;
//      var txtURL;
//      var xhttp = new XMLHttpRequest();
//      xhttp.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              console.log(this.responseText) ;
//              txtRes=this.responseText;
//          ////    parser = new DOMParser();
//            ////  xmlDoc = parser.parseFromString(txtRes,"text/xml");
//             //console.log(xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue);
//            // document.getElementById('demo').innerHTML= xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue;
//            //// txtURL= xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue;
//  parser = new DOMParser();
//        xmlDoc = parser.parseFromString(txtRes,"text/xml");
           
//             txtURL= xmlDoc.getElementsByTagName("result_url")[0].childNodes[0].nodeValue;

//          }
//          else{
//           console.log("*****************");
//           console.log(this.responseText) ;

//           console.log("errrrror");

//          }
//      };
//      xhttp.open("GET", "http://opeapi.ws.pho.to/getresult?request_id="+req_id, false);
//     delay(150);
//      xhttp.send();
      
//      return txtURL;

//  }
//  function doneHash(img2) {
//   // document.getElementById('demo').innerHTML= "inside hash";
//     var mvalue;
//      var xhttp = new XMLHttpRequest();
//      if(xhttp){
//         // xhttp.withCredentials = true;
//          console.log("**************");
//          xhttp.onreadystatechange = function () {
//              if (this.readyState == 4 && this.status == 200) {
//                  //console.log(this.responseText);
//                  mvalue=this.responseText;
//                  console.log(mvalue);
//              // document.getElementById('demo').innerHTML= (mvalue);

//              }
//              else{
// //document.getElementById('demo').innerHTML= (this.responseText);
//              }
//          };
//          xhttp.open("GET", "http://192.168.1.113:80/test/index.php?img="+img2,false);

//          xhttp.send();
//      }
//      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
//       return mvalue;
//      ////////////////////////////////

//  }
 


//  ////////////////////////////////////////upload image //////////////////////////////////////////
//  function uploadImage(img){
//  //document.getElementById('state').innerHTML= ("inside upload");
//  console.log("inside upload img");
// var myObj;
// var URLVal;
//      var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
     
// //document.getElementById('state').innerHTML= (this.responseText);

//     myObj= JSON.parse(this.responseText);
//    // console.log(myObj.data.link);
//  // document.getElementById('state').innerHTML= (myObj.data.link);
//   URLVal=myObj.data.link;
// console.log(URLVal);
//     }
//     else{
//       //document.getElementById('state').innerHTML= (this.responseText);
//       console.log(this.responseText);
//       URLVal=0;

//     }
//   };
//   xhttp.open("POST", "https://api.imgur.com/3/image", false);
//   xhttp.setRequestHeader("Content-type", "multipart/form-data");
//   xhttp.setRequestHeader("Authorization","Client-ID ddb775eae572fb7");
//   // xhttp.setRequestHeader( "Authorization","Bearer 73d8b2fd7b1ff964c9fc81c609d6efd7e9f3c940");


//   xhttp.send(img);
//  return URLVal;
//  }

//  function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   var dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

//  function store(){

//       alert("hi");
      

//    var config = {
//     apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
//     authDomain: "myapp-b575c.firebaseapp.com",
//     databaseURL: "https://myapp-b575c.firebaseio.com",
//     projectId: "myapp-b575c",
//     storageBucket: "myapp-b575c.appspot.com",
//     messagingSenderId: "68982032969"
//   };
//   firebase.initializeApp(config);



//   var database = firebase.database();// Get a reference to the database service

// writeUserData(document.getElementById('userInfo').innerHTML);
 
//      }

//      function writeUserData(userId) {
//       var imgN=guid();

//   firebase.database().ref('userImg').child(userId).push().set({
    
//     imgN: document.getElementById('img_res').src
   
//   });


  
// // readData(userId);
// }

// // function readData(userId){
// //   return firebase.database().ref('/userImg/' + userId).once('value').then(function(snapshot) {
// //   var imgUrl = (snapshot.val() && snapshot.val().back) || 'Anonymous';
// //   console.log(imgUrl);
// // });
// // }

// // function savePhoto(){
// //    var config = {
// //     apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
// //     authDomain: "myapp-b575c.firebaseapp.com",
// //     databaseURL: "https://myapp-b575c.firebaseio.com",
// //     projectId: "myapp-b575c",
// //     storageBucket: "myapp-b575c.appspot.com",
// //     messagingSenderId: "68982032969"
// //   };
// //   firebase.initializeApp(config);

// //     var url = "https://i.imgur.com/mlFZe3w.gif";
// //     // First, download the file:
// //     var xhr = new XMLHttpRequest();
// //     xhr.responseType = 'blob';
// //     xhr.onload = function(event) {
// //     var blob = xhr.response;

// //     // Get the current user:            
// //     var user = firebase.auth().currentUser;
// //    // if (user != null) {
// //     var userid =document.getElementById('userInfo').innerHTML;
// //     // user.uid; 

// //     // Define where to store the picture:

// //     var imgName = guid();
// //     var picRef = firebase.storage().ref(userid + "/"+imgName);

// //     // Store the picture:
// //     picRef.put(blob).then(function(snapshot) {
// //     console.log('Picture uploaded!');

// //     // Now get image from storage and display in div...
// //     // picRef.getDownloadURL().then(function(pic) {
// //     //     var userspic = pic;
// //     //    // document.getElementById('picTestImage').src = userspic;
// //     //    console.log(userspic);

// //     // }).catch(function(error) {
// //     //     console.log("There was an error: "+error);
// //     // });

// //      });
// //    // }else{
// //    //     console.log("We weren't able to confirm there is a current user, something went wrong.");
// //   //  }
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //   };
// //   xhr.open('GET',  uploadImage(document.getElementById('img_res').src));
// //   xhr.send();
// // }


// function guid() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   }
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }

// function delay(x){
// for(var i=0;i<x;i++){
// console.log("");
// }


}




