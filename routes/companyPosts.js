const express = require("express");
const router = express.Router();

const { addCompanyPost,
    getCompanyPostsForCompany,
    viewPendingCompanyOffersForCompany,
    getBuyerDetailsForCompany
} = require("../controllers/companyPosts");

router.post('/addCompanyPost', addCompanyPost);
router.get('/getCompanyPostsForCompany', getCompanyPostsForCompany);
router.get('/viewPendingCompanyOffersForCompany', viewPendingCompanyOffersForCompany);
router.get('/getBuyerDetailsForCompany', getBuyerDetailsForCompany);

module.exports = router;