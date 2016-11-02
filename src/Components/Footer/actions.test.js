import test from 'ava';

import * as actions from './actions';

test('toggles display mode', t => {
  t.is(actions.getDisplayMode('listview'), 'fullview');
  t.is(actions.getDisplayMode('fullview'), 'listview');
});
