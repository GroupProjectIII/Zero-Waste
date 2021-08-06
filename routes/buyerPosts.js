const express = require("express");
const router = express.Router();
const { getPosts, getOnePost} = require("../controllers/buyerPosts");

router.get('/buyerPosts', getPosts);
router.get('/buyerGetOnePost/:id', getOnePost);

module.exports = router;