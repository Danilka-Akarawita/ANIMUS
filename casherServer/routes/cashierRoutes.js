const express = require("express");
const router=express.Router()


const {
    createNewCashierAccount,
    getCashierAccount
  } = require("../Controllers/cashieraccountApi");


 
router.get("/:uid", getCashierAccount);
router.post("/", createNewCashierAccount);

module.exports = router;

