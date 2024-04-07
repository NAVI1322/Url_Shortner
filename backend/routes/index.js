const {Router} = require('express')

const userRouter = require('./user')
const dashRouter = require('./dashboard')


const router = Router()

router.use('/user',userRouter);
router.use('/dashboard',dashRouter);


module.exports= router;