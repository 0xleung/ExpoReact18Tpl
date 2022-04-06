import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
                HomeScreen: 'home',
            },
          },
          Explore: {
            screens: {
                ExploreScreen: 'explore',
            },
          },
          Data: {
            screens: {
                DataScreen: 'data',
            },
          },
          Mine: {
            screens: {
                MineScreen: 'mine',
            },
          },
        },
      },
      Setting: 'setting',
      Webview: 'webview',
    //   NotFound: '*',
    },
  },
};

export default linking;
