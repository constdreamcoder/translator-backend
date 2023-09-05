import express from "express";
import { getAudioFile } from "../controllers/audioController.js";
import { translate } from "../controllers/translateController.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.post("/translate", translate);
router.post("/audio/play", getAudioFile);

export default router;
