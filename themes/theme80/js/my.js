$(document).ready(function() {
			
		
	if(document.getElementById("marquee_photo"))
	{
		var Marquee1 = new Marquee("marquee_photo");
		Marquee1.Direction = "left";
		Marquee1.Step = 1; 
		Marquee1.Width = 302; 
		Marquee1.Height = 68; 
		Marquee1.Timer = 20; 
		//Marquee1.DelayTime = 0;//间歇停顿延迟时间 默认为0 
		//Marquee1.WaitTime = 3000; //开始时的等待时间(默认或0为不等待,1000=1秒)
		Marquee1.ScrollStep = 53; 
		Marquee1.Start(); 
		
		//改变方向+加速
		$("#arrow_left").mouseover(function(){Marquee1.Direction=2});	
		$("#arrow_left").mouseout(function(){Marquee1.Step=Marquee1.BakStep});
		$("#arrow_left").mouseup(function(){Marquee1.Step=Marquee1.BakStep});
		$("#arrow_left").mousedown(function(){Marquee1.Step=Marquee1.BakStep+6});
		$("#arrow_right").mousedown(function(){Marquee1.Step=Marquee1.BakStep+6});
		$("#arrow_right").mouseover(function(){Marquee1.Direction=3});
		$("#arrow_right").mouseout(function(){Marquee1.Step=Marquee1.BakStep});
		$("#arrow_right").mouseup(function(){Marquee1.Step=Marquee1.BakStep});		
		
				
		hs.graphicsDir = '/js/highslide/graphics/';
		hs.align = 'center';
		hs.transitions = ['expand', 'crossfade'];
		hs.outlineType = 'rounded-white';
		hs.fadeInOut = true;
		/*
		hs.dimmingOpacity = 0.75;
		
		Add the controlbar*/
		hs.addSlideshow({
		/*slideshowGroup: 'group1',*/
		interval: 3000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
		  opacity: .75,
		  position: 'bottom center',
		  hideOnMouseOut: true
		}
		});
	}
	
	if(document.getElementById("hotPic"))
	{
		if($("#hotPic li").length>4)
		{
			var Marquee2 = new Marquee(["hotPic","hotPicUL"],2,2,772,180,20,0,1);
			
			//改变方向+加速
			$("#arrow_left2").mouseover(function(){Marquee2.Direction=2});	
			$("#arrow_left2").mouseout(function(){Marquee2.Step=Marquee2.BakStep});
			$("#arrow_left2").mouseup(function(){Marquee2.Step=Marquee2.BakStep});
			$("#arrow_left2").mousedown(function(){Marquee2.Step=Marquee2.BakStep+6});
			$("#arrow_right2").mousedown(function(){Marquee2.Step=Marquee2.BakStep+6});
			$("#arrow_right2").mouseover(function(){Marquee2.Direction=3});
			$("#arrow_right2").mouseout(function(){Marquee2.Step=Marquee2.BakStep});
			$("#arrow_right2").mouseup(function(){Marquee2.Step=Marquee2.BakStep});	
		}
	}
	
	
	$(".li_2").mouseover(function(){
		
		var thisid=$(this).attr("thisid");
		$(".li_3").hide();
		$(".for_"+thisid).show();
	
	});
	
	
	
	$("#left").bind("mouseout", function(event){
					
					if( !(this == event.relatedTarget) && !$(this).find(event.relatedTarget)[0])
					{
						$(".li_3").hide();
					} 
				});
	
	
			
});



function changeImage(bimg,simg)
{	
   $("#big_img").attr('src',simg); 
   $("#thumb_img").attr('href',bimg);
}


