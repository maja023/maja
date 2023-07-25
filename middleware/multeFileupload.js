const multer=require("multer");
const upload_path="./views/upload";
const path=require("path")
const randomString=require("randomstring");
const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
       
            cb(null, upload_path)
       
    },
    filename:  (req, file, cb)=> {
        const fileEx=path.extname(file.originalname);
        const fileNamecreate=randomString.generate(15)+fileEx;
      cb(null, fileNamecreate)
    }
  });
  
const upload=multer({
    storage:storage,
  fileFilter:function(req,file,cb){
   
    const fileTyepe=file.mimetype;
    if(
        fileTyepe==="text/plain" || 
        fileTyepe==="application/pdf" || 
        fileTyepe==="text/html" || 
        fileTyepe==="text/css" || 
        fileTyepe==="image/png" || 
        fileTyepe==="image/jpg" || 
        fileTyepe==="image/jpeg" 
      
    ){
    cb(null,true)
    }else{
        cb("Only Allow png,jpg,jpeg,pdf,txt")
    }

  }
})

module.exports={upload};