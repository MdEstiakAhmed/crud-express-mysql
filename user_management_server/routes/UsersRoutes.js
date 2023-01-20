const router = require("express").Router();

const { GetUsers, GetUser, CreateUser, UpdateUser, DeleteUser } = require('../controllers/UsersController');
const { checkLogin } = require("../middlewares/common/checkAuth");
const formValidator = require("../middlewares/users/FormValidator");

router.get("", checkLogin, GetUsers);
router.get("/:userId", checkLogin, GetUser);
router.post("", formValidator, checkLogin, CreateUser);
router.put("/:userId", checkLogin, formValidator, UpdateUser);
router.delete("/:userId", checkLogin, DeleteUser);


module.exports = router;