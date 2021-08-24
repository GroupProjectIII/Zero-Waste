const express = require("express");
const mongoose = require("mongoose");

const Complaint = require("../models/Complaints");

exports.addComplaint= async (req,res)=>{
    const { complaintAbout, complaintDetails, userId, userName, userEmail} = req.body;

    const newComplaint = new Complaint({ complaintAbout, complaintDetails, userId, userName, userEmail})

    try {
        await newComplaint.save();

        res.status(201).json(newComplaint);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};