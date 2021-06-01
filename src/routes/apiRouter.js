import express from "express";

import * as apiController
from "../controllers/apiController.js";

const router = express.Router();

router.get("/hello", apiController.getHello);
router.get("/:date?", apiController.getDate);

export default router;
