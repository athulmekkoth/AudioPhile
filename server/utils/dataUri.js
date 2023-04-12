import DataURIParser from "datauri/parser.js";
import path from "path";


const getDataUri = (files) => {
  const parser = new DataURIParser();

  const dataUris = [];
console.log("data is "+files)
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const extName = path.extname(file.originalname || '').toLowerCase();

    // Check if the extension is valid
    if (!extName || !/\.(jpeg|png|gif|jpg)$/i.test(extName)) {
      throw new Error("Invalid file extension");
    }

    const dataUri = parser.format(extName, file.buffer);
    dataUris.push(dataUri);
  }

  return dataUris;
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