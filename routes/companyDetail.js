const express = require("express");
const router = express.Router();

const { addCompanyDetails, viewCompanyDetails } = require("../controllers/companyDetail");

router.post('/addCompanyDetails', addCompanyDetails);
router.post('/viewCompanyDetails', viewCompanyDetails);

module.exports = router;