import express from "express";

import { addFreedom, getAllFreedoms } from "../controllers/freedoms/controller";

const router = express.Router();

router.get("/", getAllFreedoms);
router.post("/", addFreedom); 

export default router;