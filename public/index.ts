async function handleGetRandomImage(){
    try {
      //@ts-ignore
      const { data } = await axios.get("/api/images")
      console.log(data)
      const { imageSrc } = data
      renderImage(imageSrc)
      // const {imageSrc} = data
    } catch (error) {}
  }
  
  function renderImage(imageSrc){
    const root = document.querySelector(".root")
    const image = document.createElement("img")
    image.src = `${imageSrc}`
    root.appendChild(image)
    image.setAttribute("id", "img")
  }