import React from 'react';
import axios from 'axios';

function UserList() {
  const controlLED = async (command) => {
  try {
    const res = await axios.post(`http://192.168.1.174/control`, 
      { cmd: command },
      { 
        headers: { 
          'Content-Type': 'text/plain' // ใช้ text/plain จะช่วยลดปัญหา CORS ในมือถือได้ดีกว่า
        },
        timeout: 5000 // ถ้า 5 วินาทีบอร์ดไม่ตอบ ให้ Error ทันที
      }
    );
    console.log("บอร์ดตอบกลับมาว่า:", res.data);
  } catch (err) {
    console.error("เชื่อมต่อไม่ได้:", err.message);
  }
};

  return (
    <div className="flex gap-4 p-10 justify-center">
      <button 
        onClick={() => controlLED('on')} 
        className='bg-green-500 active:scale-95 px-6 py-3 rounded-full text-white font-bold shadow-md'
      >
        ON
      </button>

      <button 
        onClick={() => controlLED('off')} 
        className='bg-red-500 active:scale-95 px-6 py-3 rounded-full text-white font-bold shadow-md'
      >
        OFF
      </button>
    </div>
  );
}

export default UserList;