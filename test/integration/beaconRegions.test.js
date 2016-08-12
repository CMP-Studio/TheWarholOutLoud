
/* eslint-env mocha */

import { expect } from 'chai';

import { _ } from 'lodash';

import {
  tourStops,
} from '../../app/data/tourStops';

import {
  updateBeacons,
} from '../../app/actions/beacon';

import {
  initialState as beaconState,
} from '../../app/reducers/beacon';

import {
  closeTourStops as reducer,
  initialState,
} from '../../app/reducers/closeTourStops';

// *** Testing Data ***
// TODO: Include it's own testing data
const blueBeacon = _(beaconState.blockRules)
  .find((beacon) => { return beacon.region === 'blue'; })
  .uuid;

const blue6Beacon = _(beaconState.blockRules)
  .find((beacon) => { return beacon.region === 'blue6'; })
  .uuid;

const yellowBeacon = _(beaconState.blockRules)
  .find((beacon) => { return beacon.region === 'yellow'; })
  .uuid;

const grayBeacon = _(beaconState.blockRules)
  .find((beacon) => { return beacon.region === 'gray'; })
  .uuid;

const yellowRegionTourStops = _(tourStops)
  .filter((tourStop) => {
    return _.includes(tourStop.regions, 'yellow');
  })
  .value();

const redRegionTourStops = _(tourStops)
  .filter((tourStop) => {
    return _.includes(tourStop.regions, 'red');
  })
  .value();

const blueRegionTourStops = _(tourStops)
  .filter((tourStop) => {
    return _.includes(tourStop.regions, 'blue');
  })
  .value();

// *** Tests ***
describe('closeTourStops reducer', () => {
  it('updating beacons with empty beacons does not change state', () => {
    const beacons = [];

    expect(
      reducer(initialState,
        updateBeacons(beacons, beaconState.blockRules)
      )
    ).to.eql(
      initialState
    );
  });

  it('Detected a single region with no previous regions', () => {
    const nextState = Object.assign({},
      initialState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'blue',
        ],
        detectedFloor: 7,
        tourStops: blueRegionTourStops,
      }
    );

    expect(
      reducer(initialState,
        updateBeacons([blueBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detected a \'blue\' region twice in a row', () => {
    const startState = Object.assign({},
      initialState,
      {
        previousRegions: [
          'blue',
        ],
        detectedFloor: 7,
      }
    );

    const nextState = Object.assign({},
      startState,
      {
        regions: [
          'blue',
        ],
        tourStops: blueRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([blueBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detected a \'gray\' and \'blue\' region after a \'blue\'', () => {
    const startState = Object.assign({},
      initialState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'blue',
        ],
        detectedFloor: 7,
      }
    );

    const nextState = Object.assign({},
      startState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'blue',
          'gray',
        ],
        tourStops: blueRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([blueBeacon, grayBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('\'yellow\' once shouldn\'t block \'blue\' region', () => {
    const startState = Object.assign({},
      initialState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'blue',
        ],
        detectedFloor: 7,
        tourStops: blueRegionTourStops,
      }
    );

    const nextState = Object.assign({},
      startState,
      {
        previousRegions: [
          'yellow',
        ],
        tourStops: blueRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([blueBeacon, yellowBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('\'yellow\' twice should block \'blue\' region', () => {
    const startState = Object.assign({},
      initialState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'yellow',
        ],
        detectedFloor: 7,
        tourStops: blueRegionTourStops,
      }
    );

    const nextState = Object.assign({},
      startState,
      {
        regions: [
          'yellow',
        ],
        previousRegions: [
          'yellow',
        ],
        tourStops: yellowRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([blueBeacon, yellowBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Both \'red\' and \'yellow\' should have the Julia tourStop', () => {
    const yellowState = Object.assign({},
      initialState,
      {
        regions: [
          'yellow',
        ],
        previousRegions: [
          'yellow',
        ],
        detectedFloor: 7,
        tourStops: yellowRegionTourStops,
      }
    );

    const redState = Object.assign({},
      initialState,
      {
        regions: [
          'red',
        ],
        previousRegions: [
          'red',
        ],
        tourStops: redRegionTourStops,
      }
    );

    const findJulia = (nextState) => {
      const titles = _(nextState.tourStops)
                       .flatMap('shortTitle')
                       .value();

      return _.includes(titles, 'Andy and Julia');
    };

    // eslint-disable-next-line no-unused-expressions
    expect(
      findJulia(
        reducer(yellowState,
          updateBeacons([], beaconState.blockRules)
        )
      )
    ).to.be.true;

    // eslint-disable-next-line no-unused-expressions
    expect(
      findJulia(
        reducer(redState,
          updateBeacons([], beaconState.blockRules)
        )
      )
    ).to.be.true;
  });

  it('Detecting no beacons should not change the detected floor', () => {
    const startState = Object.assign({},
      initialState,
      {
        detectedFloor: 7,
      }
    );

    const nextState = startState;

    expect(
      reducer(startState,
        updateBeacons([], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detecting no beacons should not change the detected floor 2', () => {
    const startState = Object.assign({},
      initialState,
    );

    const nextState = startState;

    expect(
      reducer(startState,
        updateBeacons([], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Initally Detecting a beacons should set the detected floor', () => {
    const startState = Object.assign({},
      initialState,
    );

    const nextState = Object.assign({},
      startState,
      {
        regions: [
          'yellow',
        ],
        previousRegions: [
          'yellow',
        ],
        detectedFloor: 7,
        tourStops: yellowRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([yellowBeacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detecting a beacons should change the detected floor', () => {
    const startState = Object.assign({},
      initialState,
      {
        regions: [
          'yellow',
        ],
        previousRegions: [
          'yellow',
        ],
        detectedFloor: 7,
        tourStops: yellowRegionTourStops,
      }
    );

    const nextState = Object.assign({},
      startState,
      {
        regions: [
          'yellow',
        ],
        previousRegions: [
          'blue6',
        ],
        detectedFloor: 6,
        tourStops: yellowRegionTourStops,
      }
    );

    expect(
      reducer(startState,
        updateBeacons([blue6Beacon], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detecting no beacons should return previous state', () => {
    const startState = Object.assign({},
      initialState,
      {
        regions: [
          'blue',
        ],
        previousRegions: [
          'blue',
        ],
        detectedFloor: 7,
        tourStops: blueRegionTourStops,
      }
    );

    const nextState = startState;

    expect(
      reducer(startState,
        updateBeacons([], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });

  it('Detecting unknown beacons should return previous state', () => {
    const startState = Object.assign({},
      initialState,
    );

    const nextState = startState;

    expect(
      reducer(startState,
        updateBeacons(['9999999:9999999'], beaconState.blockRules)
      )
    ).to.eql(
      nextState
    );
  });
});
