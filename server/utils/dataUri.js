import DataURIParser from "datauri/parser.js";
import path from "path";


const getDataUri = (file) => {
  const parser = new DataURIParser();
 

  const extName = path.extname(file.originalname || '').toLowerCase();
 



  // Check if the extension is valid
  if (!extName || !/\.(jpeg|png|gif|jpg)$/i.test(extName)) {
  
    throw new Error("Invalid file extension");
  }

  return parser.format(extName, file.buffer);
};

export default getDataUri;

/*const getDataUri = (file) => {
  const parser = new DataURIParser();
 

  const extName = path.extname(file.originalname || '').toLowerCase();
 



  // Check if the extension is valid
  if (!extName || !/\.(jpeg|png|gif|jpg)$/i.test(extName)) {
  
    throw new Error("Invalid file extension");
  }

  return parser.format(extName, file.buffer);
};

export default getDataUri;
*/