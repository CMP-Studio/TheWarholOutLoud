
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NearMeScreen from '../components/nearMeScreen';

import { startScanningForBeacons } from '../actions/beacon';

const mapStateToProps = (state) => {
  return {
    playerOpen: state.bottomPlayer.playerOpen,
    rangingUUID: state.beacon.rangingUUID,
    rangingIdentifier: state.beacon.rangingIdentifier,
    closeTourStops: state.closeTourStops.tourStops,
    beaconBlockRules: state.beacon.blockRules,
    regions: state.closeTourStops.regions,
    floor: state.closeTourStops.detectedFloor,
    amenities: ((state.closeTourStops.detectedFloor === null) ? [] : state.amenities.allAmenities[state.closeTourStops.detectedFloor].amenities),
    activeTab: state.nav.activeTab,
    screenReader: state.accessibility.screenReader,
    playerStatus: state.bottomPlayer.playerStatus,
    timerActive: state.bottomPlayer.timerActive,
    atNearMeRoot: state.nav.atNearMeRoot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        startScanningForBeacons,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearMeScreen);
