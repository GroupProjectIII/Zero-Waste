const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
    forgotVerifyAccount,
    verifyAccount
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/forgotVerifyAccount").post(forgotVerifyAccount);

router.route("/verifyAccount/:userId").put(verifyAccount);

module.exports = router;
