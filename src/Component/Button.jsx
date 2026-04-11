import { useState } from 'react'
import './Button.css'

const DashboardButton = () => {
  const [pressed, setPressed] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='mybutton'>
      <button 
      className="dashboard-btn"
    >
      <h1>กด</h1>
     </button>
     <button 
      className="dashboard-btn"
    >
      <h1>กด</h1>
      </button>
      <button 
      className="dashboard-btn"
    >
      <h1>กด</h1> 
      </button> 
    </div>
    </>
  );
};

export default DashboardButton;