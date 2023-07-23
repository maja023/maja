const shereRoute=require("express").Router();

//import Controller
const {getFileController,getFileUploadController,getFileDownloadController}=require("../controller/fileshereController")
//middleware import 
const {upload}=require('../middleware/multeFileupload')

shereRoute.get("/",getFileController);
shereRoute.post("/upload",upload.single("file"),getFileUploadController);
shereRoute.get("/file/:name",getFileDownloadController);

shereRoute.get("/show/views/upload/:fileName",(req,res)=>{
    res.render("download",{
        fileName:req.params.fileName
    })
})
shereRoute.get("/download/:id",(req,res)=>{
   
try {
    const fDest=req.params.id;
    res.download(`./views/upload/${fDest}`)

} catch (error) {
    res.send(error)
}
   


})

module.exports={shereRoute};
  