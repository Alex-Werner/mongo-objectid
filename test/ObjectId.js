const {expect} = require('chai');
const ObjectId = require('../index');

describe('ObjectId', () => {
  it('should create a new objectID', function () {
    const id = new ObjectId();
    expect(id.toString().length).to.equal(24)
  });
  it('should close', function () {
    const id = new ObjectId();
    const id2 = new ObjectId(id);
    expect(id2.toString().length).to.equal(24);
    expect(id2).to.deep.equal(id);
  });
  it('should allow validation', ()=>{
    const id = new ObjectId();
    expect(id.isValid()).to.deep.equal(true);
  })
  it('should allow creation from hexString', function () {
    const hex = '5d6d58a43dc43c05943ac983';
    const id = new ObjectId(hex);
    expect(id.toString()).to.equal(hex)
  });
  it('should allow to generate a new one', function () {
    const hex = '5d6d58a43dc43c05943ac983';
    const id = new ObjectId(hex);
    id.generateNew();
    expect(id.toString()).to.not.equal(hex)
  });
  it('should allow to get the machine id (constant)', function () {
    const id = new ObjectId();
    expect(id.getMachineId().length).to.equal(5)
    expect(id.getMachineId().toString('hex').length).to.equal(10)
  });
  it('should allow to set a machine id', function () {
    const id = new ObjectId();
    id.setMachineId(Buffer.from('18386bd1c3','hex'));
    expect(id.getMachineId().toString('hex')).to.equal('18386bd1c3')
  });
  it('should allow to set a specific time', function () {
    const id = new ObjectId();
    const previousTime = new ObjectId(1567467048);

    expect(parseInt(previousTime.toHex().slice(0,8),16)).to.be.lt(parseInt(id.toHex().slice(0,8),16))
  });

  let id;
  it('should generate valid id', ()=>{
    id = new ObjectId(1567467048);
    id.setMachineId(Buffer.from('18386bd1c3','hex'));

    const time = id.toString().slice(0,8);
    expect(time).to.equal('5d6da628')
    const machineId = id.toString().slice(8,18)
    expect(machineId).to.equal('18386bd1c3')

    const random = id.toString().slice(18)
  })
  it('should get the date from id', function () {
    expect(id.getDate()).to.deep.equal(new Date(1567467048000));
  });
  it('should get the timestamp from id', function () {
    expect(id.getTimestamp()).to.deep.equal(1567467048000);
  });

});
