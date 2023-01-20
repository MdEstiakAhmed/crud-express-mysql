const router = require("express").Router();

const { SignIn, Signup } = require('../controllers/AuthController');
const loginValidator = require("../middlewares/auth/LoginValidator");

router.post("/login", loginValidator, SignIn);
router.get("/signup", Signup);


module.exports = router;