
import { connect } from 'react-redux';

import NearMeScreen from '../components/nearMeScreen';

const mapStateToProps = (state) => {
  return {
    playerOpen: state.bottomPlayer.playerOpen,
    closeTourStops: state.closeTourStops.tourStops,
    regions: state.closeTourStops.regions,
    floor: state.closeTourStops.detectedFloor,
    amenities: ((state.closeTourStops.detectedFloor === null) ? [] : state.amenities.allAmenities[state.closeTourStops.detectedFloor].amenities),
    activeTab: state.nav.activeTab,
    screenReader: state.accessibility.screenReader,
    playerStatus: state.bottomPlayer.playerStatus,
    timerActive: state.bottomPlayer.timerActive,
    atNearMeRoot: state.nav.atNearMeRoot,
    tracking: state.beacon.tracking,
    bluetoothOn: state.beacon.bluetoothOn,
    locationServicesStatus: state.beacon.locationServicesStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearMeScreen);
