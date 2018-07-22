import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import {create} from './api-organization.js'
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

  class Organization extends Component {
    constructor({match}) {
      super()
            this.state = {
                  organization: '',
                  called: '',
                  emailSuffix: '',
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
        const organization = {
            called: this.state.called || undefined,
            emailSuffix: this.state.emailSuffix || undefined
          }
          console.log(organization)
          create(organization).then((data) => {
            console.log("reached Create Organization function")
            console.log(data)
            if (data.error) {
              this.setState({error: data.error})
            } else {
              // this.props.addUpdate(data)
              // organization has been created successfully, show contact card
              console.log("organization has been created and contact card should display")
              //this.setState({shouldContactCardBeDisplayed: true, organization: data})
            }
          })
        }

        render() {
            const {classes} = this.props
            console.log("organizationnssss")
            console.log(this.state.organizations)
            return (<div>
                <Card className={classes.card}>
                <CardContent>
                <Typography type="headline" component="h2" className={classes.title}>
                    Add an Organization
                </Typography>
                  <TextField id="called" label="Called" className={classes.textField} value={this.state.called} onChange={this.handleChange('called')} margin="normal"/><br/>
                  <TextField id="emailSuffix" type="emailSuffix" label="EmailSuffix" className={classes.textField} value={this.state.emailSuffix} onChange={this.handleChange('emailSuffix')} margin="normal"/><br/>
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
              {/*this.state.shouldContactCardBeDisplayed && 
              <ContactCard classes={classes} organization={this.state.organization} />*/}
    
            </div>)
          }
        }

export default withStyles(styles)(Organization)