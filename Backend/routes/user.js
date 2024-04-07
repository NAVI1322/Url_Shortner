const {Router} = require('express')

const router = Router()

router.post('/signup',(res)=>{

    console.log("sign up")
});


router.post('/signin',()=>{

    console.log("signin")
});


module.exports= router
