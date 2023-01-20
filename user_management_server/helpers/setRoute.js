const UserRoutes = require('../routes/UsersRoutes');
const AuthRoutes = require('../routes/AuthRoutes');

const routes = [
    {
        path: '/users',
        handler: UserRoutes
    },
    {
        path: '/auth',
        handler: AuthRoutes
    },
    {
        path: '/*',
        handler: (req, res) => res.status(404).json({ status: false, message: "not found" })
    },
    {
        path: '/',
        handler: (req, res) => res.status(200).json({ status: true, message: "Welcome to the API" })
    },
];


module.exports = app => {
    routes.forEach(route => {
        app.use(`${process.env.ENDPOINT_BASE_URL}${route.path}`, route.handler);
    });
    app.use("/", (req, res) => { res.status(200).json({ status: true, message: "Welcome to the server" }) });
}