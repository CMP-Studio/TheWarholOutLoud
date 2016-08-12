
/* eslint-env mocha */

import { expect } from 'chai';

import { beacon as reducer, initialState } from '../../../app/reducers/beacon';

describe('beacon reducer', () => {
  it('defaults to initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql(
      initialState
    );
  });
});
