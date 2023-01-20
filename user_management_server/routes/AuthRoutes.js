const router = require("express").Router();

const { SignIn, Signup } = require('../controllers/AuthController');

router.post("/login", SignIn);
router.get("/signup", Signup);


module.exports = router;