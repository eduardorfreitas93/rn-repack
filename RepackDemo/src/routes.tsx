import * as React from 'react';
import { Federated } from '@callstack/repack/client';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuspenseLoader from './components/SuspenseLoader';
import useStore from './stores/useStore';

const App1Routes = React.lazy(() => Federated.importModule('app1', './Routes'));

const App2Routes = React.lazy(() => Federated.importModule('app2', './Routes'));

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
            tabBarIcon: () => <></>,
            headerShown: false,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
        }}>
            <Tab.Screen
                name="Host"
                component={HomeScreen}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                }}
            />

            <Tab.Screen
                name="App1"
                component={App1Routes}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                    }
                }}
            />

            <Tab.Screen
                name="App2"
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                }}
            >
                {props => (
                    <React.Suspense fallback={<SuspenseLoader />}>
                        <App2Routes {...props} />
                    </React.Suspense>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

function HomeScreen() {
    const name = useStore(state => state.nome);
    const setNumberApp1 = useStore(state => state.setNumberApp1);
    const numberApp1 = useStore(state => state.numberApp1);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>homee!ddd</Text>
            <Text>{name}</Text>
            <Text>{numberApp1}</Text>
            <Button title="Add number" onPress={() => setNumberApp1(22)} />
        </View>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="App1S" component={App1Routes} />
                <Stack.Screen name="App2S" component={App2Routes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
