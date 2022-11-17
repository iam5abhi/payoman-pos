import React,{useEffect, useState,useCallback} from 'react';
import axios from 'axios';
import BaseUrl from '../config/BaseUrl';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';

const Menu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userFormData,setUserFormData]=useState()
  const [btnDisable,setBtnDisable]=useState(false)
  const [renderUserForm,setRenderUserForm]=useState(false)
  const [menuData,setMenuData]=useState()
  const [kotData,setKotaData]=useState()
  const [items, setItems] = useState([{
    _id:'', menuname:'', price:'', quantity:1,
  }]);

  const getFuntionChild=(data)=>{
    setUserFormData(data)
  }
  //display updatePrice price
  const updatePrice = (qty, price) =>{
    return qty * price;
  }

  const updateItem = (_id,menuname,price, add_more=true) =>{
    let PerticularData = items.filter(menu => {
      return menu._id === _id;
    });
    if(items.includes(PerticularData[0])){
      // update qty and price
      let qty = 0;
      if (add_more){
        qty = PerticularData[0]['quantity'] + 1;
      }
      else{
        qty = PerticularData[0]['quantity'] - 1;
      }
      let updated_qty = qty;
      let idx = items.indexOf(PerticularData[0]);
      if (updated_qty === 0){
        items.splice(idx, 1)
        setItems([...items])
        return
      }
      let base_price = menuData.filter(menu => {
        return menu._id === _id;
      });
      let updated_price = updatePrice(updated_qty, base_price[0]['price'])
      setItems(prevState => {
        const newState = prevState.map(obj => {
          if (obj._id === _id) {
            return {...obj, _id:_id,menuname:menuname,price:updated_price,quantity:updated_qty};
          }
          return obj;
        });
  
        return newState;
      });
    }
    else{
      setItems([...items,{_id,menuname,price,quantity:1}])
    }
  }
 
  const Additems=(_id,menuname,price) =>{
    updateItem(_id,menuname,price, true);
   };
  
 const RemoveItems = (_id,menuname,price)=>{
  updateItem(_id, menuname, price, false)
 }

const KotHandler = ()=>{
     setBtnDisable(true)
    axios({
      method: 'PATCH',
      url: `${BaseUrl.url}/api/v2/Billing/${id}`,
      data:items
    }).then((res)=>{
      GetKotHandler()
      setItems([])
    })
    .catch((err)=>{
        console.log(err.message)
    })
  }
const GetKotHandler = ()=>{
  axios({
    method: 'GET',
    url: `${BaseUrl.url}/api/v2/Billing/${id}`,
    data:items
  }).then((res)=>{
    setKotaData(res.data.tableBilling)
    setBtnDisable(false)
  })
  .catch((err)=>{
      console.log(err.message)
  })
}
const UserAddDetail=useCallback(()=>{
  if(renderUserForm===false){
    setRenderUserForm(true)
  }else{
    setRenderUserForm(false)
  }
}, [renderUserForm]);

const SettleDataHandler =()=>{
  axios({
    method: 'POST',
    url: `${BaseUrl.url}/api/v2/settle/${id}`,
    data:userFormData
  }).then((res)=>{
    GetKotHandler()
    navigate('/')
  })
  .catch((err)=>{
      console.log(err.message)
  })
} 

