const express = require('express')
const router = express()

const productModel = require('../database/product')

router.get('/all', async (req,res)=> {
    let products = productModel.getAllProduct()
    res.status(200).json(products)
})

router.post('/', (req,res)=> {
    console.log(1)
    const body = req.body
    let products = productModel.insertProduct(body)
    res.status(200).send(products)
})

router.put('/', (req,res)=> {
    res.status(200).send('test')
})

router.delete('/', (req,res)=> {
    res.status(200).send('test')
})
module.exports = router