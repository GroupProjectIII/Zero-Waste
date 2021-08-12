const express = require("express");
const router = express.Router();
const { getPosts, getOnePost, getCompanyPosts, getOneCompanyPost, getBuyerCompanyDetails} = require("../controllers/buyerPosts");

router.get('/buyerPosts', getPosts);
router.get('/buyerGetOnePost/:id', getOnePost);
router.get('/buyerGetCompanyPosts', getCompanyPosts);
router.get('/buyerGetOneCompanyPost/:id', getOneCompanyPost);
router.get('/getBuyerCompanyDetails', getBuyerCompanyDetails);

module.exports = router;