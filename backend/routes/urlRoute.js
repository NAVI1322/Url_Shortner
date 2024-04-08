import { Router } from "express";
import { createShortUrl, redirectToOgUrl } from "../controllers/urlController.js"

const router = new Router();

router.post('/Shorten', createShortUrl);

router.get('/:shortCode', redirectToOgUrl);

export default router;
