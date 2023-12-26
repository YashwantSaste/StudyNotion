const express=require("express");
const router=express.Router();
const { assistantReply }=require("../controllers/Assistant");
router.post("/assistant",assistantReply);

module.exports=router