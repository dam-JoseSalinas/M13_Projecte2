import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet, Animated, Dimensions } from 'react-native';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Settings from './Settings';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabGroup() {
    const [isMenuOpenR, setIsMenuOpenR] = useState(false);
    const [isMenuOpenL, setIsMenuOpenL] = useState(false);

    const toggleMenuR = () => {
        setIsMenuOpenR(!isMenuOpenR);
    };

    const toggleMenuL = () => {
        setIsMenuOpenL(!isMenuOpenL);
    };

    const menuPosition = useState(new Animated.Value(0))[0];
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const translateY = menuPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [-screenHeight, 0],
    });
    const translateX = menuPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [-screenWidth, 0],
    });

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconComponent;
                        if (route.name === "Home") {
                            iconComponent = focused ? (
                                <Foundation name="home" size={size} color="black" />
                            ) : (
                                <Foundation name="home" size={size} color={color} />
                            );
                        } else if (route.name === "Contacs") {
                            iconComponent = focused ? (
                                <AntDesign name="contacts" size={size} color="black" />
                            ) : (
                                <AntDesign name="contacts" size={size} color={color} />
                            );
                        } else if (route.name === "Search") {
                            iconComponent = focused ? (
                                <Ionicons name="search" size={size} color="black" />
                            ) : (
                                <Ionicons name="search-outline" size={size} color={color} />
                            );
                        } else if (route.name === "Settings") {
                            iconComponent = focused ? (
                                <Ionicons name="cog-outline" size={size} color="black" />
                            ) : (
                                <Ionicons name="cog-outline" size={size} color={color} />
                            );
                        }
                        return iconComponent;
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                />
                <Tab.Screen
                    name="Contacs"
                    component={Profile}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                />
            </Tab.Navigator>

            {/* Botón desplegable en la parte derecha */}
            <TouchableOpacity onPress={toggleMenuR} style={styles.menuButton}>
                <Ionicons name={isMenuOpenR ? 'close' : 'menu'} size={24} color="black" />
            </TouchableOpacity>

            {/* Botón desplegable en la parte izquierda */}
            <TouchableOpacity onPress={toggleMenuL} style={styles.menuButtonLeft}>
                <Ionicons name={isMenuOpenL ? 'close' : 'person-circle-sharp'} size={24} color="black" />
            </TouchableOpacity>

            
            <Animated.View style={[styles.menuContainerY, { transform: [{ translateY }] }]}>
                {/* Contenido del menú desplegable */}
                {/* Aquí puedes agregar tus elementos de menú */}
            </Animated.View>
            <Animated.View style={[styles.menuContainerX, { transform: [{ translateX }] }]}>
                {/* Contenido del menú desplegable */}
                {/* Aquí puedes agregar tus elementos de menú */}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainerY: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'white',
        elevation: 8,
        zIndex: 10,
    },
    menuContainerX: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'white',
        elevation: 8,
        zIndex: 10,
    },
    menuButton: {
        position: 'absolute',
        top: 45,
        right: 16,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        padding: 10,
        elevation: 4,
    },
    menuButtonLeft: {
        position: 'absolute',
        top: 45,
        left: 16,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        padding: 10,
        elevation: 4,
    },
});
