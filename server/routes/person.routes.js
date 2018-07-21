import express from 'express'
import personCtrl from '../controllers/person.controller'

const router = express.Router()

router.route('/api/persons')
  .post(personCtrl.create)
  .get(personCtrl.list)

export default router