import { Meteor }     from 'meteor/meteor'
import { Mongo }      from 'meteor/mongo'

export const Pokemon = new Mongo.Collection('pokemon')

Meteor.publish('pokemon', () => {
	return Pokemon.find({})
})
