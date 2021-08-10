const express = require("express");
const mongoose = require("mongoose");

const SellerPost = require("../models/SellerPost");
const BuyerOffersForSeller = require("../models/BuyerOffersForSeller");

exports.sellerAddPost = async (req, res) => {
    const sellerId = req.body.sellerId;
    const postType = req.body.postType;
    const buyer = req.body.buyer;
    const address = req.body.address;
    const location = req.body.location;
    const contact = Number(req.body.contact);
    const wasteItemList = req.body.wasteItemList;

    const newSellerPost = new SellerPost({
        sellerId,
        postType,
        buyer,
        address,
        location,
        contact,
        wasteItemList
    })
    try {
        await newSellerPost.save();

        res.status(201).json(newSellerPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

exports.sellerViewPosts = async (req, res) => {

    let sellerId = req.params.sellerId;

    SellerPost.find({ sellerId:sellerId }).exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            sucess: true,
            existingPosts: posts
        });
    });

    
}

exports.sellerViewOffers = async (req, res) => {

    BuyerOffersForSeller.find({ buyerName: "harshana" , status:"pending" }).exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            sucess: true,
            existingPosts: posts
        });
    });

    
}

exports.sellerViewAcceptedOffers = async (req, res) => {
    BuyerOffersForSeller.find({ buyerName: "harshana" , status:"accepted" }).exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            sucess: true,
            existingPosts: posts
        });
    });

}