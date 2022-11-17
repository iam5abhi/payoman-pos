const express = require('express')
const router =express.Router()
const MenuList =require('../controllers/MenuLsit-Controllers/menulistController')

router
    .route('/menu')
    .get(MenuList.getAllMenuList)
    .post(MenuList.AddMenulist)
    





module.exports = router