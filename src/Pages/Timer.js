import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(59)
  useEffect(() => {
    if(count > 0)
    setTimeout(() => {
        setCount(count - 1);
    }, 1000);
    if(count === 0){
        setCount('00')
    }
    
  }, [count]);
    

    return (
        <div>
      {count}
    </div>
    )
}

export default Timer;