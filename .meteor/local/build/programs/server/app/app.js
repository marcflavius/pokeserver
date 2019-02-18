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

    let range = 0.035;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9jb2xsZWN0aW9ucy9wb2tlbW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJQb2tlbW9uIiwiTWV0ZW9yIiwibGluayIsInYiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJwdWJsaXNoIiwiZmluZCIsImZzIiwiZGVmYXVsdCIsInN0YXJ0dXAiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImxvYyIsInVzZXIiLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJyYW5nZSIsInJhbmcxIiwiTWF0aCIsInJhbmRvbSIsInJhbmcyIiwibG9uZyIsImxvbmdpdHVkZSIsImxhdCIsImxhdGl0dWRlIiwiaWNvblBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwiaWNvbnMiLCJyZWFkZGlyU3luYyIsIm1pbiIsImNlaWwiLCJtYXgiLCJmbG9vciIsImluc2VydCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxTQUFPLEVBQUMsTUFBSUE7QUFBYixDQUFkO0FBQXFDLElBQUlDLE1BQUo7QUFBV0gsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRCxRQUFNLENBQUNFLENBQUQsRUFBRztBQUFDRixVQUFNLEdBQUNFLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsS0FBSjtBQUFVTixNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNFLE9BQUssQ0FBQ0QsQ0FBRCxFQUFHO0FBQUNDLFNBQUssR0FBQ0QsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUd4RyxNQUFNSCxPQUFPLEdBQUcsSUFBSUksS0FBSyxDQUFDQyxVQUFWLENBQXFCLFNBQXJCLENBQWhCO0FBRVBKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlLFNBQWYsRUFBMEIsTUFBTTtBQUMvQixTQUFPTixPQUFPLENBQUNPLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQSxDQUZELEU7Ozs7Ozs7Ozs7O0FDTEEsSUFBSU4sTUFBSjtBQUFXSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNELFFBQU0sQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFVBQU0sR0FBQ0UsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJSCxPQUFKO0FBQVlGLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGdDQUFaLEVBQTZDO0FBQUNGLFNBQU8sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFdBQU8sR0FBQ0csQ0FBUjtBQUFVOztBQUF0QixDQUE3QyxFQUFxRSxDQUFyRTtBQUF3RSxJQUFJSyxFQUFKO0FBQU9WLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLElBQVosRUFBaUI7QUFBQ08sU0FBTyxDQUFDTixDQUFELEVBQUc7QUFBQ0ssTUFBRSxHQUFDTCxDQUFIO0FBQUs7O0FBQWpCLENBQWpCLEVBQW9DLENBQXBDO0FBRzNKRixNQUFNLENBQUNTLE9BQVAsQ0FBZSxNQUFNO0FBQ3BCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBRUEsQ0FIRDtBQUtBWCxNQUFNLENBQUNZLE9BQVAsQ0FBZTtBQUNkLGlCQUFlLFVBQVVDLEdBQVYsRUFBZTtBQUM3QkgsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUVBLFFBQUlHLElBQUksR0FBRyxLQUFLQyxNQUFoQjs7QUFDQSxRQUFJLENBQUNELElBQUwsRUFBVztBQUNWSixhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLGFBQU9LLFNBQVA7QUFDQTs7QUFDRCxRQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCSCxLQUF0QixHQUE4QixDQUFDQSxLQUEzQztBQUNBLFFBQUlJLEtBQUssR0FBR0YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCSCxLQUF0QixHQUE4QixDQUFDQSxLQUEzQztBQUNBLFFBQUlLLElBQUksR0FBR1QsR0FBRyxDQUFDVSxTQUFmO0FBQ0FELFFBQUksR0FBR0EsSUFBSSxHQUFHSCxJQUFJLENBQUNDLE1BQUwsS0FBaUJGLEtBQS9CO0FBQ0EsUUFBSU0sR0FBRyxHQUFHWCxHQUFHLENBQUNZLFFBQWQ7QUFDQUQsT0FBRyxHQUFHQSxHQUFHLEdBQUdMLElBQUksQ0FBQ0MsTUFBTCxLQUFpQkMsS0FBN0I7QUFDQSxRQUFJSyxRQUFRLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLEdBQWtCLFNBQWpDO0FBQ0EsUUFBSUMsS0FBSyxHQUFHdkIsRUFBRSxDQUFDd0IsV0FBSCxDQUFlTCxRQUFmLENBQVo7QUFFQSxRQUFJTSxHQUFHLEdBQUdiLElBQUksQ0FBQ2MsSUFBTCxDQUFVLENBQVYsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBR2YsSUFBSSxDQUFDYyxJQUFMLENBQVUsR0FBVixDQUFWO0FBQ0EsUUFBSWIsTUFBTSxHQUFHRCxJQUFJLENBQUNnQixLQUFMLENBQVdoQixJQUFJLENBQUNDLE1BQUwsTUFBaUJjLEdBQUcsR0FBR0YsR0FBdkIsQ0FBWCxDQUFiO0FBQ0EsV0FBT2pDLE9BQU8sQ0FBQ3FDLE1BQVIsQ0FBZTtBQUNyQkMsV0FBSyxFQUFFUCxLQUFLLENBQUNWLE1BQUQsQ0FEUztBQUVyQkcsZUFBUyxFQUFFRCxJQUZVO0FBR3JCRyxjQUFRLEVBQUVEO0FBSFcsS0FBZixDQUFQO0FBS0E7QUEzQmEsQ0FBZixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRlb3IgfSAgICAgZnJvbSAnbWV0ZW9yL21ldGVvcidcbmltcG9ydCB7IE1vbmdvIH0gICAgICBmcm9tICdtZXRlb3IvbW9uZ28nXG5cbmV4cG9ydCBjb25zdCBQb2tlbW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3Bva2Vtb24nKVxuXG5NZXRlb3IucHVibGlzaCgncG9rZW1vbicsICgpID0+IHtcblx0cmV0dXJuIFBva2Vtb24uZmluZCh7fSlcbn0pXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSAgZnJvbSAnbWV0ZW9yL21ldGVvcidcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9pbXBvcnRzL2NvbGxlY3Rpb25zL3Bva2Vtb24nXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwic3RhcnRcIilcblxufSlcblxuTWV0ZW9yLm1ldGhvZHMoe1xuXHQncG9rZW1vbi5hZGQnOiBmdW5jdGlvbiAobG9jKSB7XG5cdFx0Y29uc29sZS5sb2coJ2FkZGluZy4uLicpXG5cblx0XHRsZXQgdXNlciA9IHRoaXMudXNlcklkXG5cdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndXNlciBub3Qgc2lnbmVkIGluJylcblx0XHRcdHJldHVybiB1bmRlZmluZWRcblx0XHR9XG5cdFx0bGV0IHJhbmdlID0gMC4wMzVcblx0XHRsZXQgcmFuZzEgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gcmFuZ2UgOiAtcmFuZ2Vcblx0XHRsZXQgcmFuZzIgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gcmFuZ2UgOiAtcmFuZ2Vcblx0XHRsZXQgbG9uZyA9IGxvYy5sb25naXR1ZGVcblx0XHRsb25nID0gbG9uZyArIE1hdGgucmFuZG9tKCkgKiAocmFuZzEpXG5cdFx0bGV0IGxhdCA9IGxvYy5sYXRpdHVkZVxuXHRcdGxhdCA9IGxhdCArIE1hdGgucmFuZG9tKCkgKiAocmFuZzIpXG5cdFx0bGV0IGljb25QYXRoID0gcHJvY2Vzcy5lbnYuUFdEICsgJy9wdWJsaWMnXG5cdFx0bGV0IGljb25zID0gZnMucmVhZGRpclN5bmMoaWNvblBhdGgpXG5cblx0XHRsZXQgbWluID0gTWF0aC5jZWlsKDApXG5cdFx0bGV0IG1heCA9IE1hdGguY2VpbCgyNTApXG5cdFx0bGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKVxuXHRcdHJldHVybiBQb2tlbW9uLmluc2VydCh7XG5cdFx0XHRpbWFnZTogaWNvbnNbcmFuZG9tXSxcblx0XHRcdGxvbmdpdHVkZTogbG9uZyxcblx0XHRcdGxhdGl0dWRlOiBsYXRcblx0XHR9KVxuXHR9XG5cbn0pXG4iXX0=
