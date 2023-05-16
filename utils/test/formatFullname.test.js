const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return "fullName" in correct format if proper arg', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JoHn DoE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
  it('should return an error if "fullName" arg is in incorrect format', () => {
    expect(formatFullname('john doe test')).to.equal('Error');
    expect(formatFullname('johndoe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
