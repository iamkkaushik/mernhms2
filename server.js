import app from "./app.js";
import cloudinary from "cloudinary";

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dptmyarij";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "827273693939897";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "vBP-OqxtMKiH7uDTGn3OaavSfHk";

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening at port ${process.env.PORT || 4000}`);
});
