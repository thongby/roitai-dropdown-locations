const express = require("express");
const router = express.Router();

const {
    listChangwat,
    listAmphoe,
    listTambon,
} = require("../controllers/location");

//@endpoint     localhost:4000/api/changwat
//@method       GET
//@access       Public
router.get("/changwat", listChangwat);

//@endpoint     localhost:4000/api/changwat/:id/amphoe
//@method       GET
//@access       Public
router.get("/changwat/:id/amphoe", listAmphoe);

//@endpoint     localhost:4000/api/amphoe/:id
//@method       GET
//@access       Public
router.get("/amphoe/:id", listTambon);

module.exports = router