const express = require("express");
const mongoose = require("mongoose");

const CompanyPost = require("../models/CompanyPost");

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