import jwt from"jsonwebtoken"

const createUserToken = async(user, req, res) =>{

//Create token
const token = jwt.sign({
    name:user.name,
    id:user_id
}, "nossosecret")

//Return token
res.status(200).json({
    message:"Você esta autenticado",
    token:token,
    userId: user_id
})

}

export default createUserToken