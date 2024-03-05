import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controllers/product.controller";

const router = createRouter();

dbConnect();

router.post(newProduct);

export default router.handler();
