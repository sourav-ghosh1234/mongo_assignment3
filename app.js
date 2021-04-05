const express=require('express');
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

mongoose.connect('mongodb+srv://sourav1234:1234@cluster0.zjkgv.mongodb.net/Product?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(()=>{
      console.log("connected to mongodb")
  })

app.use(bodyParser.json())
app.use('/product',require('./routes/product'))

app.listen(8000,()=>{
    console.log(`connected to port 8000`)
})