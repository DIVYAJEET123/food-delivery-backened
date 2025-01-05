import foodModel from "../models/foodModel.js";
import fs from 'fs';
// import {filename} from '../routes/foodRoute.js'

//add food item 

const addFood = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Ensure this line is uncommented

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error("Error adding food:", error);
        res.json({ success: false, message: "Error", error: error.message });
    }
}

//add food list
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}) 
    }
}

//remove food item

const removeFood = async (req,res) => {
    try{
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


export {addFood , listFood, removeFood}