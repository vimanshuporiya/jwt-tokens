 const {BadRequestError} = require('../error')
 const jwt = require('jsonwebtoken')


const login = async(req,res)=>{
      const { username, password}= req.body
       
         if(!username  || !password){
            throw new BadRequestError('please provide email and password ')
         }

   const id = new Date().getDate()

      const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
   
      res.status(200).json({msg:'user Created',token})
    //   re s.send('fake Login/regiuster')
}

const dashboard = async(req,res)=>{
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg:`Hello ,${req.user.username}`,
    secret:`Here is yours authorized data , your Lucky number is ${luckyNumber}`})
}
module.exports = {
    login,dashboard
}