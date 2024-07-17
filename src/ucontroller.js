const sampleModel = require('../Models/Usermodel')

module.exports.getall = async (req,res) => {
    await sampleModel.find({},{
        _id:1,
        name:1,
        username:1,
        gender:1,
        phonenumber:1,
        age:1,
        email:1,
        password:1,
        confirmpassword:1,
        
    }).then((sample) => {
        res.status(200).json(sample);

    }).catch((err) => {
        res.status(500).json({ error: "error getting sample"+ err})
    });
}


//INSERT
module.exports.create = async(req,res) =>{
    const {name,username, gender, phonenumber, age, email,password,confirmpassword } = req.body;
    
    await sampleModel.create({name,username, gender, phonenumber, age, email,password,confirmpassword}).then((sample) => {
            res.status(200).json(sample);
        }).catch((err) => {
            res.status(500).json({ error: "Error saving sample"+ err });
        });
};


module.exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { name,username, gender, phonenumber, age, email,password,confirmpassword } = req.body;
  
      // Build the update object based on the fields you want to update
      const updateObject = {};
      if (name) updateObject.name = name;
      if (username) updateObject.username = username;
      if (gender) updateObject.gender = gender;
      if (phonenumber) updateObject.phonenumber = phonenumber;
      if (age) updateObject.age = age;
      if (email) updateObject.email = email;
      if (password) updateObject.password = password;
      if (confirmpassword) updateObject.confirmpassword = confirmpassword;
    
  
      const updatedRecord = await sampleModel.findByIdAndUpdate(id, updateObject, { new: true });
  
      if (!updatedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
  
      // Step 4: Send Response
      res.json({ message: 'Record updated successfully', data: updatedRecord });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

        // DELETE
module.exports.del = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedRecord = await sampleModel.findByIdAndDelete(id);
  
  
      if (!deletedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
          
          // Step 4: Send Response
          res.json({ message: 'Record deleted successfully'});
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      // GETBYID

    module.exports.getById = async (req, res) => {
        try {
          const { id } = req.params;
      
          // Find record by ID
          const record = await sampleModel.findById(id);
      
          if (!record) {
            return res.status(404).json({ error: 'Record not found' });
          }
      
          // If record found, send it in the response
          res.json({ record });
      
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      module.exports.getloginbypassword = async(req,res,next)=>{
        try{
          const{username,password} = req.body;
          const bus = await sampleModel.find({username,password})
          if(!bus || bus.length===0 ){
            return res.status(404).json({message:"Bus not found"})
          }
         return  res.status(200).json({bus})
        }
        catch(err){
          return res.status(404).json({error:"Something is wrong",message:err.message})
        }
        
        }


