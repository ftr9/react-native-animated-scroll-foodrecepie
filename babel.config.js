module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
          },
        },
      ],
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
