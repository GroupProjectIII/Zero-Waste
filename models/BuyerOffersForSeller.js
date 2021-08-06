const mongoose = require('mongoose');

const Location = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
})

const sellerOfferSchema = new mongoose.Schema({
    value:{
        type: Number,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    offerCreatedAt: {
        type: Date,
        default: new Date(),
    },
    status: {
        type: String,
        default: 'pending',
    },
    buyerName: {
        type: String,
        required:true
    },
    buyerEmail: {
        type: String,
        required:true
    },
    postId: {
        type: String,
        required:true
    },
    location: Location,
});

module.exports = mongoose.model('BuyerOffersForSeller', sellerOfferSchema);