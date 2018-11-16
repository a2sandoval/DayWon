const db = require('../models');

module.exports = async function findUser(id) {
  var user = db.User.findById(id, (err, res) => {
    user = res;
    console.log(user); 
    console.log("logging user");
    return user;
})
let userResult = await user;
console.log(userResult);
console.log("logggggginggggg ressssulltltlttltl");
return userResult;
}