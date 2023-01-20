const router = require("express").Router();

const { GetUsers, GetUser, CreateUser, UpdateUser, DeleteUser } = require('../controllers/UsersController');
const formValidator = require("../middlewares/users/FormValidator");

router.get("", GetUsers);
router.get("/:userId", GetUser);
router.post("", formValidator, CreateUser);
router.put("/:userId", formValidator, UpdateUser);
router.delete("/:userId", DeleteUser);


module.exports = router;