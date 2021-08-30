const RateAndComment = require("../models/RateAndComment.js");

const router = require("express").Router();

const { sellerViewBuyerComments } = require("../controllers/sellerViewBuyerComments.js");
router.get('/viewBuyerComments/:id', sellerViewBuyerComments);

module.exports = router;