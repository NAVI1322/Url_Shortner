import { Router } from 'express';
import { nanoid } from 'nanoid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.post('/dashboard', async (req, res) => {
  const body = req.body;

  if (!body || !body.user || !body.user.id) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const shortID = nanoid(8);

    await prisma.url.create({
      data: {
        shortLink: shortID,
        ogLink: body.OriginalUrl,
        status: "pending",
        createdAt: new Date(),
        clickCount: 0,
        userId: body.user.id,
      },
    });

    res.status(200).json({
      message: "URL created successfully",
    });
  } catch (error) {
    console.error("Error creating URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/Redirect', async (req, res) => {
  const shortUrl = req.query.shortId; // Ensure consistent naming convention (camelCase)

  try {
    // Fetch the Url record based on the shortLink
    const urlRecord = await prisma.url.findUnique({
      where: {
        userId: 4,
        shortLink: shortUrl
      }
    });

    if (!urlRecord) {
      return res.status(404).send("Short URL not found");
    }

    // Update the clickCount for the retrieved Url record
    const updatedUrl = await prisma.url.update({
      where: {
        id: urlRecord.id // Use the id of the retrieved Url record
      },
      data: {
        clickCount: {
          increment: 1
        }
      }
    });

    // Redirect the user to the original link associated with the Url record
    res.redirect(updatedUrl.ogLink);
  } catch (error) {
    console.error("Error updating click count:", error);
    res.status(500).send("Internal Server Error");
  }
});



export default router;
