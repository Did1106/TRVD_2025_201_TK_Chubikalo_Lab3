const express = require('express');
const multer = require('multer');
const router = express.Router();
const userController = require('../controllers/userController');

const upload = multer({ dest: 'src/public/img/' });

router.get('/', userController.listUsers);


router.get('/create', userController.showCreateForm);
router.post('/create', upload.single('photo'), userController.createUser);

router.get('/edit/:id', userController.showEditForm);
router.post('/edit/:id', upload.single('photo'), userController.updateUser);

router.post('/delete/:id', userController.deleteUser);

module.exports = router;