useEffect(()=>{
  getFuntionChild()
  axios.get(`${BaseUrl.url}/api/v1/menu`,
  ).then((res)=>{
    setMenuData(res.data.data)
  }).catch((err)=>{
     console.log(err.message) 
  });
  GetKotHandler()
  const itemssa = items.filter(item => item.id === '');
  items.splice(itemssa)
  return;
},[])
  return (
         <>
          <div className="container-fluid-content text-center">
              <div className="row content m-0">
                <div className="col-sm-2 sidenav d-none d-md-block">
                  <ul className="nav flex-column sidebar-nav text-center">
                    <li className="nav-item border rounded-pill my-1 bg-light text-dark">
                    Product 1
                    </li>
                    <li className="nav-item border rounded-pill my-1 bg-light text-dark">
                    Product 2
                    </li>
                    <li className="nav-item border rounded-pill my-1 bg-light text-dark">
                    Product 3
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 text-left ">
                  <div className="container-fluid">
                    <h6 className="bg-dark text-white p-2 ">Products</h6>
                     <div className="container">
                      {/*----------PRODUCTS*/}
                      {/*-------TEST*/}
                      <div className="row">
                        {!menuData?null:
                          menuData.map((data)=>{
                            return(
                              
                              <div className="col-3 my-2" onClick={()=>Additems(data._id,data.menuname,data.price, true)} key={data._id}>
                              <button type="button" className="btn btn-light">
                                <div className="stats-container" style={{height:"50px",width:"95px"}}>
                                  <span className="product_name">{data.menuname}</span><br/>               
                                  <span className="product_price text-success">{data.price}</span>
                                </div>
                              </button>
                            </div> 
                            )
                          })}
                          </div> 
                          </div>  
                      {/*-------TEST*/}
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <h6 className="bg-dark text-white p-2 ">Table</h6>
                  {renderUserForm===true? <UserForm id={id} getFuntionChild={getFuntionChild}/>:
                  <>
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col " className="table-heading text-start"><small>ITEM</small></th>
                        <th scope="col " className="table-heading text-center"><small>QTY.</small></th>
                        <th scope="col" className="table-heading text-end"><small>PRICE</small></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                     !items?null:
                      items.map((data)=>{
                        return(
                          <tr key={data._id}>
                          <td scope="row" className="text-start"><i className="fa-solid fa-trash-can fa-xs" /> &nbsp; {data.menuname}</td>
                          <td className="text-center">
                            <div className="quantity ">
                              <button onClick={()=>RemoveItems(data._id, data.menuname, data.price)} className="plus-btn border" type="button" name="button">
                                <i className="fa-solid fa-minus" />
                              </button>
                              <span className="w-25 border">{data.quantity}</span>
                              <button onClick={()=>Additems(data._id, data.menuname, data.price, true)} className="minus-btn border" type="button" name="button">
                                <i className="text-success fa-solid fa-plus" />
                              </button>
                            </div>
                          </td>
                          <td className="text-end">{data.price}</td>
                        </tr>
                        )
                      })
                      }
                    </tbody>
                    </table>
                     {!kotData?null:
                      kotData.items.map((data) => {
                      return (
                        <>
                        <table className="table ">
                          <thead className="text-success text-center " style={{background: '#19875433'}}>
                            <tr>
                              <th scope="col" className="table-heading text-start"><small>K-{data.kot}</small></th>
                              <th scope="col"></th>
                              <th scope="col" className="table-heading text-end"><button className="bg-light border rounded px-2">Print</button></th>
                            </tr>
                          </thead>
                          <tbody>
                          {!data?null:data.items.map((item)=>{
                          return(
                            <>
                            <tr key={item._id}>
                            <td scope="row" className="text-start">
                              {/* <i className="fa-solid fa-trash-can fa-xs" /> &nbsp;  */}
                            {item.menuname}</td>
                            <td className="text-center">
                              <div className="quantity ">
                                <span className="w-25 borderType text-success">{item.quantity}</span>
                              </div>
                            </td>
                            <td className="text-end">{item.price}</td>
                          </tr>
                          </>
                          )
                        })}
                          </tbody>
                        </table>   
                        </>
                        )
                      })
                      }          
                  </>
                  }
                  <hr className="hrtag"/>
                    <div>
                      <h6 className='mt-1'>total price :{!kotData?null:kotData.Totalamount}</h6>
                    </div>
                  <div className='kotButton'>
                  
                  {!renderUserForm?<><button type="button" onClick={KotHandler} disabled={btnDisable} className="btn btn-success btn-sm">Kot</button> &nbsp;<button type="button" className="btn btn-success btn-sm" onClick={UserAddDetail}>Settle Data</button></>:
                   <> <button type="button" onClick={SettleDataHandler} className="btn btn-success btn-sm">Settle</button>  <button type="button" onClick={()=>setRenderUserForm(false)} className="btn btn-success btn-sm">Back</button></> 
                  }
                  </div>
                </div>
              </div>
            </div>  
    </>
  )
}

export default Menu;
