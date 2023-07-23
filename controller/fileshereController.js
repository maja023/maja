

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

module.exports={getFileController,getFileUploadController,getFileDownloadController}