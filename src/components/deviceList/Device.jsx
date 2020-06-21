import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

const Device = ({device}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                   source={{
                       uri: `data:image/png;base64,${device.image}`,
                   }}
            />
            <View style={styles.desc}>
                <View>
                    <Text style={styles.text}>{device.brandName}</Text>
                    <Text style={styles.text}>{device.name}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.text}>{device.price}</Text>
                </View>
            </View>
        </View>
    );
};

export default Device;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginTop:10
    },
    text: {
        color:"black",
        fontSize: 20
    },
    logo: {
        marginLeft:5,
        height:50,
        width:50,
        marginRight:20,
        borderWidth:1,
        borderColor:"black",
        borderRadius:50,

    },
    desc:{
        flexDirection: "row",
        justifyContent:"space-between",

    },

})

