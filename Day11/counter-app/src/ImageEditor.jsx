import{useState} from 'react'
import img from './assets/tolu-olarewaju-1TS19MwEUrw-unsplash.jpg'

function ImageEditor() {
    const [imgwidth,setImgwidth] = useState(300)
    const [imgheight,setImgheight] = useState(300)
  return (
    <>
        <div className="image-editor">
            <div className="image">
                <img src={img} style={{width : `${imgwidth}px` , height : `${imgheight}px`}} alt="" />
            </div>
            <div className="btns">
                <button className='incheight' onClick={()=>{setImgheight(imgheight+10)}}>Increase Height</button>
                <button className='decheight' onClick={()=>{setImgwidth(imgwidth+10)}}>Increase Width</button>

            </div>
        </div>
    </>
  )
}

export default ImageEditor