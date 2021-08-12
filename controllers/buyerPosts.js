const express = require("express");
const mongoose = require("mongoose");

const SellerPost = require("../models/SellerPost");
const CompanyPost = require("../models/CompanyPost");
const CompanyDetails = require("../models/CompanyDetail")

exports.getPosts= async (req,res)=>{
    SellerPost.find().exec((err,posts)=>{
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

exports.getOnePost= async (req,res)=>{
    let postId = req.params.id;

    SellerPost.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            onePost:post
        })
    })
}

exports.getCompanyPosts= async (req,res)=>{
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

exports.getOneCompanyPost= async (req,res)=>{
    let postId = req.params.id;

    CompanyPost.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            onePost:post
        })
    })
}

exports.getBuyerCompanyDetails= async (req,res)=>{
    CompanyDetails.find().exec((err,posts)=>{
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

