import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  res.send({ data: "here is your data" })
})

export default router;

