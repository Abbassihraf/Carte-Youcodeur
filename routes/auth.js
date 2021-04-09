const express = require ('express');
const {hello, signup, signin, signout} = require('../controllers/authController');
const { userSignUpValidator } = require('../middlewares/userValidator');
const router = express.Router();
const { requireSignIn} = require('../middlewares/auth');

router.get('/', hello);

router.post('/signup', userSignUpValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/hello', requireSignIn, (req, res) =>{
    res.send('hello there');
});

module.exports = router;