const {is} = require('../../utils');

const validate = (input) => {
  if (!is.hex) {
    throw new Error('Expected a hex input to valid')
  }
  if (input.length !== 24) {
    throw new Error('Expected a hex input to 12 bytes long')
  }
  const secFromEpoch = parseInt(input.slice(0, 8).toString(), 16) * 1000;
  if (new Date(secFromEpoch).toString() === 'Invalid Date') {
    throw new Error('Expected hex input to be valid. Invalid date bytes');
  }
  return true;
};
module.exports = validate;
