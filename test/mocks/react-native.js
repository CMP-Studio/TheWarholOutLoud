
const ReactNativeMock = {
  NativeModules: {
  },
  NativeEventEmitter: () => {},
};

const key = require.resolve('react-native');

require.cache[key] = {
  id: key,
  filename: key,
  loaded: true,
  exports: ReactNativeMock,
};
