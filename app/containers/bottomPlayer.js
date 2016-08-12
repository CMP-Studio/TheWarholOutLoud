
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BottomPlayer } from '../components/bottomPlayer';

import {
  togglePausePlay,
  cycleAudioSpeed,
  rewindAudio,
  unloadAudio,
  loadNextAudio,
  loadNextAutoplayAudio,
  loadPrevAudio,
  replayAudio,
  toggleAutoplay,
} from '../actions/audio';

const mapStateToProps = (state) => {
  return {
    stopTitle: state.bottomPlayer.stopTitle,
    currentAudioRoute: state.nav.currentAudioRoute,
    currentUUID: state.bottomPlayer.uuid,
    index: state.bottomPlayer.index,
    nextUUID: state.bottomPlayer.nextUUID,
    playRate: state.bottomPlayer.playRate,
    playerStatus: state.bottomPlayer.playerStatus,
    time: state.bottomPlayer.time,
    duration: state.bottomPlayer.duration,
    audioTitle: state.bottomPlayer.title,
    audioContent: state.audioContent,
    timerActive: state.bottomPlayer.timerActive,
    timerStartAt: state.bottomPlayer.timerStartAt,
    timerNumber: state.bottomPlayer.timerNumber,
    autoplayOn: state.bottomPlayer.autoplayOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        togglePausePlay,
        rewindAudio,
        cycleAudioSpeed,
        unloadAudio,
        loadNextAudio,
        loadNextAutoplayAudio,
        loadPrevAudio,
        replayAudio,
        toggleAutoplay,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomPlayer);
