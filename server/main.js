import { Meteor }  from 'meteor/meteor'
import { Pokemon } from '../imports/collections/pokemon'
import fs from 'fs'
Meteor.startup(() => {
	console.log("start")

})

Meteor.methods({
	'pokemon.add': function (loc) {
		console.log('adding...')

		let user = this.userId
		if (!user) {
			console.log('user not signed in')
			return undefined
		}
		let range = 0.035
		let rang1 = Math.random() > 0.5 ? range : -range
		let rang2 = Math.random() > 0.5 ? range : -range
		let long = loc.longitude
		long = long + Math.random() * (rang1)
		let lat = loc.latitude
		lat = lat + Math.random() * (rang2)
		let iconPath = process.env.PWD + '/public'
		let icons = fs.readdirSync(iconPath)

		let min = Math.ceil(0)
		let max = Math.ceil(250)
		let random = Math.floor(Math.random() * (max - min))
		return Pokemon.insert({
			image: icons[random],
			longitude: long,
			latitude: lat
		})
	}

})
