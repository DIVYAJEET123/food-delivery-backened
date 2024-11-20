import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://divyajeet6393:8574399656@cluster0.d8jjk.mongodb.net/food-delivery').then(() =>console/console.log("DB Connected"));
}