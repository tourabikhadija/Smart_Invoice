import mongoose from 'mongoose';

const suppliershema = new mongoose.Schema({
    name : {
        type: string,
        required: true,
    },

    email: {
        type:string,
        requied: true,
        unique: true,
    },

    phone: {
     type: string,
     requeid: true,
     unique: true,
    },

    adress: {
        type: string,
        requeid: true,
    }
});

const supplier = mongoose.model("Supplier", suppliershema);
export default supplier;
