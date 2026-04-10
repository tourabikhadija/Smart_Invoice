import mongoose from 'mongoose';

const suppliershema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },

    email: {
        type:String,
        required: true,
        unique: true,
    },

    phone: {
     type: String,
     required: true,
     unique: true,
    },

    address: {
        type: String,
        required: true,
    },

  client: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
}

});

const supplier = mongoose.model("Supplier", suppliershema);
export default supplier;
