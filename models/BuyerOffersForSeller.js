const mongoose = require('mongoose');

const sellerOfferSchema = new mongoose.Schema({
    value:{
        type: Number,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
    collectingDate:{
        type:Date,
        required:true
    },
    collectingTime:{
        type:String,
        required:true
    },
    offerCreatedAt: {
        type: Date,
        default: new Date(),
    },
    status: {
        type: String,
        required:true
    },
    buyerId: {
        type: String,
        required:true
    },
    postId: {
        type: String,
        required:true
    },
    wasteItemsListId: {
        type: String,
        required:false
    },
    sellerId: {
        type: String,
        required:false
    }
});

module.exports = mongoose.model('BuyerOffersForSeller', sellerOfferSchema);