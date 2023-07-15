const multer=require('multer');
const path=require('path');
const upload_file='./views/upload/';


const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
      cb(null, upload_file)
    },
    filename:  (req, file, cb)=> {
        const fileEx=path.extname(file.originalname);

        const fileNamecreate=Date.now()+fileEx;
      cb(null, fileNamecreate)
    }
  });
  
  fileFilter:(req,file,cb)=>{

    if(
        file.mimetype==="image/jpeg" ||
        file.minetype==="video/mp4" ||
        file.mimetype==="image/jpg" ||
        file.mimetype==="image/png" ||
        file.mimetype==="application/pdf"
         
         ){
        
        cb(null,true)
    }else{
        cb (new Error("Only Jpeg ,png or jpg allow"));
    }
}

const upload=multer({
    storage:storage,
  
 
});

module.exports=upload;