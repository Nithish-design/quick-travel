const Router = require("express")


const  { getall,create,update,del, getById, getloginbypassword }  = require("../Controllers/Usercontroller");
const router = Router()

//sampletasks
router.get("/userget",getall);
router.post("/createuserpost",create);
router.post("/update/:id",update);
router.post("/delete/:id",del);
router.post("/getbyid/:id",getById);
router.post("/getloginbypassword",getloginbypassword);
module.exports = router