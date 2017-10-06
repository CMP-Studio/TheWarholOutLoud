import React, { Component, PropTypes } from 'react';

import { StyleSheet, View, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default class ViewTicker extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    uniqueChildrenKey: PropTypes.any.isRequired,
    scrollDuration: PropTypes.number,
    scrollDelay: PropTypes.number,
  };

  static defaultProps = {
    scrollDuration: 4500,
    scrollDelay: 3000,
  };

  constructor(props) {
    super();
    this.state = {
      xOffset: new Animated.Value(0),
      hideCopy: true,
      widthOfView: 0,
    };

    this.cycleAnimation = this.cycleAnimation.bind(this);
    this.shouldCycle = this.shouldCycle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const update = this.props.uniqueChildrenKey !== nextProps.uniqueChildrenKey;

    if (update) {
      this.state.xOffset.setValue(0);
      this.setState(() => {
        return {
          hideCopy: true,
          widthOfView: 0,
        };
      });
    }
  }

  shouldCycle(event) {
    const widthOfView = event.nativeEvent.layout.width;

    if (widthOfView > this.props.width) {
      this.setState(() => {
        return {
          widthOfView,
          hideCopy: false,
        };
      });

      this.cycleAnimation();
    }
  }

  cycleAnimation() {
    Animated.sequence([
      Animated.timing(this.state.xOffset, {
        toValue: -this.state.widthOfView,
        duration: this.props.scrollDuration,
      }),
      Animated.delay(this.props.scrollDelay),
    ]).start(event => {
      this.state.xOffset.setValue(0);

      if (event.finished) {
        this.cycleAnimation();
      }
    });
  }

  render() {
    let extraCopy;
    if (!this.state.hideCopy) {
      extraCopy = this.props.children;
    }

    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
            justifyContent: !this.state.hideCopy ? 'flex-start' : 'center',
          },
        ]}
      >
        <Animated.View
          style={{
            flexDirection: 'row',
            marginLeft: this.state.xOffset,
          }}
        >
          <View onLayout={this.shouldCycle}>
            {this.props.children}
          </View>
          {extraCopy}
        </Animated.View>
      </View>
    );
  }
}
