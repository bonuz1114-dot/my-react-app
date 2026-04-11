import { useState } from 'react'
import './Button.css'

const DashboardButton = () => {
  const [pressed, setPressed] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <>
    <button 
      className="mybutton"
      onClick={() => {setPressed(!pressed) ;setCount(count+1)}}
    >
      <h1>กด</h1>
     </button>  
    </>
  );
};

export default DashboardButton;