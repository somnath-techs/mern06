// const express = require('express');
// const router = express.Router();
// // const userApi = require('../controller/demo')
// // const myMIddleware = require('../middleware/index')
// // const Profilemid = require('../middleware/profileMIddleware')
// //  router.get('/', userApi.home);
// //  router.post('/', userApi.home);
// // let value = {
// //     name : "Rahul",
// //     age : 23
// // }
// router.route('/img/Screenshot (268).png',)
// router.route('/').get(userApi.home);
// router.route('/profile/:user').get(Profilemid,userApi.profile);
// router.route('/registration').post(userApi.Registration);


// module.exports = router
// // https://localhost:4000/user/profile/sumon
const express = require('express');
const UserController = require('../controller/UserController');


const router = express.Router();

router.route('/add-data').post(UserController.addData)
router.route('/get-data').get(UserController.getData)
router.route('/update-data/:id').put(UserController.updateData)
router.route('/delete-data/:id').delete(UserController.deleteData)

module.exports = router