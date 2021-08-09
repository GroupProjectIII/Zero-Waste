const SellerPost = require("../models/SellerPost.js");

const router = require("express").Router();


const { sellerAddPost, sellerViewPosts } = require("../controllers/sellerPosts.js");

router.post('/sellerAddPost', sellerAddPost);
router.get('/sellerViewPosts/:id', sellerViewPosts);

module.exports = router;