
import { Platform } from 'react-native';

if (Platform.OS === 'windows') {
  module.exports = require('./DrawerLayout.windows').default;
} else {
  module.exports = require('./DrawerLayout').default;
}