
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SettingsScreen from '../components/settingsScreen';

import {
  toggleAutoplay,
} from '../actions/audio';

const mapStateToProps = (state) => {
  return {
    timerActive: state.bottomPlayer.timerActive,
    autoplayOn: state.bottomPlayer.autoplayOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        toggleAutoplay,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
