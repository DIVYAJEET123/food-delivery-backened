import foodModel from "../models/foodModel.js";
import fs from 'fs';
// import {filename} from './routes/foodRoute.js'

//add food item 


const addFood = async (req,res) => {

    if (req.file) {
        let image_filename = `${req.file.filename}`;
        // ... other code
      } else {
        console.error('No file uploaded'); 
        // Handle the error, e.g., return an error response
      }

    const food = new foodModel({
        name :req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,messsage:"Error"})
    }

}

export {addFood}