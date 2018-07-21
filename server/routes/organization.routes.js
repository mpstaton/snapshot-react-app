import express from 'express'
import organizationCtrl from '../controllers/organization.controller'

const router = express.Router()

router.route('/api/organizations')
  .post(organizationCtrl.create)
//  .get(organizationCtrl.list)

export default router