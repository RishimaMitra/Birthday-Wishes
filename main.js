const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
ctx=canvas.getContext("2d");

 var x= document.getElementById("myAudio");
fabric.Image.fromURL(get_Image, function (Img )),
function  new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function (Img){
        block_image_object=Img;
        block_image_object.sclaleToWidth(700);
        block_image_object.scaleToHeight(500);
        block_image_object.set(
            {
                top:0
                

            }
        );
        canvas.add(block_image_object);
    });
	
};

function playSound(){
x.play();
}