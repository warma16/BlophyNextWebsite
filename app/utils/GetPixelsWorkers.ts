// header-color-worker.ts
const analyzeImageData = (imageData: ImageData, sampleSize: number) => {
    const data = imageData.data;
    let totalGray = 0;
    const pixelStep = Math.floor(data.length / (4 * sampleSize)); //间隔采样
  
    for (let i = 0; i < data.length; i += 4 * pixelStep) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      totalGray += r * 0.3 + g * 0.59 + b * 0.11;
    }
    return totalGray;
  };
  
  self.onmessage = async (event) => {
    console.log("worker recieved")
    const { imageUrl, sampleSize } = event.data;
    console.log(imageUrl, sampleSize)
    const fullUrl=`${location.origin}/${imageUrl}`
    
    try {
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const bitmap = await createImageBitmap(blob);
      
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext('2d')!;
      
      ctx.drawImage(bitmap, 0, 0);
      const imageData = ctx.getImageData(0, 0, bitmap.width, bitmap.height);
      const averageGray = analyzeImageData(imageData, sampleSize);
      
      self.postMessage({ averageGray });
    } catch (error) {
      self.postMessage({ error: true });
    }
  };