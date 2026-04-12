import mongoose from 'mongoose';

const fournisseurShema = new mongoose.Schema({
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

const Fournisseur = mongoose.model("Fournisseur", fournisseurShema);
export default Fournisseur;
