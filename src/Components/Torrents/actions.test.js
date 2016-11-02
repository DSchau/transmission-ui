import test from 'ava';

import * as actions from './actions';

test('can update torrent state with null value; sets to array', t => {
  const assertions = [
    [],
    null,
    false,
    undefined
  ];

  t.plan(assertions.length);

  assertions
    .forEach((torrents) => {
      t.deepEqual(actions.updateTorrents(torrents), []);
    });
});

test('can update torrents with non-empty array', t => {
  const assertions = [
    [ { id: 1 } ],
    [ { id: 1 }, { id: 2 }]
  ];

  t.plan(assertions.length);

  assertions
    .forEach((torrents) => {
      t.deepEqual(actions.updateTorrents(torrents), torrents);
    });
});
