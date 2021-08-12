const express = require("express");
const router = express.Router();

const { addCompanyPost, addCompanyDetails } = require("../controllers/companyPosts");

router.post('/addCompanyPost', addCompanyPost);
router.post('/addCompanyDetails', addCompanyDetails);

module.exports = router;