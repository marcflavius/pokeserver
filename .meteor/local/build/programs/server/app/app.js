var require = meteorInstall({"imports":{"collections":{"pokemon.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/collections/pokemon.js                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Pokemon: () => Pokemon
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
const Pokemon = new Mongo.Collection('pokemon');
Meteor.publish('pokemon', () => {
  return Pokemon.find({});
});
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Pokemon;
module.link("../imports/collections/pokemon", {
  Pokemon(v) {
    Pokemon = v;
  }

}, 1);
let fs;
module.link("fs", {
  default(v) {
    fs = v;
  }

}, 2);
Meteor.startup(() => {
  console.log("start");
});
Meteor.methods({
  'pokemon.add': function (loc) {
    console.log('adding...');
    let user = this.userId;

    if (!user) {
      console.log('user not signed in');
      return undefined;
    }

    let range = 0.027;
    let rang1 = Math.random() > 0.5 ? range : -range;
    let rang2 = Math.random() > 0.5 ? range : -range;
    let long = loc.longitude;
    long = long + Math.random() * rang1;
    let lat = loc.latitude;
    lat = lat + Math.random() * rang2;
    let iconPath = process.env.PWD + '/public';
    let icons = fs.readdirSync(iconPath);
    let min = Math.ceil(0);
    let max = Math.ceil(250);
    let random = Math.floor(Math.random() * (max - min));
    return Pokemon.insert({
      image: icons[random],
      longitude: long,
      latitude: lat
    });
  },
  'pokemon.subtract': function () {
    let user = this.userId;

    if (!user) {
      console.log('user not signed in');
      return undefined;
    }

    return Pokemon.remove({});
  }
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9jb2xsZWN0aW9ucy9wb2tlbW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJQb2tlbW9uIiwiTWV0ZW9yIiwibGluayIsInYiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJwdWJsaXNoIiwiZmluZCIsImZzIiwiZGVmYXVsdCIsInN0YXJ0dXAiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImxvYyIsInVzZXIiLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJyYW5nZSIsInJhbmcxIiwiTWF0aCIsInJhbmRvbSIsInJhbmcyIiwibG9uZyIsImxvbmdpdHVkZSIsImxhdCIsImxhdGl0dWRlIiwiaWNvblBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwiaWNvbnMiLCJyZWFkZGlyU3luYyIsIm1pbiIsImNlaWwiLCJtYXgiLCJmbG9vciIsImluc2VydCIsImltYWdlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxTQUFPLEVBQUMsTUFBSUE7QUFBYixDQUFkO0FBQXFDLElBQUlDLE1BQUo7QUFBV0gsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRCxRQUFNLENBQUNFLENBQUQsRUFBRztBQUFDRixVQUFNLEdBQUNFLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsS0FBSjtBQUFVTixNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNFLE9BQUssQ0FBQ0QsQ0FBRCxFQUFHO0FBQUNDLFNBQUssR0FBQ0QsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUd4RyxNQUFNSCxPQUFPLEdBQUcsSUFBSUksS0FBSyxDQUFDQyxVQUFWLENBQXFCLFNBQXJCLENBQWhCO0FBRVBKLE1BQU0sQ0FBQ0ss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ZixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRlb3IgfSAgICAgZnJvbSAnbWV0ZW9yL21ldGVvcidcbmltcG9ydCB7IE1vbmdvIH0gICAgICBmcm9tICdtZXRlb3IvbW9uZ28nXG5cbmV4cG9ydCBjb25zdCBQb2tlbW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3Bva2Vtb24nKVxuXG5NZXRlb3IucHVibGlzaCgncG9rZW1vbicsICgpID0+IHtcblx0cmV0dXJuIFBva2Vtb24uZmluZCh7fSlcbn0pXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSAgZnJvbSAnbWV0ZW9yL21ldGVvcidcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9pbXBvcnRzL2NvbGxlY3Rpb25zL3Bva2Vtb24nXG5pbXBvcnQgZnMgICAgICAgICAgZnJvbSAnZnMnXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJzdGFydFwiKVxuXG59KVxuXG5NZXRlb3IubWV0aG9kcyh7XG5cdCdwb2tlbW9uLmFkZCc6IGZ1bmN0aW9uIChsb2MpIHtcblx0XHRjb25zb2xlLmxvZygnYWRkaW5nLi4uJylcblxuXHRcdGxldCB1c2VyID0gdGhpcy51c2VySWRcblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd1c2VyIG5vdCBzaWduZWQgaW4nKVxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZFxuXHRcdH1cblx0XHRsZXQgcmFuZ2UgPSAwLjAyN1xuXHRcdGxldCByYW5nMSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyByYW5nZSA6IC1yYW5nZVxuXHRcdGxldCByYW5nMiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyByYW5nZSA6IC1yYW5nZVxuXHRcdGxldCBsb25nID0gbG9jLmxvbmdpdHVkZVxuXHRcdGxvbmcgPSBsb25nICsgTWF0aC5yYW5kb20oKSAqIChyYW5nMSlcblx0XHRsZXQgbGF0ID0gbG9jLmxhdGl0dWRlXG5cdFx0bGF0ID0gbGF0ICsgTWF0aC5yYW5kb20oKSAqIChyYW5nMilcblx0XHRsZXQgaWNvblBhdGggPSBwcm9jZXNzLmVudi5QV0QgKyAnL3B1YmxpYydcblx0XHRsZXQgaWNvbnMgPSBmcy5yZWFkZGlyU3luYyhpY29uUGF0aClcblxuXHRcdGxldCBtaW4gPSBNYXRoLmNlaWwoMClcblx0XHRsZXQgbWF4ID0gTWF0aC5jZWlsKDI1MClcblx0XHRsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpXG5cdFx0cmV0dXJuIFBva2Vtb24uaW5zZXJ0KHtcblx0XHRcdGltYWdlOiBpY29uc1tyYW5kb21dLFxuXHRcdFx0bG9uZ2l0dWRlOiBsb25nLFxuXHRcdFx0bGF0aXR1ZGU6IGxhdFxuXHRcdH0pXG5cdH0sXG5cdCdwb2tlbW9uLnN1YnRyYWN0JzogZnVuY3Rpb24gKCkge1xuXG5cdFx0bGV0IHVzZXIgPSB0aGlzLnVzZXJJZFxuXHRcdGlmICghdXNlcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ3VzZXIgbm90IHNpZ25lZCBpbicpXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkXG5cdFx0fVxuXHRcdHJldHVybiBQb2tlbW9uLnJlbW92ZSh7fSlcblx0fVxuXG59KVxuIl19
