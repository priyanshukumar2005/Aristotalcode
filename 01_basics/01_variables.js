const accountId = 1444235
let accountEmail = "12vermapriyanshu@gmail.com"
var accountPassword = "1234567"
accountCity = "bihar sharif"
let accountState;

// accountId = 2 // not allowed

accountEmail = "kc@hb.com"
accountPassword = "3456781"
accountCity = "patna"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])