const SellerPost = require("../models/SellerPost.js");
const BuyerOffers = require("../models/BuyerOffersForSeller.js");

const router = require("express").Router();


const { sellerAddPost, sellerViewPosts, sellerViewOffers, sellerViewAcceptedOffers } = require("../controllers/sellerPosts.js");

router.post('/sellerAddPost', sellerAddPost);
router.get('/sellerViewPosts/:id', sellerViewPosts);
router.get('/sellerViewOffers', sellerViewOffers);
router.get('/sellerViewAcceptedOffers', sellerViewAcceptedOffers);
module.exports = router;