import React, { useState, useEffect } from 'react'

// import './FileUploader.css'

function FileUploader() {
 const [images, setimages] = useState([]);
 const [imageurls, setimageurls] = useState([])

 useEffect(() => {
     if(images.length < 1) return;
     const newimageurls = [];
     images.forEach(image => newimageurls.push(URL.createObjectURL(image)));
     setimageurls(newimageurls)
     console.log(images)
 }, [images]);

 function onImageChange(e) {
     setimages([...e.target.files])
 }
 return(
     <div>
     <input type="file" multiple accept='image/*' onChange={onImageChange}/>
     {/* { imageurls.map(imageSrc => <img src={imageSrc} />)} */}
     
     </div>
 )
}

export default FileUploader