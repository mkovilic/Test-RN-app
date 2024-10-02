import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme() ?? 'light';

    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarActiveBackgroundColor: "black",
            tabBarInactiveBackgroundColor: "black",
            headerShown: false,
        }}>
        <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
            }}
        />
        <Tabs.Screen
            name="articles"
            options={{
            title: 'Articles',
            tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'newspaper-sharp' : 'newspaper-outline'} color={color} />
            ),
            }}
        />
        </Tabs>
    );
}