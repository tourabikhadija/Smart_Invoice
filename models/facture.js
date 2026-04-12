import mongoose from 'mongoose';

const factureSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required : true,
    },
    dueDate:{
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum : ['paid', 'unpaid', 'partially paid'],
        default: 'unpaid',
    },
    description: {
        type: String,
        required: false,
    },
       fournisseur: { // الربط مع المورد
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fournisseur',
        required: true,
    },
        client: { // الربط مع العميل (User)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

 const Facture = mongoose.model("Facture", factureSchema);
 export default Facture;