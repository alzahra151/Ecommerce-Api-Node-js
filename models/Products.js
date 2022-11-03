var mongoose=require('mongoose')

var productSchema=mongoose.Schema({
    name: {
        type :String,
         required:true,
         trim :true,
    },
    description:{
        type:String ,
        trim :true 
    },
    photo:{
        type :String,
        // required:true
    },
    sellerId:{
       type:mongoose.Schema.ObjectId,
       ref: 'Seller',
       required:true
    },
    createdAt: Date,
    
})

var productModel=mongoose.model('Product' ,productSchema)
// var newproduct= productModel.create({"name": "phone"})
// console.log(newproduct)
module.exports=productModel