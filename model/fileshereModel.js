const mongoose=require('mongoose');

const majashereScima=mongoose.Schema({
   
    fileOrginalName:{
        require:true,
        type:String
    },
    filePassword:{

        type:String
    },
    fileReplaceName:{
        require:true,
        type:String
    },fileSize:{
        require:true,
        type:String
    },
    filePath:{
        require:true,
        type:String
    },
    fileUploadTime:{
        require:true,
        type:String
    }
})

module.exports=mongoose.model("majaShereTable",majashereScima);