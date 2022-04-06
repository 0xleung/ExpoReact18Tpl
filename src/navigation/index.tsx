import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import DataScreen from '../screens/DataScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import MineScreen from '../screens/MineScreen';
import SettingScreen from '../screens/SettingScreen';
import WebviewScreen from '../screens/WebviewScreen';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    );
  }

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Webview" component={WebviewScreen} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function TabNavigator() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                header: () => null,
                tabBarLabel: '首页',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }}
            />
        <BottomTab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                header: () => null,
                tabBarLabel: '探索',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="rocket" color={color} size={size} />
                    
                ),
            }}
            />
        <BottomTab.Screen
            name="Data"
            component={DataScreen}
            options={{
                header: () => null,
                tabBarLabel: '数据',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="stats-chart-sharp" size={size} color={color} />
                ),
            }}
            />
        <BottomTab.Screen
            name="Mine"
            component={MineScreen}
            options={{
                header: () => null,
                tabBarLabel: '我的',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" color={color} size={size} />
                ),
            }}
            />
      </BottomTab.Navigator>
    );
  }