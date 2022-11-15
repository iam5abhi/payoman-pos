import { React, useState,useEffect } from 'react'
import axios from 'axios'; 
import BaseUrl from '../config/BaseUrl';



const UserForm = (props) => {
  const [SubmitData,setSubmitData]=useState({
    Phone_Number:"",   Guest_Name:"",  Email:"",   Gender:"",  
    GSTIN:"",  DOB:"",   Anniversary_Date:"", Address:"",
    items:[],
     TableNumber:'',  Totalamount:'',
    })
    props.getFuntionChild(SubmitData)
    const[users,setUsers]=useState()
    const [searchData,setSearchData]=useState()
    const [displayData,setDisplayData]=useState()
    
    let inputHandler = (e) => {
      setSubmitData((pre)=>({
        ...pre,
        [e.target.name]:e.target.value,
        items:users.tableBilling.items, TableNumber:users.tableBilling.TableNumber,  Totalamount:users.tableBilling.Totalamount
      }))
     };
    const searchSubmit =()=>{
       setDisplayData(searchData)
       setSearchData()
    }
    useEffect(()=>{
        axios.get(`${BaseUrl.url}/api/v2/Billing/${props.id}`,
        ).then((res)=>{
            setUsers(res.data)
        }).catch((err)=>{
           console.log(err.message)
        });
      },[])
  return (
          <>
            <form className="row UserForm">
              <div className="col-sm-6">
                  <label htmlFor="inputnumber4" className="form-label">Phone Number</label>
                   <input className="form-control" name="Phone_Number" id="inputNumber4" onChange={inputHandler} 
                   value={!displayData?null:displayData.number} autoComplete="true"
                   /> 
                   <ul className='ulstyle'>
                    {!searchData?null:searchData.map((item) => (
                    <li key={item.id} onClick={searchSubmit}>{item.number} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.name}</li>
                    ))}
                </ul> 
               </div>
              <div className="col-sm-6">
                  <label htmlFor="inputname4" className="form-label">Guest Name</label>
                  <input type="text" name="Guest_Name" onChange={inputHandler} className="form-control" id="inputName4" 
                  value={!displayData?null:displayData[0].name}
                  />
              </div>
              <div className="col-sm-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" name="Email" onChange={inputHandler} className="form-control" id="inputEmail4" 
                  value={!displayData?null:displayData[0].email} 
                  />
              </div>
              <div className="col-sm-6">
              <span className='mb-5'>Gender</span><br/>
                <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-dark btn-sm" htmlFor="success-outlined" style={{fontSize:"10px"}}>&nbsp; Male &nbsp;</label> &nbsp; 
                <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                <label className="btn btn-outline-dark btn-sm" htmlFor="danger-outlined" style={{fontSize:"10px"}}>Female</label> &nbsp; 
                <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                <label className="btn btn-outline-dark btn-sm" htmlFor="danger-outlined" style={{fontSize:"10px"}}>Other</label>
              </div>
              <div className="col-sm-8">
                  <label htmlFor="inputnumber4" className="form-label">GSTIN</label>
                  <input type="text" name="GSTIN" onChange={inputHandler} className="form-control" id="inputNumber4" />
              </div>
              <div className="col-sm-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                  </select>
              </div>
              <div className="col-sm-6">
              <label htmlFor="inputdate4" className="form-label">DOB</label>
                  <input type="date" name="DOB" onChange={inputHandler} className="form-control" id="inputDate4" 
                  />
              </div>
              <div className="col-sm-6">
                  <label htmlFor="inputtext4" className="form-label">Anniversary Date</label>
                  <input type="date" name="Anniversary_Date" onChange={inputHandler} className="form-control" id="inputText4" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Address</label>
                <textarea className="form-control" name="Address" onChange={inputHandler}  id="exampleFormControlTextarea1" rows={2} defaultValue={""} />
              </div>
          </form>
          
    </>
  )
}

export default UserForm;
