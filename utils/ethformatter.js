var BigNumber = require('bignumber.js');

var Ether = new BigNumber(10e17);

function formatAmount(amount) {
  var ret = new BigNumber(amount.toString());

  return ret.dividedBy(Ether) + ' KAI';
}
module.exports = formatAmount;
