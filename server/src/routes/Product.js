const express = require('express')
const router = express.Router()
const controller = require('../controllers/Product')

// Поиск по объекту
router.get('/:key/:value', controller.getByObject)
// Добавление отзыва товару
router.post('/review/:id', controller.addReview)

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)


module.exports = router