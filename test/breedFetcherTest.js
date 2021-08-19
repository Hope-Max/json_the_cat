const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(desc.trim(), expectedDesc );

      done();
    });
  });

  it('returns a expectedErr(The breed queried is not found) for a invalid breed, via callback', (done) => {
    fetchBreedDescription('Max', (err, desc) => {
      // we expect an error for this scenario
      const expectedErr = 'The breed queried is not found';
      assert.equal(err, expectedErr);

      // compare returned description
      assert.equal(desc, null);

      done();
    });
  });

});