/// Documentação de referência mdn - Crie o módulo de rota do catálogo ///
import express from"express"

const router = express.Router()

// Import controller modules.
import UserController from"../controllers/UserCrontroller.js"


/// BOOK ROUTES ///
router.post('/register', UserController.register)

export default router

/// Atualizar (app.js) server.js ///