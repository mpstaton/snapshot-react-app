import Person from '../models/person.model'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import _ from 'lodash'

const create = (req, res, next) => {
    const person = new Person(req.body)
    person.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Person created!"
      })
    })
  }

  const list = (req, res) => {
    Person.find((err, persons) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(persons)
    }).select('name email updated created')
  }

  export default {
    create,
    list
  }