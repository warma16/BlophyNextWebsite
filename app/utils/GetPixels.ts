

import { useState, useEffect, useRef } from "react";
const analyzeImageData = (imageData:ImageData) => {
    // 计算图像的平均颜色
    let data=imageData.data;
    let pixels:Array<string>=[];
    for (let i = 0; i < data.length; i += 4) {
        let pixel:string;
      let r:number = data[i];
      let g:number = data[i + 1];
      let b:number = data[i + 2];
      pixel=`${r},${g},${b}`;
      pixels.push(pixel);
    }
    return pixels;

}
const HeaderColorChanging = (imageUrl:string,headerRef:React.RefObject<HTMLElement>,canvasRef:React.RefObject<HTMLCanvasElement>) => {
    const [imageColor, setFontColor] = useState("");
    const defaultColor="text-gray-800"
    useEffect(() => {
      console.log(imageUrl)
      if (!canvasRef.current || !imageUrl) return;
  
      // 创建2D渲染上下文
      const ctx = canvasRef.current.getContext("2d");
      // 加载图片
      const img = new Image();

            // 图片加载失败时设置为空字符串
        let imgOnerror = () =>{ 

                setFontColor(defaultColor)
            };
      let imgOnload = () => {
        console.log("hello")
        if(!canvasRef.current || !ctx) return;
        // 设置canvas尺寸与图片相同
        canvasRef.current.width = img.width;
        canvasRef.current.height = img.height;

  
        // 将图片绘制到canvas上
        ctx.drawImage(img, 0, 0, img.width, img.height);
  
        // 获取图片的像素数据
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        // 处理像素数据
        const pixels=analyzeImageData(imageData)
        //获取header大小
        const headerHeight=headerRef.current?headerRef.current.clientHeight:0;
        const headerWidth=headerRef.current?headerRef.current.clientWidth:0;
        // 算出像素个数
        const needToFillPixels=headerHeight*headerWidth;
        let needPixels=[]
        for(let i=0;i<needToFillPixels;i++){
            needPixels.push(pixels[i])
        }
        // 检测平均灰度
        const averageGray = needPixels.reduce((acc, pixel) => {
          const [r, g, b] = pixel.split(',').map(Number);
          return acc + (r*0.3 + g*0.59 + b*0.11);
        },0)
        console.log(`${imageUrl}:${averageGray}`)
        // 根据灰度设置字体颜色,在过黑的时候设置亮色
        if (averageGray < 700000) {
          setFontColor("text-zinc-50");
          return ;
        }
        setFontColor(defaultColor);
      };
      img.crossOrigin = "anonymous"; // 处理跨域问题
      
      img.addEventListener('load' , imgOnload , false);
      img.addEventListener('error' , imgOnerror , false);
      console.log("loading img begin")

      img.src = imageUrl;

      console.log("load img close")
      

    }, [imageUrl]);
  
    return imageColor;
  };

export default HeaderColorChanging;