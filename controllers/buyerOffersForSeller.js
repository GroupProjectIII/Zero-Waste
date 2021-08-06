const express = require("express");
const mongoose = require("mongoose");

const BuyerOffersForSeller = require("../models/BuyerOffersForSeller");

exports.addSellerOffer= async (req,res)=>{
    const { value, expiryDate, quantity, buyerName, buyerEmail, postId, location } = req.body;

    const newSellerOffer = new BuyerOffersForSeller({ value, expiryDate, quantity, buyerName, buyerEmail, postId, location})

    try {
        await newSellerOffer.save();

        res.status(201).json(newSellerOffer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.viewPendingSellerOffers= async (req,res)=>{
    BuyerOffersForSeller.find().exec((err,offers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOffers:offers
        });
    });
}

exports.deletePendingSellerOffer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await BuyerOffersForSeller.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}