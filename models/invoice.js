import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
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
       supplierId: { // الربط مع المورد
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    userId: { // الربط مع العميل (User)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

 const invoice = mongoose.model("Invoice", invoiceSchema);
 export default invoice;