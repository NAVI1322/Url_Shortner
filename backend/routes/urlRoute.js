import { Router } from "express";
import { createShortUrl, fetchUrlwithid, redirectToOgUrl } from "../controllers/urlController.js"
import { authMiddleware } from "./middleware.js";

const   router = new Router();

router.post('/Shorten', authMiddleware ,createShortUrl);

router.get('/Shorturl/:shortCode', redirectToOgUrl);

router.get('/fetchurl',fetchUrlwithid);

export default router;
