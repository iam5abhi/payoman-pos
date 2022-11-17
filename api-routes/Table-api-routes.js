const express = require('express')
const router =express.Router()
const Table =require('../controllers/TableController/TableController')

router
    .route('/table')
    .get(Table.getAllTable)
    .post(Table.AddTable)


router
    .route('/Billing/:id')
    .patch(Table.TableBilling)    
    .get(Table.getTableBilling)

router
      .route('/settle/:id')
      .post(Table.Settle)

router
     .route('/oders')   
     .get(Table.GetAlloders)   

router
     .route('/customerdetail')    
     .get(Table.GetCustomerDetail) 

module.exports = router