import multer from "multer";
const storage = multer.memoryStorage();
const multerUploads =  multer({ storage }).array("files", 10);
export default  multerUploads ;