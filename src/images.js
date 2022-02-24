const makeImage = (url, width = 250) => {
  const image = document.createElement('img')
  image.src = url
  image.width = width;

  return image
}

export default makeImage
