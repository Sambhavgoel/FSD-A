import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marks from "./Marks.jsx"
import DisplayMarks from "./DisplayMarks.jsx"

createRoot(document.getElementById('root')).render(
  
    <>
        <App name={"Sambhav Goel"} email={"sambhavgoel@gmail.com"} phone={8989898989} />
        <DisplayMarks />
    </>
)

