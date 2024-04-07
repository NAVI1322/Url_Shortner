import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt  from 'jsonwebtoken'

const prisma = new PrismaClient();
const router = Router();

router.post('/signup', async (req, res) => {

    const body = req.body;

    const existinguser = await prisma.user.findUnique({

        where:{
            email:body.email,

        }

    })

    if(existinguser)
    {
        res.status(400).json({
            message:"user already exist"
        })
    }

    const user = await prisma.user.create({
        data:{
        firstname:body.firstname,
        lastname:body.lastname,
        email:body.email,
        password:body.password
        }
     })

   const token =  jwt.sign({id:user.id},"secret")



    res.json({
        message:"signup Successfully",
        token : token,

    })



   
})

router.post('/signin', async (req, res) => {
   

    const body = req.body;

    const user = await prisma.user.findUnique({

        where:{
            email:body.email,
            password:body.password
        }

    })
    if(user)
    {
    const token =  jwt.sign({id:user.id},"secret")
    
    res.json({
        message:"sign In Successfully",
        token : token,

    })
    }

    else if (!user)
    {
        res.status(400).json({
            message:"user not exist/register first"
        })
    }

     else 
     res.status(400).json({
    message:"bad request: Error"})

});

export default router;
