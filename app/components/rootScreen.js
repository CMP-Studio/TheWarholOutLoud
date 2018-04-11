
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import {
  TAB_MUSEUM,
  TAB_NEARME,
  TAB_STORIES,
} from '../actions/navigation';

import {
  PLAYER_STATUS_PLAY,
  PLAYER_STATUS_PAUSE,
} from '../actions/audio';

import Tutorial from '../containers/tutorial';
import NearMe from '../containers/nearMe';
import Everything from '../containers/everything';
import Museum from '../containers/museum';
import BottomPlayer from '../containers/bottomPlayer';

import { OFF_WHITE, TEAL, OFF_BLACK, TURQUOISE } from '../styles.js';

export const BOTTOMBARHEIGHT = 49;

const MUSEUM_REF = 'MUSEUM_REF';
const NEARME_REF = 'NEARME_REF';
const STORIES_REF = 'STORIES_REF';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  container: {
    flex: 1,
  },
});

class RootScreen extends Component {
  static propTypes = {
    beaconsNum: PropTypes.number.isRequired,
    currentAudioRoute: PropTypes.object,
    currentAudioTab: PropTypes.string,
    activeTab: PropTypes.string.isRequired,
    playerStatus: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      togglePausePlay: PropTypes.func.isRequired,
      getScreenReaderStatus: PropTypes.func.isRequired,
      updateActiveTab: PropTypes.func.isRequired,
    }).isRequired,
  }


  componentDidMount() {
    this.props.actions.getScreenReaderStatus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAudioTab !== this.props.currentAudioTab) {
      if (prevProps.currentAudioTab === TAB_NEARME && this.refs.NEARME_REF != null) {
        this.refs.NEARME_REF.popToTop();
      }
      else if (prevProps.currentAudioTab === TAB_STORIES && this.refs.TAB_STORIES != null) {
        this.refs.TAB_STORIES.popToTop();
      }
    }
  }

  render() {
    return (
      <View
        style={styles.container}
        onMagicTap={() => {
          if (this.props.playerStatus === PLAYER_STATUS_PLAY ||
              this.props.playerStatus === PLAYER_STATUS_PAUSE) {
            this.props.actions.togglePausePlay();
          }
        }}
      >
        <Tutorial />
        <TabBarIOS
          translucent={false}
          barTintColor={TURQUOISE}
          unselectedTintColor={OFF_BLACK}
          tintColor={OFF_WHITE}
        >
        {/*
          renderAsOriginal and badge do not seem to play nice, with badge taking precedence.
          Untill the root cause of this issuie can be found modify the React Native lines:
          React/Views/RCTTabBarItem.m
          Line 88 and 99 from:
            if (_renderAsOriginal) {
          to:
            if (true) {
        */}
          <TabBarIOS.Item
            title="Near Me"
            renderAsOriginal={true}
            icon={require('../assets/nearTab.png')}
            selectedIcon={require('../assets/nearTabSelected.png')}
            badge={this.props.beaconsNum}
            selected={this.props.activeTab === TAB_NEARME}
            onPress={() => {
              if (this.props.activeTab === TAB_NEARME &&
                  this.refs.NEARME_REF != null) {
                this.refs.NEARME_REF.popToTop();
              }

              this.props.actions.updateActiveTab(TAB_NEARME);
            }}
          >
            <NavigatorIOS
              ref={NEARME_REF}
              style={styles.container}
              initialRoute={{
                title: 'Near Me',
                component: NearMe,
                navigationBarHidden: true,
                barTintColor: '#ffffff',
                tintColor: TEAL,
                titleTextColor: OFF_BLACK,
                shadowHidden: true,
              }}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Stories"
            renderAsOriginal={true}
            icon={require('../assets/storiesTab.png')}
            selectedIcon={require('../assets/storiesTabSelected.png')}
            selected={this.props.activeTab === TAB_STORIES}
            onPress={() => {
              if (this.props.activeTab === TAB_STORIES &&
                  this.refs.STORIES_REF != null) {
                this.refs.STORIES_REF.popToTop();
                return;
              }

              this.props.actions.updateActiveTab(TAB_STORIES);
            }}
          >
            <NavigatorIOS
              ref={STORIES_REF}
              style={styles.container}
              initialRoute={{
                title: 'Stories',
                component: Everything,
                navigationBarHidden: true,
                barTintColor: '#ffffff',
                tintColor: TEAL,
                titleTextColor: OFF_BLACK,
                shadowHidden: true,
              }}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="The Warhol"
            renderAsOriginal={true}
            icon={require('../assets/warholTab.png')}
            selectedIcon={require('../assets/warholTabSelected.png')}
            selected={this.props.activeTab === TAB_MUSEUM}
            onPress={() => {
              if (this.props.activeTab === TAB_MUSEUM &&
                  this.refs.MUSEUM_REF != null) {
                this.refs.MUSEUM_REF.popToTop();
                return;
              }

              this.props.actions.updateActiveTab(TAB_MUSEUM);
            }}
          >
            <NavigatorIOS
              ref={MUSEUM_REF}
              style={styles.container}
              initialRoute={{
                title: 'The Warhol',
                component: Museum,
                navigationBarHidden: true,
                barTintColor: '#ffffff',
                tintColor: TEAL,
                titleTextColor: OFF_BLACK,
                shadowHidden: true,
              }}
            />
          </TabBarIOS.Item>
        </TabBarIOS>
        <BottomPlayer
          navToTourStop={() => {
            const targetRoute = this.props.currentAudioRoute;

            if (this.props.currentAudioTab === TAB_STORIES) {
              const navigator = this.refs.STORIES_REF.navigator;
              const storiesRoute = navigator.navigationContext.currentRoute;

              if (storiesRoute !== targetRoute) {
                try {
                  this.refs.STORIES_REF.popToRoute(targetRoute);
                } catch (err) {
                  this.refs.STORIES_REF.push(targetRoute);
                }
              }
            } else if (this.props.currentAudioTab === TAB_NEARME) {
              const navigator = this.refs.NEARME_REF.navigator;
              const nearmeRoute = navigator.navigationContext.currentRoute;

              if (nearmeRoute !== targetRoute) {
                try {
                  this.refs.NEARME_REF.popToRoute(targetRoute);
                } catch (err) {
                  this.refs.NEARME_REF.push(targetRoute);
                }
              }
            }

            if (this.props.activeTab !== this.props.currentAudioTab) {
              this.props.actions.updateActiveTab(this.props.currentAudioTab);
            }
          }}
        />
      </View>
    );
  }
}

export default RootScreen;
