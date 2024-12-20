import {useState}  from 'React'
import './App.css'
import ImageEditor from './ImageEditor'
function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <div className='count-app'>
      <h1 className='count-disp'>{count}</h1>
      <div className="count-body">
        <button className='count-btn' onClick={()=>{setCount(count+1)}}>Increment</button>
        <button className='count-btn' onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button className='count-btn' onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    </div>
    <ImageEditor/>
    </>
  )
}

export default App