import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseUrl from '../config/BaseUrl'
import Timers from './Timer'



const Home = () => {
    const navigate = useNavigate()
    const [tableData,setTableData]=useState()
    console.log(tableData,"tableData")

    const TableHandler=(TableNumber)=>{
        navigate(`/menu/${TableNumber}`)
    }
    useEffect(()=>{
        axios.get(`${BaseUrl.url}/api/v2/table`,
        ).then((res)=>{
          setTableData(res.data.data)
        }).catch((err)=>{
           console.log(err.message) 
        })
      },[])
  return (
        <>
          <div>
            <div className="container">
                <h6 className="pt-4">Table</h6>
                <div className="row">
                    
                    {!tableData?null:
                    tableData.map((data)=>{
                        return(
                            <div className="col-3 my-4">
                              <button type="button" className={`btntable hover:bg-dark ${data.Totalamount === 0 ?null: "bg-success text-light"}`}
                               onClick={()=>TableHandler(data.TableNumber)}>{data.Totalamount === 0 ?null:<><div><i className="fa-solid fa-clock" style={{fontSize:'13.5px'}}></i><span>
                               &nbsp;00: <Timers /> </span></div></>} Table {data.TableNumber}<div style={{fontSize:'13px',marginBottom:"12px"}}><span>
                                 {data.Totalamount === 0 ?null:'Rs ' }{data.Totalamount === 0 ?null:data.Totalamount
                               }</span></div></button> {data.Totalamount === 0 ?null:<span style={{cursor:"pointer"}}><i className="fa-solid fa-eye eyeButton"></i></span>}
                            </div>
                        )
                    })}
                </div>
            </div>
         </div>
        </>
    )
}

export default Home
