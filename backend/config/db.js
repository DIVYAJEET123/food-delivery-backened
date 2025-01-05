import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://divyajeet6393:Divyajeet123@cluster0.lfvga.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}   