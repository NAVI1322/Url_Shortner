import { query } from "express";
import prisma from "../config/db.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {

 
  try {
    const { originalUrl } = req.body;
    const userId = req.body.user.id

    const shortCode = nanoid(8);
   


    const url = await prisma.url.create({
      data: {
        ogLink: originalUrl,
        shortLink: shortCode,
        clickCount: 0,
        status: 'pending',
        createdAt: new Date(),
        userId: userId,
      }
    })

    res.status(201).json({
      message:"short url created Successfully",
      shortUrl:shortCode })
  }
  catch (err) { 
    console.error("Error creating url", err)
    res.status(500).json({ error: "Internal server err" })
  }
};



export const redirectToOgUrl = async (req, res) => {
  try {
    const { shortCode } = req.params
    
    
    const url = await prisma.url.findUnique({
      where: {
        shortLink: shortCode,
      },
    });

    if (!url) {
      return res.status(404).json({ error: "Short Link not found in redirecturl" })
    }

    await prisma.url.update({
      where: {
        userid: req.body.id,
        shortLink: shortCode,
      },
      data: {
        clickCount: {
          increment: 1, // Increment the clickCount field by 1
        },
      },
    });
    
    res.redirect(url.ogLink)
  } catch (err) {
    console.error("Error redirecting to Original Link", err)
    res.status(500).json({ err: "Internal server error" })
  }
}





export const fetchUrlwithid = async (req, res) => {
  try {
    const userId = req.query.id;


    // Assuming 'url' is your Prisma model representing URLs
    const response = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select:{
        urls:true
      }
    });

    const reversedUrls = response.urls.reverse();

    res.json({
      message: "Fetch is done",
      data: reversedUrls, // Include fetched data in the response
    });
  } catch (e) {
    console.error("Error in fetchUrl:", e);
    res.status(500).json({
      message: "Could not fetch URL",
      error: e.toString(), // Include error details in the response
    });
  }
};
