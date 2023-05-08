import { Router } from 'express';
import * as Users from "../controllers/users.controller.js";

const UserRouter = Router();

UserRouter.post("/register", Users.register);

UserRouter.post("/login", Users.login);

UserRouter.get("/logout", Users.logout);

UserRouter.get("/private", auth, Users.privateEndpoint);

// Auth middleware
function auth(req, res, next) {
    if (req.session.user === 'pepe' && req.session.admin) {
        return next();
    } else {
        return res.status(403).send('Usuario no autorizado, para ingresar al recurso')
    }
}

export default UserRouter;