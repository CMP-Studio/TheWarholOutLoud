import { connect } from 'react-redux';

import NearMeScreen from '../components/nearMeScreen';

const mapStateToProps = state => {
  const floor = state.closeTourStops.detectedFloor;
  const allAmenities = state.amenities.allAmenities;
  const amenities = floor ? allAmenities[floor].amenities : [];

  return {
    playerOpen: state.bottomPlayer.playerOpen,
    closeTourStops: state.closeTourStops.tourStops,
    regions: state.closeTourStops.regions,
    floor,
    amenities,
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

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NearMeScreen);
