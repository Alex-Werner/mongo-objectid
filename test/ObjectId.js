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
});
