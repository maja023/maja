const majashereModel=require("../model/fileshereModel");

const getFileController=(req,res)=>{
    res.render('index')


 }

const getFileUploadController=async(req,res)=>{
    const file=req.file;

    const dat=new Date();
const wpassCheck=req.body.wpass !==""?req.body.wpass:"null";

        const fileUpquery=new majashereModel({
        fileOrginalName:file.originalname,
        filePassword:wpassCheck,
        fileReplaceName:file.filename,
        fileSize:file.size,
        filePath:file.path,
        fileUploadTime:dat.toLocaleTimeString("en-US",{timeZone:'asia/dhaka'}) + " - " + dat.toLocaleDateString("en-US",{timeZone:'asia/dhaka'})
    });

    const fileUploaddatasave=await fileUpquery.save();
    if(fileUploaddatasave){
        res.render("index",{
            fileName:req.file.filename
          })
    }else{
        res.send("not Uplod")

    }
 

}


const getFileDownloadController=(req,res)=>{
const imgLink=req.params.name;
res.render("image",{
    image:imgLink
  })
} 


const getDownloadpageController=async(req,res)=>{
    const fileId=req.params.fileid;
    const fileFindquery=await majashereModel.findOne({fileReplaceName:fileId});
    if(fileFindquery && fileFindquery.filePassword!=="null"){
        res.render("download",{
            fileName:fileFindquery.fileOrginalName,
            filePass:fileFindquery.filePassword,
            filereplaceName:fileFindquery.fileReplaceName,
            fileSize:fileFindquery.fileSize,
            filePath:fileFindquery.filePath,
        })
    }else if(fileFindquery){
        res.render("download",{
            fileName:fileFindquery.fileOrginalName,
            filereplaceName:fileFindquery.fileReplaceName,
            fileSize:fileFindquery.fileSize,
            filePath:fileFindquery.filePath,
        })

    }else{
        res.send("dawload Error")
    }
} 

const getDownloadController=async(req,res)=>{
    try {
        const fileID=req.params.fileid;
        const wpassverify=req.body.wpassverify;
     
        const downFind=await majashereModel.findOne({fileReplaceName:fileID})
        if(downFind.filePassword!="null"){
            if(downFind.filePassword==wpassverify){
                res.download(downFind.filePath)
            }else{
                res.render("download",{
                    fileName:downFind.fileOrginalName,
                    fileInMessage:"incorrect Password",
                    filePass:downFind.filePassword,
                    filereplaceName:downFind.fileReplaceName,
                    fileSize:downFind.fileSize,
                    filePath:downFind.filePath,
                })
                
            }
        }else{
            res.download(downFind.filePath)
        }
        

    } catch (error) {
        
        res.send(error)
    }
}




module.exports={getFileController,getFileUploadController,getFileDownloadController,getDownloadpageController,getDownloadController}