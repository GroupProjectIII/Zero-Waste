const express = require("express");
const router = express.Router();
const { addSellerOffer, viewOffer, addSellerOfferTest, viewPendingSellerOffers, deletePendingSellerOffer, editPendingSellerOffer, buyerGetOneSellerOffer } = require("../controllers/buyerOffersForSeller");

router.post('/addSellerOffer', addSellerOfferTest);
router.get('/viewOfferTest', viewOffer);
router.get('/viewPendingSellerOffers', viewPendingSellerOffers);
router.delete('/deletePendingSellerOffer/:id', deletePendingSellerOffer);
router.patch('/editPendingSellerOffer/:id', editPendingSellerOffer);
router.get('/buyerGetOneSellerOffer/:id', buyerGetOneSellerOffer);

module.exports = router;