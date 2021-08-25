const express = require("express");
const router = express.Router();

const { addCompanyPost} = require("../controllers/companyPosts");

router.post('/addCompanyPost', addCompanyPost);

module.exports = router;