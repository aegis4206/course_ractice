const {Router} = require('express')
const controller = require("./controller")

const router = Router();

router.get('/',controller.getOrderList)
router.post('/',controller.postOrder)
router.delete('/:id',controller.deleteOrder)



module.exports = router;