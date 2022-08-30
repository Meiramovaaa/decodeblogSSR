const express = require('express');
const router = express.Router();
const {getUserById} = require("../controllers/user.controller")
router.get("/api/user/:id", async(req, res)=>{
    const user = await getUserById(req.params.id);
    if(user){
        const data = {
            id: user.id,
            full_name: user.full_name,
            nickname: user.nickname, 
            email: user.email
        }
        res.status(200).send(data)
    }else{
        res.status(500).send("Пользователь не найден")
    }
})

module.exports = router
