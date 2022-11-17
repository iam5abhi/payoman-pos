import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BaseUrl from '../config/BaseUrl'



const CustomerDetails = () => {
    const [costmerData,setCostmerData]=useState()
    console.log(costmerData,"costmerData")

    
    useEffect(()=>{
        axios.get(`${BaseUrl.url}/api/v2/oders`,
        ).then((res)=>{
          let resData = res.data.data
            const ids = resData.map(o => o.Phone_Number)
            const filtered = resData.filter(({Phone_Number}, index) => !ids.includes(Phone_Number, index + 1))
            setCostmerData(filtered)
        }).catch((err)=>{
           console.log(err.message) 
        })
      },[])
  return (
        <>
        {/* --------------all order data start--------------*/}
          <div>
            <div className="container">
                <h6 className="pt-4">Costmer Details</h6>
                <div className="row">  
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Anniversary Date</th>
                                    <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {!costmerData?null:
                                  costmerData.map((data,id)=>{
                                   return(
                                    <>
                                    <tr key={data._id}>
                                    <th scope="row">{id+1}</th>
                                    <td>{data.Guest_Name}</td>
                                    <td>{data.Phone_Number}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.DOB}</td>
                                    <td>{data.Anniversary_Date}</td>
                                    <td>{data.Address}</td>
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
        </>
    )
}

export default CustomerDetails
