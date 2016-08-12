
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AmenitiesScreen from '../components/amenitiesScreen';

import {
  toggleFloorExpanded,
} from '../actions/amenities';

const mapStateToProps = (state) => {
  return {
    playerOpen: state.bottomPlayer.playerOpen,
    allAmenities: state.amenities.allAmenities,
    expandedFloors: state.amenities.expandedFloors,
    screenReader: state.accessibility.screenReader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        toggleFloorExpanded,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AmenitiesScreen);
