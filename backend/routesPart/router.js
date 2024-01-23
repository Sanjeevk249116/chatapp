const express=require("express");
const { signupPost, logInPost, getChat, getSingleChat } = require("../AllPart/data");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("get data done")
})

router.post("/signup",signupPost);
router.post("/login",logInPost);
router.get("/chat",getChat)
router.get("/chat/:id",getSingleChat)
module.exports={router}