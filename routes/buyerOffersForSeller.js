const express = require("express");
const router = express.Router();
const { addSellerOffer, viewPendingSellerOffers, deletePendingSellerOffer } = require("../controllers/buyerOffersForSeller");

router.post('/addSellerOffer', addSellerOffer);
router.get('/viewPendingSellerOffers', viewPendingSellerOffers);
router.delete('/deletePendingSellerOffer/:id', deletePendingSellerOffer);

module.exports = router;