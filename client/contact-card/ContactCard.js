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
import {create} from './api-contact-card.js'
import {list} from '../organization/api-organization.js'
import Autocomplete from 'react-autocomplete'

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

  class ContactCard extends Component {
    constructor(props) {
  
      super(props)
        console.log("props")
        console.log(this.props)
        // this.getOrganizations()
        console.log("ORGANIZATIONS ARE:")
        console.log(this.props.organizations)
        this.state = {
                organizations: this.props.organizations,
                forPerson: this.props.person,
                oid: '',
                atOrganization: '',
                title: '',
                email: '',
                mobile: '',
                error: '',
                open: false
            }
            // this.match = match
        }

        getOrganizations() {
            console.log("fetching organizations from ContactCard")
            list()
            .then(data => console.log(data))
            .then(data => this.setState({ organizations: data }, () => console.log("SET ORGANIZATIONS")) )
        }


        handleChange = name => event => {
            this.setState({[name]: event.target.value})
            }

        clickSubmit = () => {
            console.log(this.state.forPerson._id)
            const contactCard = {
                forPerson: this.state.forPerson || undefined,
                atOrganization: this.state.oid|| undefined,
                title: this.state.title|| undefined,
                email: this.state.email || undefined,
                mobile: this.state.mobile|| undefined
            }
            console.log(contactCard)
            create(contactCard).then((data) => {
                console.log("reached Create ContactCard function in ContactCard.js")
                console.log(data)
                if (data.error) {
                this.setState({error: data.error})
                } else {
                console.log('What do we do next?')
                }
            })
        }
        getOrgNameFromId(orgId) {
            if (orgId.length !== 24) return ""
            let orgs = this.state.organizations
            let org = orgs.find((o) => {
              if (o._id === orgId) return o
            })
            return org.called
          }

        render() {
            const classes = this.props.classes;
            console.log("organizationnssss")
            console.log(this.state.organizations)
            return (<div>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Add a ContactCard to Person {this.props.person.called}
                    </Typography>
                    <TextField id="title" label="Title" className={classes.textField} value={this.state.title} onChange={this.handleChange('title')} margin="normal"/><br/>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <p>hello</p>
                    {this.state.organizations && this.state.organizations.map((org) => {
                        <p>{org.called}</p>
                    })}
                    {this.state.organizations &&
                    <Autocomplete
                        getItemValue={ org => `${org._id}` }
                        items= {this.state.organizations}
                        shouldItemRender={(org, ovalue) => org.called.toLowerCase().indexOf(ovalue.toLowerCase()) > -1}
                        renderItem={(org, isHighlighted) =>
                        <div key={ org._id } style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {org.called}
                        </div>
                        }
                        value={this.state.ovalue}
                        onChange={(e) => this.setState({ ovalue: e.target.value})}
                        onSelect= { (oid) => {
                        let ovalue = this.getOrgNameFromId(oid)
                        return this.setState({ oid, ovalue})
                        }}
                    />}
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
            </div>)
        }
}

export default withStyles(styles)(ContactCard)