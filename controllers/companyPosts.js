const express = require("express");
const mongoose = require("mongoose");

const CompanyPost = require("../models/CompanyPost");
const BuyerOffersForCompany = require("../models/BuyerOffersForCompany");
const BuyerDetails = require("../models/BuyerDetails");


exports.addCompanyPost= async (req,res)=>{
    const { companyId, companyName, postType, buyer, address, contact, wasteType, item, avbDate, quantity} = req.body;

    const newCompanyPost = new CompanyPost({ companyId, companyName, postType, buyer, address, contact, wasteType, item, avbDate, quantity})

    try {
        await newCompanyPost.save();

        res.status(201).json(newCompanyPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.getCompanyPostsForCompany= async (req,res)=>{
    CompanyPost.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
}

exports.viewPendingCompanyOffersForCompany= async (req,res)=>{
    BuyerOffersForCompany.find().exec((err,offers)=>{
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

exports.getBuyerDetailsForCompany= async (req,res)=>{
    BuyerDetails.find().exec((err,buyers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBuyers:buyers
        });
    });
}