import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseUrl from '../config/BaseUrl'



const OrdersDetails = () => {
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
        {/* --------------all order data start--------------*/}
          <div>
            <div className="container">
                <h6 className="pt-4">Orders Details</h6>
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
                                  orderData.map((data,id)=>{
                                   return(
                                    <>
                                    <tr key={data._id}>
                                    <th scope="row">{id+1}</th>
                                    <td>{data.Guest_Name}</td>
                                    <td>{data.Phone_Number}</td>
                                    <td>{data.Totalamount}</td>
                                    <td><button type="button" class="btn btn-success" style={{height:"28px",fontSize:"12px"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span>Print</span></button></td>
                                    </tr>
                                    </>
                                  )
                                })}
                            </tbody>
                    </table>   
                </div>
            </div>
         </div>
          {/* --------------all order data end--------------*/}

          {/* --------------print order data start--------------*/}
        <div>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="container">
            <div className="card " style={{background: '#cecece38'}}>
            <div className="card-header bg-white ">
            Order Details 
            </div>
            <div className="card-body" style={{background: '#edededad'}}>
            <div className="table-responsive-sm">​
                <table className="table table-borderless bg-white shadow-sm rounded">
                <thead className>
                    <tr className style={{background: 'white'}}>
                    <th scope="col">Order Summary</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" className="text-end">Running Since:-00:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Order Type</td>
                    <td className="text-end">xyz</td>
                    <td className="text-start">Table Number</td>
                    <td className="text-end">xyz</td>
                    </tr>
                    <tr>
                    <td>Order Number</td>
                    <td className="text-end">xyz</td>
                    <td className="text-start">Waiter Name</td>
                    <td className="text-end">xyz</td>
                    </tr></tbody>
                </table>
                <table className="table table-borderless bg-white shadow-sm rounded">
                <thead>
                    <tr className style={{background: 'white'}}>
                    <th scope="col">Guest Details</th>
                    <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="Order Type">Guest Name</th>
                    <th className="text-center" />
                    </tr>
                    <tr>
                    <th className="Order Type">Guest Number</th>
                    <th className="text-center" />
                    </tr></tbody>
                </table>​
                <table className="table table-borderless bg-white shadow-sm rounded">
                <thead>
                    <tr className style={{background: 'white'}}>
                    <th scope="col">Items Details</th>
                    <th scope="col" />
                    <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="Order Type">Item Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-end">Price</th>
                    </tr>
                    <tr>
                    <td>XYZ</td>
                    <td className="text-center">xyz</td>
                    <td className="text-end">549548</td>
                    </tr><tr className="border border-b" style={{background: 'white'}}>
                    <th>Total</th>
                    <td className="text-center" />
                    <th className="text-end">Rs.100</th>
                    </tr></tbody>
                </table>
            </div>
            </div>
           </div>
          </div>
        </div>
        </div>
        {/* --------------print order data start--------------*/}
        </>
    )
}

export default OrdersDetails
