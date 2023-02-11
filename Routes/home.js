const { Router } = require("express")
const route = Router();
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    image: Array,
    price: Number,
    description: String,
    availability: Boolean,
    SKU: String,
    brand: String,
    rating: Number,
    cstmrCount: Number,
    categories: String,
    color: String,
    freeShipping: Boolean
})

const categorySchema = mongoose.Schema({
    category: String
})

const brandSchema = mongoose.Schema({
    brand: String
})

const colorSchema = mongoose.Schema({
    color: String
})

const product = mongoose.model("Product", productSchema)
const category = mongoose.model("Category", categorySchema)
const brand = mongoose.model("Brand", brandSchema)
const color = mongoose.model("Color", colorSchema)

route.get("/showAll", function(req, res){
    product.find(function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

route.get("/details/:id", function(req, res){
    product.find({_id: req.params.id}, function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

route.get("/getCategory", function(req, res){
    category.find(function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

route.get("/getBrand", function(req, res){
    brand.find(function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

route.get("/getColor", function(req, res){
    color.find(function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

route.post("/insert", async function(req, res){
    // var newObj = new product({
    //     name: "Shelf",
    //     image: ["https://m.media-amazon.com/images/I/61ftPN+jalL._SL1080_.jpg", "https://m.media-amazon.com/images/I/51wruirfPlL._SL1000_.jpg", "https://m.media-amazon.com/images/I/61wzYtt459L._SL1080_.jpg"],
    //     price: 100,
    //     description: "Marvelous shelf",
    //     availability: true,
    //     SKU: "dkgjblkq23klhb23lkh",
    //     brand: "Genuine Decor",
    //     rating: 3,
    //     cstmrCount: 227,
    //     categories: "Living Room",
    //     color: "Brown",
    //     freeShipping: true,
    // })


    // var newObj = new category({
    //     category: "Kids"
    // })

    // var newobj1 = new brand({
    //     brand: "Starmarks"
    // })

    // await newObj.save()
    // await newobj1.save()


    var newObj = new color({
        color: "plum"
    })

    newObj.save()
    res.send("done")
})

module.exports = route