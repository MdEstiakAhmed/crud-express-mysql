const router = require("express").Router();

const { GetUsers, GetUser, CreateUser, UpdateUser, DeleteUser } = require('../controllers/UsersController');

router.get("", GetUsers);
router.get("/:userId", GetUser);
router.post("", CreateUser);
router.put("/:userId", UpdateUser);
router.delete("/:userId", DeleteUser);


module.exports = router;