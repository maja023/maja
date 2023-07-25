const shereRoute=require("express").Router();
//import Controller
const {getFileController,getFileUploadController,getFileDownloadController,getDownloadpageController,getDownloadController}=require("../controller/fileshereController")
//middleware import 
const {upload}=require('../middleware/multeFileupload')

shereRoute.get("/",getFileController);
shereRoute.post("/upload",upload.single("file"),getFileUploadController);
shereRoute.get("/file/:name",getFileDownloadController);

shereRoute.get("/download/:fileid",getDownloadpageController)
shereRoute.post("/download-start/:fileid",getDownloadController)

module.exports={shereRoute};
 