import { useState } from 'react'
import './Button.css'

const DashboardButton = () => {
  const [pressed, setPressed] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='flex flex-col items-center gap-4 w-full'>
      <button className="bg-red-600 hover:bg-amber-500 active:bg-amber-500 text-white font-medium py-6 px-6 rounded-full shadow-lg transition hover:scale-95 active:scale-95">
        เริ่มใช้งานเลย
      </button> 
      <button className="bg-red-600 hover:bg-amber-500 active:bg-amber-500 text-white font-medium py-6 px-6 rounded-full shadow-lg transition hover:scale-95 active:scale-95">
        เริ่มใช้งานเลย
      </button> 
      <button className="bg-red-600 hover:bg-amber-500 active:bg-amber-500 text-white font-medium py-6 px-6 rounded-full shadow-lg transition hover:scale-95 active:scale-95">
        เริ่มใช้งานเลย
      </button> 
    
    </div>
    </>
  );
};

export default DashboardButton;