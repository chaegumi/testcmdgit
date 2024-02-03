// JavaScript Document
function ImageAutoSize(ImgD,xWidth,xHeight)
{
	var image=new Image();
	var thewidth=xWidth;
	var theheight=xHeight;
	image.src=ImgD.src;	
	
	ImgD.style.marginTop="0px";	

	if(image.width>0 && image.height>0)
	{
		if(image.width<=thewidth && image.height<=theheight)
		{
			ImgD.width=image.width;
			ImgD.height=image.height;
			ImgD.style.marginTop=((xHeight-image.height)/2)+"px";
			return true;
		}
		if(image.width/image.height>= thewidth/theheight) //横构图
		{
			if(image.width>thewidth)
			{
				ImgD.width=thewidth;
				ImgD.height=(image.height*thewidth)/image.width;				
				ImgD.style.marginTop=((xHeight-(image.height*thewidth)/image.width)/2)+"px";
			}
			else
			{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
		else //竖构图
		{
			if(image.height>theheight)
			{
				ImgD.height=theheight;
				ImgD.width=(image.width*theheight)/image.height;				
			}
			else
			{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
}
