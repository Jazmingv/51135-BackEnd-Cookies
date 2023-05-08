import userModel from '../models/users.model.js';

//REGISTER
export const register = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    console.log("Registrando usuario:");
    console.log(req.body);

    const exists = await userModel.findOne({ email });
    if (exists) {
        return res.status(400).send({ status: "error", message: "Usuario ya existe." });
    }
    const user = {
        first_name,
        last_name,
        email,
        age,
        password,
        role
    };
    const result = await userModel.create(user);
    res.status(201).send({ status: "success", message: "Usuario creado con extito con ID: " + result.id });
};

//LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) return res.status(401).send({ status: "error", error: "Incorrect credentials" });
    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({ status: "success", payload: req.session.user, message: "Login succeded" });
}

//LOGOUT
export const logout = (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.json({ error: "Logout error", msg: 'Something went wrong while logging out' });
        }
        res.clearCookie('connect.sid').send("Session closed");
    })
}

//PRIVATE
export const privateEndpoint = (req, res) => {
    res.send("Private endpoint :3");
}