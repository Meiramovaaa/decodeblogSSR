const express = require('express');
const router = express.Router();
const {getCategories} = require("../controllers/categories.controller")
router.get("/api/categories", async(req, res)=>{
    try {
        const categories = await getCategories();
        res.status(200).send(categories)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
