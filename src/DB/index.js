import mongoose from "mongoose";
export const connectdb = ()=>{
    mongoose.connect(process.env.NEXT_PUBLIC_MongooseUrl,{dbName:"Visra"})
    .then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log(err);
    })
}