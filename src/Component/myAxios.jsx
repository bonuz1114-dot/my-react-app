import React from 'react';
import axios from 'axios';

function UserList() {
  const controlLED = async (command) => {
    try {
      // ระบุ Content-Type เป็น text/plain เพื่อให้ server.arg("plain") ใน Arduino รับค่าได้แน่นอน
      const res = await axios.post(`http://192.168.1.174/control`, 
        { cmd: command },
        { headers: { 'Content-Type': 'text/plain' } }
      );
      
      console.log("ตอบกลับจากหุ่นยนต์:", res.data.status);
    } catch (err) {
      console.error("เชื่อมต่อหุ่นยนต์ไม่ได้! ตรวจสอบ WiFi หรือ IP บอร์ด");
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