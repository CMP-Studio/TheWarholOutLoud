
import {
  StyleSheet,
} from 'react-native';

export const TEAL = '#097D8D';
export const TURQUOISE = '#4CCEDE';
export const LIGHT_BLUE = '#EFFBFB';
export const GREEN = '#7DCC77';
export const GRAY = '#7D7D7D';
export const OFF_BLACK = '#4D4D4D';
export const OFF_WHITE = '#F7F7F7';

export const globalStyles = StyleSheet.create({
  body: {
    fontSize: 16,
    color: OFF_BLACK,
  },
  paragraph: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 18,
    fontWeight: '500',
    color: OFF_BLACK,
  },
  h2: {
    fontSize: 15,
    color: OFF_WHITE,
  },
  disclosure: {
    fontSize: 17,
    color: OFF_BLACK,
  },
  progressLabel: {
    fontSize: 12,
    color: OFF_WHITE,
  },
});
