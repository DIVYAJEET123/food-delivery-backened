import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://divyajeet6393:divyajeet123@cluster0.rq1rb.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}   