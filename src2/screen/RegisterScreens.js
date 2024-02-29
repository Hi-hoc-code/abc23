import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterScreens = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Image source={require('../image/background.png')} style={{ width: '100%' }} />
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>Lets Get Started</Text>
                <Text style={{ fontSize: 22, color: '#fff', fontWeight: 300 }}>Create An Account</Text>
                <View style={[styles.edtBorder, { marginTop: 20 }]}>
                    <Image source={require('../image/persion.png')} />
                    <TextInput placeholder='Enter you name' style={{ flex: 1 }} />
                </View>
                <View style={styles.edtBorder}>
                    <Image source={require('../image/mail.png')} />
                    <TextInput placeholder='Enter you email' style={{ flex: 1 }} />
                </View>
                <View style={styles.edtBorder}>
                    <Image source={require('../image/lock.png')} style={{ width: 32, height: 32 }} />
                    <TextInput placeholder='Enter you password' style={{ flex: 1 }} />
                </View>
                <TouchableOpacity style={styles.btnRegister} onPress={() => { navigation.navigate('HomeScreens') }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Sign up</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default RegisterScreens

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2bb9d',
        width: '100%',
        height: '100%'
    },
    edtBorder: {
        width: 350,
        height: 55,
        backgroundColor: '#fff',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 15
    },
    btnRegister: {
        width: 180,
        height: 55,
        backgroundColor: '#FF8B6A',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})