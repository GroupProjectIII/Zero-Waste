const express = require("express");
const mongoose = require("mongoose");

const CompanyDetail = require("../models/CompanyDetail");

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

exports.viewCompanyDetails = async (req, res) => {
    let companyId = req.params.companyId;
    CompanyDetail.find({ companyId: companyId }).exec((err, posts) => {
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
};