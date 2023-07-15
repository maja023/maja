const multer=require('multer');
const nodeMailer=require("nodemailer");

const transporter=require('./mail')
const uploadController=(req,res)=>{
    const file=req.file;
        const fileNmae=file.filename;
        const fileMimetype=file.mimetype;
        const filePath=file.path;
        console.log(file)


        res.render('index',{
            fileName:fileNmae,
            path:filePath
        })
}


const imgController=(req,res)=>{

    const imgId=req.params.id;
    res.render('image',{
     image:imgId
    })
 
 }


 const mailController=async(req,res)=>{
    let info = await transporter.sendMail({
        from: 'freelancermazaharul@gmail.com', // sender address
        to: "mdmajaharul2023@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      res.json({
        info
      })
 }

module.exports={uploadController,imgController,mailController}