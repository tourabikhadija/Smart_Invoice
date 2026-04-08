import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required : true,
    },

    date: {
        type: Date,
        requied: true,
    },

    modePayment: {
        type: String,
        requied: true,
    },

    note: {
        type: String,
        requied: false,
    },
    
    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice",
        requied: true,
    }
});

const payment = mongoose.model("Payment", paymentSchema);
export default payment;
