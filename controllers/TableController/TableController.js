const Table =require('../../models/TableSchema')
const Oders =require('../../models/OderShecma')




exports.AddTable=(req,res,next)=>{
    let table=parseInt(req.body.totalTable)
    let TableNumber = [];
    for (let i=1;i<=table;i++){
        let data ={
           TableNumber:`${i}`
        }
        TableNumber.push(data);
        
    }

    Table.insertMany(TableNumber)
    .then((data)=>{
        res.status(200).json({
            data:data
        })
    })
    .catch((err)=>{
        console.log(err.message)
    })

}



exports.getAllTable=(req,res,next)=>{
    Table.find({},(err,data)=>{
        if(!data){
            res.status(404).json({
                message:"Table is not availble"
            })
        }

        res.status(200).json({
            data:data
        })
    })
}

exports.TableBilling=async(req,res,next)=>{
     const data = req.body
     let Totalprice = data.reduce(function(prev, cur) {
         return prev +cur.price*1;
       }, 0);

   const tableData= await Table.findOne({TableNumber:req.params.id})
       const update_data={
           kot:tableData.items.length*1+1*1,
           items:data
       }
  Table.updateOne({TableNumber:req.params.id},{$push:{items:update_data}},{new: true, upsert: true},function(err,data){})

 Table.updateOne({TableNumber:req.params.id},{$set:{Totalamount:tableData.Totalamount+Totalprice}},{new: true, upsert: true},function(err,data){
   if(!data){
       res.status(400).json({
           message:"item is not added"
       })
   }
   res.status(200).json({
       message:"susscessfully",
       data:data
   })
 })
}




exports.getTableBilling=(req,res,next)=>{
  Table.findOne({TableNumber:req.params.id},function(err,tableBilling){
    if(!tableBilling){
        res.send('err')
    }

   res.status(200).json({
    tableBilling
   })
  })
}


exports.Settle =async(req,res,next)=>{ 
    const oderdata={
        Phone_Number:req.body.Phone_Number,
        Guest_Name:req.body.Guest_Name,
        Email:req.body.Email,
        GSTIN:req.body.GSTIN,
        DOB:req.body.DOB,
        gender:req.body.gender,
        Anniversary_Date:req.body.Anniversary_Date,
        oderdata:req.body.items,
        Address:req.body.Address,
        TableNumber:req.body.TableNumber,
        Totalamount:req.body.Totalamount,
        payment:req.body.payment_option
    }
  const newOder =await Oders.create(oderdata)
  
   
  if(!newOder){
    res.status(500).json({
       message:"Internal sever error"
    })
  }else{
    Table.updateOne({TableNumber:req.params.id},{$set:{items:[],Totalamount:0}},{new: true, upsert: true},function(err,data){})
    console.log(newOder)
    res.status(200).json({
        message:"Oder is settle",
        data:newOder
    })
  }
}



exports.GetAlloders =(req,res,next)=>{
    Oders.find({},function(err,data){
        if(err){
            res.status(500).json({

            })
        }else{
            res.status(200).json({
                data:data
            })
        }
    })
}



exports.GetCustomerDetail =(req,res,next)=>{
    Oders.findOne({Phone_Number:req.query.phoneNumber},(err,data)=>{
        if(!data){
            res.status(404).json({
                message:"Customer is not Exits"
            })
        }
        res.status(200).json({
            Phone_Number:data.Phone_Number,
            Guest_Name:data.Guest_Name,
            Email:data.Email,
            DOB:data.DOB,
            Anniversary_Date:data.Anniversary_Date,
            Address:data.Address
        })
    })
}




exports.GetAllCustomerDetails =(req,res,next)=>{

}