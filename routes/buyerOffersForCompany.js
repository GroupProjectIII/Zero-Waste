const express = require("express");
const router = express.Router();
const {
    addCompanyOffer,
    viewPendingCompanyOffers,
    deletePendingCompanyOffer,
    editPendingCompanyOffer,
    buyerGetOneCompanyOffer,
    addBuyerNotifyCompany
} = require("../controllers/buyerOffersForCompany");

router.post('/addCompanyOffer', addCompanyOffer);
router.get('/viewPendingCompanyOffers', viewPendingCompanyOffers);
router.delete('/deletePendingCompanyOffer/:id', deletePendingCompanyOffer);
router.patch('/editPendingCompanyOffer/:id', editPendingCompanyOffer);
router.get('/buyerGetOneCompanyOffer/:id', buyerGetOneCompanyOffer);

router.post('/addBuyerNotifyCompany', addBuyerNotifyCompany);

module.exports = router;