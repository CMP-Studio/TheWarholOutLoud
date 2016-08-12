
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TourStopScreen from '../components/tourStopScreen';
import {
  toggleAudioTranscript,
  loadAudio,
  togglePausePlay,
  loadAudioContent,
} from '../actions/audio';

import {
  updateCurrentAudioRoute,
  updateNearMeRootStatus,
} from '../actions/navigation';

const mapStateToProps = (state) => {
  return {
    audioContent: state.audioContent,
    currentAudio: state.bottomPlayer.uuid,
    currentAudioTime: state.bottomPlayer.time,
    screenReader: state.accessibility.screenReader,
    playerStatus: state.bottomPlayer.playerStatus,
    playerOpen: state.bottomPlayer.playerOpen,
    autoplayOn: state.bottomPlayer.autoplayOn,
    preferences: state.preferences,
    currentStopUUID: state.bottomPlayer.stopUUID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        toggleAudioTranscript,
        loadAudio,
        updateCurrentAudioRoute,
        togglePausePlay,
        updateNearMeRootStatus,
        loadAudioContent,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourStopScreen);
