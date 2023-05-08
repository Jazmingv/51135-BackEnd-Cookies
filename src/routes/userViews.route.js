import { Router } from 'express';
const UserViewsRouter = Router();

UserViewsRouter.get('/login', (req, res) => {
    res.render("login");
})

UserViewsRouter.get('/register', (req, res) => {
    res.render("register");
})

UserViewsRouter.get('/', (req, res) => {
    res.send({
        user: req.session.user
    });
})

export default UserViewsRouter;