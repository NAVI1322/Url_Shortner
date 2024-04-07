const {Router} = require('express')

const router = Router()

router.post('/dashboard',()=>{

    console.log("dashboard")
});


router.get('/dashboardBulk',()=>{

    console.log("dashboard")
});



module.exports= router