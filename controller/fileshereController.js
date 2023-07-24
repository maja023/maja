
const getFileController=(req,res)=>{
    res.render('index')
 }

const getFileUploadController=(req,res)=>{
res.render("index",{
    fileName:req.file.filename
  })
}


const getFileDownloadController=(req,res)=>{
const imgLink=req.params.name;
res.render("image",{
    image:imgLink
  })
} 


const downloadController=(req,res)=>{
    try {
        const fDest=req.params.id;
        res.download(`./views/upload/${fDest}`)
    } catch (error) {
        res.send(error)
    }
} 

const getDownloadController=(req,res)=>{
    if(req.params.fileName){
        res.render("download",{
            fileName:req.params.fileName
        })
    }else{
    res.redirect('/')
    }
} 

module.exports={getFileController,getFileUploadController,getFileDownloadController,downloadController,getDownloadController}