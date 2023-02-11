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

route.get("/showAll", async function(req, res){
    const sort = req.query.sort
    const search = req.query.search
    const category = req.query.category
    const brand = req.query.brand
    const color = req.query.color
    const value = req.query.value
    const shipping = req.query.shipping

    if(sort === "low"){
        const result = await product.find({categories: category==="All"?{$exists: true}:category, brand: brand==="All"?{$exists: true}:brand, color: color==="All"?{$exists: true}:color, freeShipping: shipping==="false"?{$exists: true}:"true", name: search===""?{$exists: true}:{$regex: `${search}`, $options: "$i"}, price: {$gt: value}}).sort({price: 1})
        res.send(result)
    }
    else if(sort === "high"){
        const result = await product.find({categories: category==="All"?{$exists: true}:category, brand: brand==="All"?{$exists: true}:brand, color: color==="All"?{$exists: true}:color, freeShipping: shipping==="false"?{$exists: true}:"true", name: search===""?{$exists: true}:{$regex: `${search}`, $options: "$i"}, price: {$gt: value}}).sort({price: -1})
        res.send(result)
    }
    else if(sort === "asc"){
        const result = await product.find({categories: category==="All"?{$exists: true}:category, brand: brand==="All"?{$exists: true}:brand, color: color==="All"?{$exists: true}:color, freeShipping: shipping==="false"?{$exists: true}:"true", name: search===""?{$exists: true}:{$regex: `${search}`, $options: "$i"}, price: {$gt: value}}).sort({name: 1})
        res.send(result)
    }
    else if(sort === "desc"){
        const result = await product.find({categories: category==="All"?{$exists: true}:category, brand: brand==="All"?{$exists: true}:brand, color: color==="All"?{$exists: true}:color, freeShipping: shipping==="false"?{$exists: true}:"true", name: search===""?{$exists: true}:{$regex: `${search}`, $options: "$i"}, price: {$gt: value}}).sort({name: -1})
        res.send(result)
    }
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

module.exports = route