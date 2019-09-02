const generateTimeBuffer = require('./ops/generateTimeBuffer')
const generateUniqueBuffer = require('./ops/generateUniqueBuffer');

module.exports = function generateNew(prop){
    const time = ((typeof prop === 'number') ? prop : ~~(Date.now() / 1000));

    const timeBuffer = generateTimeBuffer(time);
    const uniqueValueBuffer = generateUniqueBuffer(this.getMachineId());
    const counterValueBuffer = this.getCounterValue();
    const buffer = Buffer.concat([timeBuffer, uniqueValueBuffer, counterValueBuffer]);
    this.fromHex(buffer.toString('hex'))
}
