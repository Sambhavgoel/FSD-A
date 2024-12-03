import React, {useState} from 'react'
import pic from './image/katie-azi-fDxL9HqjiTc-unsplash.jpg';
import './imageApp.css'

const ImageApp = () => {

    const [height,setHeight]=useState(200);
    const [width,setWidth]=useState(200);
    const [rotation, setRotation] = useState(0); 
  return (
    <div className='disp'>
        <div className='img'>
            <img src={pic} style={{
                height:height,
                width:width,
                transform:`rotate(${rotation}deg)`,
            }} alt="" />
        </div>
        <div className="panel">
        </div>
            <button onClick={()=>{setHeight(height+10)}}>Increase Height</button>
            <button onClick={()=>{setHeight(height-10)}}>Decarese Height</button>
            <button onClick={()=>{setWidth(width+10)}}>Increase Width</button>
            <button onClick={()=>{setWidth(width-10)}}>Decrease Width</button>
            <button onClick={()=>{setRotation(rotation+10)}}>Right Rotation</button>
            <button onClick={()=>{setRotation(rotation-10)}}>Left Rotation</button>
    </div>
    
  )
}

export default ImageApp