import Organization from '../models/organization.model'
import errorHandler from './../helpers/dbErrorHandler'

const create = (req, res, next) => {
    console.log("WE ARE IN CONTROLLER CREATE Organization")
    console.log(req)
    const organization = new Organization(req.body)
    organization.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Organization created!"
      })
    })
  }

const list = (req, res) => {
  Organization.find((err, organizations) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(organizations)
  })
}

  export default {
    create,
    list
  }