const {expect} = require('chai');
const ObjectId = require('../index');

describe('ObjectId', () => {
  it('should work', function () {
    const id = new ObjectId();
    expect(id.toString().length).to.equal(24)

    const id2 = new ObjectId(id);
    expect(id2.toString().length).to.equal(24);
    expect(id2).to.deep.equal(id);

    expect(id2.isValid()).to.deep.equal(true)
  });
});
