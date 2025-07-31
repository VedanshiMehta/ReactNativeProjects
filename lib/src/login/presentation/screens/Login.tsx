import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { InferType } from 'yup';
import { AuthStackParamList, RoutesConstants } from '../../../../core/constants/RoutesConstants';
import AppwriteContext from '../../../../core/services/app_write_service/AppwriteContext';
import Utils from '../../../../core/utlis/Utils';


const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
const UserLoginSchema = Yup.object().shape({
    email: Yup.string() .email('Invalid email.') // built-in format check
    .matches(emailRegex, 'Email is not valid.')
    .max(50)
    .required('Email is required.'),
    password:  Yup.string()
    .matches(passwordRegex, 'Password must be 4-8 characters and contain only letters, numbers, or !@#$%^&*.')
    .required('Password is required.')
})

type  LoginProps = NativeStackScreenProps<AuthStackParamList,typeof RoutesConstants.Login>
type UserLoginValues = InferType<typeof UserLoginSchema>;

const Login=({navigation}:LoginProps)=>{

const {appwrite,setIsLoggedIn}= useContext(AppwriteContext)
const inputRefEmail = useRef<TextInput>(null)
const inputRefPassword = useRef<TextInput>(null)
const [focusedInput, setFocusedInput] = useState<'email' | 'password' | null>(null);

useEffect(()=>{
    inputRefEmail.current?.focus();
     return()=>{
        setFocusedInput(null)
        inputRefEmail.current?.blur()
        inputRefPassword.current?.blur()
     }
},[])

const handleLogin = ({ userDetails }: { userDetails: UserLoginValues }) => {
       setFocusedInput(null)
       inputRefEmail.current?.blur()
        inputRefPassword.current?.blur()
   appwrite.login(userDetails).then((response)=>{
    if(response)
    {
        setIsLoggedIn(true)
        Utils.showSnackBar('Login Successfully')
    }
   }).catch(e=>{
    console.log(e);
   })
}
  return (
  
    <View style ={styles.container}>
      <Text style={styles.authText}>Appwrite Auth</Text>
   <KeyboardAvoidingView>
      <Formik
                initialValues={{email:'',password:''}}
                validationSchema={UserLoginSchema}
                onSubmit={(values) => {
                  const user = {
                    email: values.email,
                    password: values.password,
                  }
                 handleLogin({userDetails:user})
                }}
               >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
               }) => (
                <>
             
                   <TextInput style={[styles.inputStyle, 
                   focusedInput ==='email'&& styles.inputFocused, 
                   touched.email && errors.email &&styles.inputError]}
                    ref={inputRefEmail}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    maxLength={50}
                    onFocus={()=> setFocusedInput('email')}
                    onSubmitEditing={()=> inputRefPassword.current?.focus()}
                    placeholder='Email'
                    placeholderTextColor={'#000000'}
                    keyboardType= 'email-address'
                    returnKeyType='next'
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                   <TextInput style={[
                             styles.inputStyle,
                             focusedInput === 'password' && styles.inputFocused,
                             touched.password && errors.password &&styles.inputError
                         ]}
                    ref={inputRefPassword}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder='Password'
                    placeholderTextColor={'#000000'}
                    maxLength={8}
                    onBlur={handleBlur('password')}
                    onFocus={() => setFocusedInput('password')}
                    secureTextEntry={true}
                    keyboardType='numeric'
                    returnKeyType='done'
                    />
                    {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                 
                    <TouchableOpacity 
                    disabled={!isValid}
                    style={styles.loginButton}
                    onPress={()=>handleSubmit()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </>
               )}
            </Formik>

            <View style={styles.accountContainer}>
            <Text style = {styles.accountText}>Don't have an account ?</Text>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate(RoutesConstants.Register)
            }}>
                <Text style={styles.createAccountText}> Create an account</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
    },
    loginContainer:{
        width:'80%',
       justifyContent:'flex-start',
       backgroundColor: '#d3d3d3'

    },
    authText: {
        color:'#eb3b5a',
        fontSize:38,
        fontWeight:'700',
        marginBottom:20,
    },
    inputStyle: {
     backgroundColor:'#f3e3e3ff',
     color:"#000000",
     padding: 10,
     height: 55,
     alignSelf: 'stretch',
     borderRadius: 5,
     marginTop:10,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    },
    inputFocused: {
    borderColor:'#eb3b5a', 
    borderWidth:1,
    },
    inputError: {
    borderColor:'red', 
    borderWidth:1,
    },
    errorText:{
        color:'red',
        fontSize: 16,
        fontWeight:500,
        alignSelf:'stretch'
    },
    loginButton:{
        alignSelf:'stretch',
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        marginVertical:25,
        borderRadius:6,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
    },
    buttonText:{
        fontSize:16,
        color:'#000000',
        fontWeight:800
    },
    accountContainer:{
        flexDirection:'row',
        margin:10
    },
    accountText:{
         color:'#000000',
        fontSize: 16,
        fontWeight:600,
    },
    createAccountText:{
        color:'#0652DD',
        fontSize: 16,
        fontWeight:600,
    }
})