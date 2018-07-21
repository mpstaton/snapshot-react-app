import ContactCard from '../models/contact-card.model'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import _ from 'lodash'

const create = (req, res, next) => {
    console.log("WE ARE IN CONTROLLER CREATE CARD")
    console.log(req)
    const contactCard = new ContactCard(req.body)
    contactCard.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "ContactCard created!"
      })
    })
  }

  const list = (req, res) => {
    ContactCard.find((err, contactCards) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(contactCards)
    })
  }

  export default {
    create,
    list
  }