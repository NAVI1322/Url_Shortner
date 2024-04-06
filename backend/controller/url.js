// const {nano} = require('nanoid')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

// async function test1()
// {
//  const res =  await prisma.user.create({
//    data:{
//     email:"Navneet@gmail.com",
//     name:"navneet",
//    },
//    select:{
//     id:true
//    }

//   })
//   console.log(res)
// }

// test1();



async function handleGenerateNewShorturl(req,res,next)
{
    const body = req.body;
    if(!body) return res.status(400).json({error:"url is required"})
    const shortID = nano(8);

    await PrismaClient.url.create

}