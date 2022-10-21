
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function (Img) {
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width); block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:block_y,
left:block_x
});
canvas.add(block_image_object);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		blockX = 100;
		new_image('rr1.png');
		console.log("e")
		window.addEventListener("keydown", mykeyDown);

	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("v");
		window.addEventListener("keydown", mykeyDown);
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log("a");
		window.addEventListener("keydown", mykeyDown);
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("r");
		window.addEventListener("keydown", mykeyDown);
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log("r");
		window.addEventListener("keydown", mykeyDown);
	}
	
}

