import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RoutesConstants } from '../../../../core/constants/RoutesConstants';
import { InferType } from 'yup';
import AppwriteContext from '../../../../core/services/AppwriteContext';
import Utils from '../../../../core/utlis/Utils';
const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
const UserRegisterSchema = Yup.object().shape({
    name:Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email.') 
    .matches(emailRegex, 'Email is not valid.')
    .max(50)
    .required('Email is required.'),
    password: Yup.string()
    .matches(passwordRegex, 'Password must be 4-8 c`haracters and contain only letters, numbers, or !@#$%^&*.')
    .required('Password is required.'),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match.')
    .required('Confirm Password is required.'),
})
type  RegisterProps = NativeStackScreenProps<RootStackParamList,typeof RoutesConstants.Register>
type UserRegisterValues = InferType<typeof UserRegisterSchema>;
const Register = ({navigation}:RegisterProps) => {
   
    const {appwrite,setIsLoggedIn}= useContext(AppwriteContext)
    const handleUserSignin = ({ userDetails }: { userDetails: UserRegisterValues }) => {
       appwrite.createAccount(userDetails).then((response)=>{
        if(response)
        {
            Utils.showSnackBar('Login Successfully')
            setIsLoggedIn(true)
           
        }
       })
    }
  return (
  
    <View style ={styles.container}>
          <Text style={styles.authText}>Appwrite Auth</Text>
       <KeyboardAvoidingView>
          <Formik
                    initialValues={{name:'',email:'',password:'',confirmpassword:''}}
                    validationSchema={UserRegisterSchema}
                    onSubmit={(values) => {
                       const userDetails = {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            confirmpassword: values.confirmpassword,
                        };
                     handleUserSignin({ userDetails });
                  
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
                    <TextInput style={styles.inputStyle}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        maxLength={50}
                        placeholder='Name'
                        placeholderTextColor={'#000000'}
                        keyboardType= 'default'
                        returnKeyType='next'
                        />
                        {touched.name && errors.name && (
                            <Text style={styles.errorText}>{errors.name}</Text>
                        )}
                       <TextInput style={styles.inputStyle}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        maxLength={50}
                        placeholder='Email'
                        placeholderTextColor={'#000000'}
                        keyboardType= 'email-address'
                        returnKeyType='next'
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                       <TextInput style={styles.inputStyle}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder='Password'
                        placeholderTextColor={'#000000'}
                        maxLength={8}
                        onBlur={handleBlur('password')}
                        secureTextEntry={true}
                        keyboardType='default'
                        returnKeyType='next'
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        )}
                          <TextInput style={styles.inputStyle}
                        value={values.confirmpassword}
                        onChangeText={handleChange('confirmpassword')}
                        placeholder='Confirm Password'
                        placeholderTextColor={'#000000'}
                        maxLength={8}
                        onBlur={handleBlur('confirmpassword')}
                        secureTextEntry={true}
                        keyboardType='default'
                        returnKeyType='done'
                        />
                        {touched.confirmpassword && errors.confirmpassword && (
                            <Text style={styles.errorText}>{errors.confirmpassword}</Text>
                        )}
                     
                        <TouchableOpacity 
                        disabled={!isValid}
                        style={styles.loginButton}
                        onPress={()=>{handleSubmit()
                        }}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>

                        <View style={styles.accountContainer}>
                            <Text style = {styles.accountText}>Already have an account?{'  '}</Text>
                            <TouchableOpacity
                                onPress={()=>{
                                navigation.pop()
                            }}>
                            <Text style={styles.createAccountText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                   )}
                </Formik>
                </KeyboardAvoidingView>
        </View>
       
  )
}

export default Register

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
    errorText:{
        color:'#eb2f06',
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