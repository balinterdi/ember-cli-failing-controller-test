import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:band/songs', 'BandSongsController', {
  // Specify the other units that are required for this test.
  needs: ['controller:band']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
