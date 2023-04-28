import User from "../models/User.js"
import bcrypt from "bcrypt";
import createUserToken from "../helpers/create-user-token.js";

class UserController {
    static  async register (req, res){
        
        const {name, email, phone, password, confirpassword} = req.body

        if(!name) {
            res.status(422).json({'message': 'O nome é obrigatório!'})
            return
        }

        
        if(!email) {
            res.status(422).json({'message': 'O email é obrigatório!'})
            return
        }

        
        if(!phone) {
            res.status(422).json({'message': 'O telefone é obrigatório!'})
            return
        }

        if(!password) {
            res.status(422).json({'message': 'A senha é obrigatório!'})
            return
        }

        if(!confirpassword) {
            res.status(422).json({'message': 'A confirmação de senha é obrigatório!'})
            return
        }

        if(password !== confirpassword) {
            res.status(422).json({"message":'A senha e confirmação de senha precisam ser iguais!'})
            return
        }

        //Verificando se o email cadastrado já existe
        const userExiste = await User.findOne({email:email})

        if(userExiste) {
            res.status(422).json({
                "message": "Por favor, ultilize outro email"
            })

            return
        }

        /// bcrypt - npm documentação de referência  ///
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)

        //Criando novo usuário
        const user = new User({
            name,
            email,
            phone,
            password: hash
        })

        try {

           const newUser = await user.save() 
           await createUserToken(newUser, req, res)

        } catch (error) {

            res.status(500).json({message: error})
        }


    }
}

export default UserController