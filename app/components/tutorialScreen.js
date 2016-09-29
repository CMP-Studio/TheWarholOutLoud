
import React, { PropTypes, Component } from 'react';

import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';

import TutorialWelcomePage from './tutorialWelcomePage';
import TutorialNearMePage from './tutorialNearMePage';

import { OFF_BLACK, TURQUOISE, globalStyles } from '../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: OFF_BLACK,
    marginTop: 20,
  },
  floatingButtonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  floatingButton: {
    height: 40,
    justifyContent: 'center',
  },
  floatingButtonText: {
    color: TURQUOISE,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  inactiveDot: {
    backgroundColor: TURQUOISE,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: TURQUOISE,
  },
});

const SWIPER_REF = 'SWIPER_REF';

class TutorialScreen extends Component {
  static propTypes = {
    timerActive: PropTypes.bool.isRequired,
    autoplayOn: PropTypes.bool.isRequired,
    bluetoothOn: PropTypes.bool.isRequired,
    tutorialHidden: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    locationServicesStatus: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      toggleAutoplay: PropTypes.func.isRequired,
      tutorialPageDidChange: PropTypes.func.isRequired,
      hideTutorial: PropTypes.func.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  hideModal() {
    this.setState({
      modalVisible: false,
    });

    this.props.actions.hideTutorial();
  }

  render() {
    const {
      timerActive,
      autoplayOn,
      bluetoothOn,
      locationServicesStatus,
      currentPage,
      tutorialHidden,
    } = this.props;

    const {
      toggleAutoplay,
      tutorialPageDidChange,
    } = this.props.actions;

    if (tutorialHidden) {
      return null;
    }

    const width = Dimensions.get('window').width;

    let floatingButton;

    if (currentPage === 0 || currentPage === 1) {
      floatingButton = (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            this.refs[SWIPER_REF].scrollBy(1);
          }}
        >
          <Text
            style={[globalStyles.h1, styles.floatingButtonText]}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      floatingButton = (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            this.hideModal();
          }}
        >
          <Text
            style={[globalStyles.h1, styles.floatingButtonText]}
          >
            Let's get started
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <Modal
        style={styles.container}
        animationType={'slide'}
        visible={this.state.modalVisible}
      >
        <Swiper
          ref={SWIPER_REF}
          style={styles.container}
          loop={false}
          bounces={true}
          dot={
            <View style={[styles.dot, styles.inactiveDot]} />
          }
          activeDot={
            <View style={[styles.dot, styles.activeDot]} />
          }
          onMomentumScrollEnd={(event, state) => {
            tutorialPageDidChange(state.index);
          }}
        >
          <TutorialNearMePage />
          <TutorialWelcomePage />
          <View style={[styles.pageTwo]}>
            <Text>
              PageTwo
            </Text>
          </View>
          <View style={[styles.pageThree]}>
            <Text>
              PageThree
            </Text>
          </View>
        </Swiper>
        <View style={[styles.floatingButtonContainer, { width }]}>
          {floatingButton}
        </View>
      </Modal>
    );
  }
}

export default TutorialScreen;
