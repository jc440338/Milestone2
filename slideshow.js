
var myImage=document.getElementById("myPhoto");

var imageArray=["TCMC Images Docs/musos/Img1.jpg","TCMC Images Docs/musos/img2.jpg","TCMC Images Docs/musos/img3.jpg","TCMC Images Docs/musos/img4.jpg"];

var imageIndex=0;

function changeImage () {
	"use strict";
	  myImage.setAttribute("src",imageArray [ imageIndex ]);
	  imageIndex++;
	  if (imageIndex>=imageArray.length) {
	       imageIndex=0;
	  }
}

var internalHandle = setInterval(changeImage,2000);

myImage.onclick=function() {
	"use strict";
	  clearInterval(internalHandle);
};
		  
		  
	