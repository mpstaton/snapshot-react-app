import express from 'express'
import contactCardCtrl from '../controllers/contactCard.controller'

const router = express.Router()

router.route('/api/contact-cards')
  .post(contactCardCtrl.create)
  .get(contactCardCtrl.list)

export default router