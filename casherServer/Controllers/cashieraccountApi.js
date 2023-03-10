const CashierAccount = require("../models/CashierSchema");

//get one account
const getCashierAccount = async (req, res) => {
    const { uid } = req.params;
    console.log(uid);
    const cashieraccount = await CashierAccount.findOne({
      UID: uid,
    });
    console.log(cashieraccount);
    if (!cashieraccount) {
      return res.status(404).json({ error: "Cashier account not found" });
    }
    return res.status(200).json(cashieraccount);
  };

  const createNewCashierAccount = async (req, res) => {
    const { firstName, lastName, email, UID } = req.body;
    try {
      const Cashieraccount = await CashierAccount.create({
        firstName,
        lastName,
        email,
        UID
      });
      res.status(200).json(Cashieraccount);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

  module.exports = {
    getCashierAccount,
    createNewCashierAccount
  };
  
