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

const product = mongoose.model("Product", productSchema)

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

// route.post("/insert", async function(req, res){
//     var newObj = new product({
//         name: "Shelf",
//         image: ["https://m.media-amazon.com/images/I/61ftPN+jalL._SL1080_.jpg", "https://m.media-amazon.com/images/I/51wruirfPlL._SL1000_.jpg", "https://m.media-amazon.com/images/I/61wzYtt459L._SL1080_.jpg"],
//         price: 100,
//         description: "Marvelous shelf",
//         availability: true,
//         SKU: "dkgjblkq23klhb23lkh",
//         brand: "Genuine Decor",
//         rating: 3,
//         cstmrCount: 227,
//         categories: "Living Room",
//         color: "Brown",
//         freeShipping: true,
//     })

//     await newObj.save()
//     res.send("done")
// })

module.exports = route