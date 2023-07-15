const router=require('express').Router();


//import separated controller
const {uploadController,imgController,mailController}=require('./shereController');

//import validation controller
const upload=require('./multerFilevalidation');

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/img/:id',imgController)

router.post('/upload',upload.single('avatar'),uploadController);

router.get('/mail',mailController)



module.exports=router;





