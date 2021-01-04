import React from 'react'
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'



export const HomeScreen = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <Text>Navigation </Text> 
            </View>
            <View style={styles.body}>
             
                <Text> Home Screen </Text>
            </View>
            <View style={styles.footer}>
                <Text> Footer </Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)'
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
    }

})