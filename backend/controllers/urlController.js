import prisma from "../config/db.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortCode = nanoid(16);
    console.log(shortCode)

    const url = await prisma.url.create({
      data: {
        ogLink: originalUrl,
        shortLink: shortCode,
        clickCount: 0,
        status: 'pending',
        createdAt: new Date(),
        userId: req.user.id,
      }
    })

    const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;

    res.status(201).json({ shortUrl })
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
      return res.status(404).json({ error: "Short Link not found" })
    }

    await prisma.url.update({
      where: {
        shortLink: shortCode,
      },
      data: {
        clickCount: url.clickCount++,
      }
    });

    res.redirect(url.ogLink)
  } catch (err) {
    console.error("Error redirecting to Original Link", err)
    res.status(500).json({ err: "Internal server error" })
  }
}

