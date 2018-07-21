import mongoose from 'mongoose'

/*
Organizations are the central data object around much of the other objects in the schema.
Admins will need to be able to create organizations and add data around them,
much of it going to other collections such as Person, Location, Interaction, Snapshot, etc.

Eventually, Admins need to be able to create forms for Organizations, where Users can update
Organization information, as well as record Snapshots.

It could be possible that the "description" should come from a more
abstract cell system for managing versions of copy management.
*/

const OrganizationSchema = new mongoose.Schema({
  called: {
    type: String
  },
  longName: {
    type: String
  },
  url: {
    type: String
  },
  emailSuffix: {
    type: String
  },
  description: {
    type: String
  },
  parentOrganization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  childOrganizations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }],
  locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }],
  persons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }]
});

export default mongoose.model('Organization', OrganizationSchema);

