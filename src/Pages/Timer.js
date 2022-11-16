// import React from 'react'
// import { useState, useEffect } from 'react';

// const Timer = () => {
//     const [count, setCount] = useState(0)
//   useEffect(() => {
//     if(count > 0)
//     setTimeout(() => {
//         setCount(count + 1);
//     }, 1000);
//     if(count === 0){
//         setCount('00')
//     }
    
//   }, [count]);
    

//     return (
//         <div>
//       {count}
//     </div>
//     )
// }

// export default Timer;

import React, { useState } from 'react'

const Timer = () => {
	// For digital Timer
	let time = new Date().toLocaleTimeString();
	let [ctime, setCTime] = useState();
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCTime(time);
	}
	setInterval(updateTime, 1000);
	return (
		<>
        <div> {ctime}</div>
		</>);
}
export default Timer;