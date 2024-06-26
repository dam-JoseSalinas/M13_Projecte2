import React, { useState,useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet, Animated, Dimensions } from 'react-native';
import Home from './Home';
import Contacts from './Contacts';
import Search from './Search';
import Settings from './Settings';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Profile from './Profile';
import Calendar from './Calendario';
import { EventRegister} from 'react-native-event-listeners'
import themeContext from "../themes/themeContext";

const BottomNavBar = createBottomTabNavigator();

/*Dos tipos de componente en un mismo archivo? --> MenuInferior Y Menus Laterales*/
export default function MenuInferior() {
    
    /*Funciones para menus laterales */

    const theme = useContext(themeContext)

    const [darkMode, setDarkMode] = useState(false)

    return (
         <View style={{ flex: 1 ,backgroundColor:theme.background}}>
            <BottomNavBar.Navigator 
                /*cambio de focus en iconos(se colorea/descolorea)*/
                screenOptions={ ({ route }) => 
                    ({  tabBarShowLabel: false,
                        tabBarStyle: {
                            backgroundColor: theme.background,
                            borderTopColor: theme.lineColor, // Optional: for border color at the top of the tab bar
                        },
                        tabBarIcon: ({ color, focused, size }) => {
                            let iconComponent;
                            if (route.name === "Home") {
                                iconComponent = 
                                    focused ? 
                                    (<Foundation name="home" size={size} color= {theme.color} backgroundColor={theme.background}/>) 
                                    : 
                                    (<Foundation name="home" size={size} color= {theme.color} backgroundColor={theme.background}/>);
                            } else if (route.name === "Contacs") {
                                iconComponent = focused ? 
                                    (<AntDesign name="contacts" size={size} color= {theme.color} backgroundColor={theme.background} />)
                                    :
                                    (<AntDesign name="contacts" size={size} color= {theme.color} backgroundColor={theme.background} />);
                            } else if (route.name === "Search") {
                                iconComponent = focused ? 
                                    (<Ionicons name="search" size={size} color= {theme.color} backgroundColor={theme.background} />)
                                    :
                                    (<Ionicons name="search-outline" size={size} color= {theme.color} backgroundColor={theme.background} />);
                            } else if (route.name === "Settings") {
                                iconComponent = focused ? 
                                    (<Ionicons name="cog-outline" size={size} color= {theme.color} backgroundColor={theme.background} />)
                                    : 
                                    (<Ionicons name="cog-outline" size={size} color= {theme.color} backgroundColor={theme.background} />);
                            }
                            else if (route.name === "Profile") {
                                iconComponent = focused ? 
                                    (<Ionicons name="person" size={24} color= {theme.color} backgroundColor={theme.background}/>)
                                    : 
                                    (<Ionicons name="person" size={size} color= {theme.color} backgroundColor={theme.background} />);
                            }
                            return iconComponent;
                        },
                    })
                }
            >
                <BottomNavBar.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}/>
                <BottomNavBar.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}/>
                <BottomNavBar.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}/>
                <BottomNavBar.Screen
                    name="Contacs"
                    component={Contacts}
                    options={{ headerShown: false }}/>
                <BottomNavBar.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false }}/>
            </BottomNavBar.Navigator>
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
