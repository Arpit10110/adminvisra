import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    profile: { type: String },
    classify: { type: String },
    year: { type: Number },
    token: { type: Boolean },
    assistance: { type: Boolean },
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
});

const PriceSchema = new mongoose.Schema({
    dscprice: { type: Number, required: true },
    assprice: { type: Number, required: true },
    tokenprice: { type: Number, required: true },
    gst: { type: Number, required: true },
    totalprice: { type: Number, required: true },
});

const ImageSchema = new mongoose.Schema({
    adhar: { type: String, required: true },
    pan: { type: String, required: true },
    other: { type: String, required: true },
});

const Schema = new mongoose.Schema({
    order: { type: OrderSchema, required: true },
    user: { type: UserSchema, required: true },
    price: { type: PriceSchema, required: true },
    paymentid:{ type: String, required: true},
    image: { type: ImageSchema, required: true}
});

const VisraOrderModel = mongoose.models.IndOrderModelA || mongoose.model('IndOrderModelA', Schema);
export default VisraOrderModel;

