const express = require("express");
const mongoose = require("mongoose");

const CompanyPost = require("../models/CompanyPost");
const CompanyDetails = require("../models/CompanyDetail");

exports.addCompanyPost= async (req,res)=>{
    const { companyId, postType, buyer, address, contact, wasteType, item, avbDate, quantity} = req.body;

    const newCompanyPost = new CompanyPost({ companyId, postType, buyer, address, contact, wasteType, item, avbDate, quantity})

    try {
        await newCompanyPost.save();

        res.status(201).json(newCompanyPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.addCompanyDetails= async (req,res)=>{
    const { companyName, companyContact, address, wasteType, wasteItem, companyId, description} = req.body;

    const newCompanyDetails = new CompanyDetails({ companyName, companyContact, address, wasteType, wasteItem, companyId, description})

    try {
        await newCompanyDetails.save();

        res.status(201).json(newCompanyDetails);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};