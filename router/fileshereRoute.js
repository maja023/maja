const shereRoute=require("express").Router();
//import Controller
const {getFileController,getFileUploadController,getFileDownloadController,downloadController,getDownloadController}=require("../controller/fileshereController")
//middleware import 
const {upload}=require('../middleware/multeFileupload')

shereRoute.get("/",getFileController);
shereRoute.post("/upload",upload.single("file"),getFileUploadController);
shereRoute.get("/file/:name",getFileDownloadController);
shereRoute.get("/show/views/upload/:fileName",getDownloadController)
shereRoute.get("/download/:id",downloadController)

module.exports={shereRoute};
  