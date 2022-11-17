const Menu =require('../../models/MenuLsitSchema')

exports.AddMenulist =(req,res,nexr)=>{
   const data={
    menuname:req.body.menuname,
    price:req.body.price
   }

   const menu =new Menu(data)
   
   menu.save((err,data)=>{
      if(err){
        console.log(err.message)
      }
      res.status(200).json({
        data:data
      })
   })

}




exports.getAllMenuList =(req,res,next)=>{
    Menu.find({},(err,data)=>{
        if(!data){
            res.status(404).json({
                message:"food is not availble"
            })
        }

        res.status(200).json({
            data:data
        })
    })
}