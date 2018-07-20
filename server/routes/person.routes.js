import express from 'express'
import personCtrl from '../controllers/person.controller'

const router = express.Router()

router.route('/api/persons')
  .get(personCtrl.list)
  .post(personCtrl.create)

export default router