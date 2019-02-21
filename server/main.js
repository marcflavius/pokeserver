import { Meteor }  from 'meteor/meteor'
import pockemon    from './pokemon'

Meteor.startup(() => {
	console.log("start")

})

Meteor.methods({
	...pockemon
})
