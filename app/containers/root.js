
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RootScreen from '../components/rootScreen';

import {
  togglePausePlay,
} from '../actions/audio';

import {
  getScreenReaderStatus,
} from '../actions/accessibility';

import {
  updateActiveTab,
} from '../actions/navigation';

const mapStateToProps = (state) => {
  return {
    floor: state.closeTourStops.detectedFloor,
    currentAudioRoute: state.nav.currentAudioRoute,
    currentAudioTab: state.nav.currentAudioTab,
    beaconsNum: state.closeTourStops.tourStops.length || 0,
    activeTab: state.nav.activeTab,
    playerStatus: state.bottomPlayer.playerStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        togglePausePlay,
        getScreenReaderStatus,
        updateActiveTab,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
