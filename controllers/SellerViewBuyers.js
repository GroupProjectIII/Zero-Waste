const express = require("express");
const mongoose = require("mongoose");

const BuyerDetails = require("../models/BuyerDetails");

exports.sellerViewBuyerDetails = async (req, res) => {
    let buyerId = req.params.id;
    BuyerDetails.findOne({ "buyerId": buyerId }).exec((err, buyer) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            buyer: buyer
        });
    });
}

exports.sellerViewAllBuyers = async (req, res) => {

    BuyerDetails.find({"buyerId":{$ne: null}},{ buyerId: 1, buyerName: 1, buyerDescription: 1, buyerAddress: 1, buyerContact: 1 }).exec((err, buyers) => {
        if (err) {
            return res.status(400).json({
                error: err
            });

        }
        return res.status(200).json({
            success: true,
            buyer: buyers
        });
    })
}