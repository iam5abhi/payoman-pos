// import { React, useState,useEffect } from 'react'
// import axios from 'axios';

// function SearchData(props) {
//     const[users,setUsers]=useState()
//     //create a new array by filtering the original array
//     const filteredData = !users?null:users.filter((el) => {
//         //if no input the return the original
//         if (props.input === '') {
//             return el;
//         }
//         //return the item which contains the user input
//         else {
//             return el.number.toLowerCase().includes(props.input)
//         }
//     })
//     useEffect(()=>{
//         axios.get("http://localhost:3001/users",
//         ).then((res)=>{
//             setUsers(res.data)
//         }).catch((err)=>{
//            console.log(err.message) 
//         });
//       },[])
//     return (
//         <ul>
//             {filteredData.map((item) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     )
// }

// export default SearchData