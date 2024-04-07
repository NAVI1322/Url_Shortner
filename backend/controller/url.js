import {nanoid} from 'nanoid'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const shortID = nanoid(8);
async function test1()
{
 const res =  await prisma.user.create({
   data:{
    email:"Navneet1@gmail.com",
    name:shortID,
   },
   select:{
    id:true
   }

  })
  console.log(res)
}

test1();



// async function handleGenerateNewShorturl(req,res,next)
// {
//     const body = req.body;
//     if(!body) return res.status(400).json({error:"url is required"})
//     const shortID = nano(8);

//     await PrismaClient.url.create({
//         shortlink:shortID,
//         ogLink:req.body.OriginalUrl,
//         status:"pending",
//         createdAt: new Date(),
//     })

// }