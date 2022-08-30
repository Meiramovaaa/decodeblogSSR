const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerUser, signinUser, getUserById} = require("../controllers/auth.controller")
const {registerValidation}=  require("../validation/registerValidation")
const {isEmpty} = require("../utils/is-empty")
const {isAuth} = require('../middlewares/auth.middlewares')
const {SECRET_KEY} = require('../config/config')
router.post('/api/signup' , async (req , res) => {
    const errors = registerValidation(req.body)
    if(isEmpty(errors)){
        try{
            const user = await registerUser(req.body)
            res.status(200).send(user)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }

})

router.post('/api/signin' , async (req , res) => {
    let token = await signinUser({email: req.body.email , password: req.body.password})
    if(token){
        token = token.split(' ')
        token = token[token.length - 1]
        jwt.verify(token , SECRET_KEY , async (err , decoded) => {
            if(err) res.status(401).end();
            const user = await getUserById(decoded.id)
            req.user = user
            res.status(200).send(decoded)
        })
    }else{
        res.status(401).end();
    }

})
module.exports = router
