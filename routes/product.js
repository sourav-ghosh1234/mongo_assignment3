
const express=require('express');
const router=express.Router();
const Product=require('../models/Product');


router.post("/add",async(req,res)=>{
    const product=new Product(req.body);
    const result=await product.save();
    if(result){
        return res.send({"result":"success"})
    } else{
        return res.status(422).send("some error occured")
    }


})


router.get("/getall",async(req,res)=>{
    const result=await Product.find()
    if(result){
        return res.send(result)
    }else{
        return res.status(422).send("result not found")
    }
})




module.exports=router;