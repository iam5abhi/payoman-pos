import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseUrl from '../config/BaseUrl'



const Orders = () => {
    // const navigate = useNavigate()
    const [orderData,setOrderData]=useState()
    console.log(orderData,"orderData")

    // const TableHandler=(TableNumber)=>{
    //     navigate(`/menu/${TableNumber}`)
    // }
    useEffect(()=>{
        axios.get(`${BaseUrl.url}/api/v2/oders`,
        ).then((res)=>{
            console.log(res.data)
            setOrderData(res.data.data)
        }).catch((err)=>{
           console.log(err.message) 
        })
      },[])
  return (
        <>
          <div>
            <div className="container">
                <h6 className="pt-4">Orders</h6>
                <div className="row">  
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {!orderData?null:
                                  orderData.map((data)=>{
                                   return(
                                    <>
                                    <tr key={data._id}>
                                    <th scope="row">{data._id}</th>
                                    <td>{data.Guest_Name}</td>
                                    <td>{data.Phone_Number}</td>
                                    <td>{data.Totalamount}</td>
                                    <td><button type="button" class="btn btn-success" style={{height:"28px",fontSize:"12px"}}><span>Print</span></button></td>
                                    </tr>
                                    </>
                                  )
                                })}
                            </tbody>
                    </table>   
                </div>
            </div>
         </div>
        </>
    )
}

export default Orders
