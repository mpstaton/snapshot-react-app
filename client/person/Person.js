import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import auth from './../auth/auth-helper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import {create} from './api-person.js'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import {Link} from 'react-router-dom'
import ContactCard from '../contact-card/ContactCard'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
      },
      error: {
        verticalAlign: 'middle'
      },
      title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
      }
  })

class Person extends Component {
  constructor({match}) {
    super()
          this.state = {
                persons: [],
                person: '',
                called: '',
                givenName: '',
                surName: '',
                email: '',
                error: '',
                open: false,
                shouldContactCardBeDisplayed: false
            }
            this.match = match
          }


    handleChange = name => event => {
        this.setState({[name]: event.target.value})
      }
    
    clickSubmit = () => {
        const person = {
          called: this.state.called || undefined,
          surName: this.state.surName|| undefined,
          email: this.state.email || undefined
        }
        console.log(person)
        console.log(`${called.value}, ${surName.value}, ${email.value}`)
        create(person).then((data) => {
          console.log("reached Create Person function")
          console.log(data)
          if (data.error) {
            this.setState({error: data.error})
          } else {
            // this.props.addUpdate(data)
            // person has been created successfully, show contact card
            console.log("person has been created and contact card should display")
            this.setState({shouldContactCardBeDisplayed: true, person: data})
          }
        })
      }

      render() {
        const {classes} = this.props
        return (<div>
            <Card className={classes.card}>
            <CardContent>
            <Typography type="headline" component="h2" className={classes.title}>
                Add a Person
            </Typography>
              <TextField id="called" label="Called" className={classes.textField} value={this.state.called} onChange={this.handleChange('called')} margin="normal"/><br/>
              <TextField id="surName" label="surName" className={classes.textField} value={this.state.surName} onChange={this.handleChange('surName')} margin="normal"/><br/>
              <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
            </CardContent>
            <br/> {
            this.state.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {this.state.error}</Typography>)
          }
            <CardActions>
              <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
            </CardActions>
            </Card>
          {this.state.shouldContactCardBeDisplayed && 
            <ContactCard classes={classes} person={this.state.person} />}

        </div>)
      }

}
Person.propTypes = {
    classes: PropTypes.object.isRequired
  }



  export default withStyles(styles)(Person)