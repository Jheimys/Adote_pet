import User from "../models/User.js"

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
    }
}

export default UserController