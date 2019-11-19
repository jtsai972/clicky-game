function shuffleImages(imgArr) {
  for (let i = imgArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgArr[i], imgArr[j]] = [imgArr[j], imgArr[i]];
  }
  // console.log(imgArr);
  return imgArr;
}

// let images = shuffleImages(imageList);

export default shuffleImages;
// images;