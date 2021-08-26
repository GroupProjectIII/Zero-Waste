const SellerPost = require("../models/SellerPost.js");
const BuyerOffers = require("../models/BuyerOffersForSeller.js");

const router = require("express").Router();


const { sellerAddPost,
    sellerViewPosts,
    sellerViewOffers,
    sellerViewAcceptedOffers,
    sellerViewOnePostDetails,
    sellerAcceptPostOffer
} = require("../controllers/sellerPosts.js");

router.post('/sellerAddPost', sellerAddPost);
router.get('/sellerViewPosts/:id', sellerViewPosts);
router.get('/sellerViewOffers/:id', sellerViewOffers);
router.get('/sellerViewOnePost/:id', sellerViewOnePostDetails);
router.patch('/sellerAcceptPostOffer/:id', sellerAcceptPostOffer);
router.get('/sellerViewAcceptedOffers', sellerViewAcceptedOffers);
module.exports = router;