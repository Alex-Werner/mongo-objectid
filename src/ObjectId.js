const {crypto} = require('./utils');
const {randomBytes} = crypto;
const validate = require('./methods/ops/validate');

/**
 * ObectID are 12-bytes values consisting of
 * - 4 bytes representing sec from epoch (UNIX)
 * - 5 bytes representing a random value
 * - 3 bytes counter, with a random starting value.
 */
const UNIQUE_VALUE = randomBytes(5);

class ObjectId {

  generateCounterValue(){
    const inc = this.increment = (this.increment = (this.increment + 1) % 0xffffff);
    const buffer = Buffer.alloc(3);
    buffer[0] = inc & 0xff;
    buffer[1] = (inc >> 8) & 0xff;
    buffer[2] = (inc >> 16) & 0xff;
    return buffer;
  }

  fromHex(hex) {
    if (!validate(hex)) {
      throw new Error('Invalid input');
    }
    this.hex = hex;
  }

  constructor(prop) {
    this.machineId = UNIQUE_VALUE;

    this.hex =  null;
    this.timeProp = null;
    this.increment = ~~(Math.random() * 0xffffff);

    Object.assign(ObjectId.prototype, {
      generateNew:require('./methods/generateNew')
    })

    const hex = (typeof prop === 'string' && prop.length === 24) ? prop : (prop && prop.toHex) ? prop.toHex() : null;
    if (hex) {
      this.fromHex(hex);
    } else {
      this.timeProp = prop;
      this.generateNew(prop)
    }
  }
  setMachineId(machineId = UNIQUE_VALUE){
    this.machineId = machineId
    this.generateNew(this.timeProp);
  }
  getDate(){
    return new Date(parseInt(this.toHex().substring(0, 8), 16) * 1000);
  }
  getTimestamp(){
    return (parseInt(this.toHex().substring(0, 8), 16));
  }
  getCounterValue(){
    return this.generateCounterValue();
  }
  toHex(){
    return this.hex;
  }
};
const inspect = (Symbol && Symbol.for('nodejs.util.inspect.custom')) || 'inspect';
ObjectId.prototype.getMachineId = require('./methods/getMachineId')
ObjectId.prototype.isValid = require('./methods/isValid')
ObjectId.prototype.toString = require('./methods/toString')
ObjectId.prototype[inspect] = function() { return "ObjectID("+this.toString()+")" };

module.exports = ObjectId;
