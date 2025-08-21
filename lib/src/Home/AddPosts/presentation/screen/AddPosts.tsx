import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { PostData } from '../../../data/model/PostData'
import { addPostApi } from '../../../../../core/services/redux/posts/postsActions'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoutesConstants, StackParamList } from '../../../../../core/constants/RoutesConstants';
import Utils from '../../../../../core/utils/Utils';
import { connect } from 'react-redux';
type ScreenProps = NativeStackScreenProps<StackParamList, typeof RoutesConstants.AddPosts>;
type AddPostsContainerProps = PropsWithChildren<ScreenProps & {
  postData: {
    isLoading: boolean;
    posts: PostData[];
    error: string;
  };
  addPosts: (postData:PostData) => void;
}>;
const AddPosts = (props:AddPostsContainerProps) => {

   const [title,setTitle]= useState<string>('')
    const [body,setBody]=useState<string>('')
    const inputRefTitle = useRef<TextInput>(null)
    const inputRefBody = useRef<TextInput>(null)
    const [errorTitle,setTitleError]= useState('')
    const [errorBody,setBodyError]= useState('')
    const [focusedInput,setFocusInput] = useState<'title' | 'body'|null>(null)
     
    useEffect(()=>{
        inputRefTitle.current?.focus();
        return()=>{
            setFocusInput(null)
            inputRefTitle.current?.blur()
            inputRefBody.current?.blur()
        }

    },[])
    function handleChangeTitle(value: string): void {
        setTitle(value)
        if(!value.trim())
        {
         setTitleError('Title Required')
        }else
        {
            setTitleError('')
        }

    }
     function handleChangeBody(value: string): void {
        setBody(value)
        if(!value.trim())
        {
            setBodyError('Body Required')
        }else
        {
            setBodyError('')
        }
    }

    function UnfocusNodes(): void {
        setFocusInput(null)
        inputRefTitle.current?.blur()
        inputRefBody.current?.blur()
    }

    function onClickedSubmit(): void {
        if(title!= '' || body != '')
        {
            const postData: PostData={
                title: title.trim(),
                body: body.trim(),
            }
            props.addPosts(postData)
            UnfocusNodes()
            setTitle('')
            setBody('')
            if (props.postData.posts != null && props.postData.error === '') {
                     Utils.showSnackBar('Post added successfully', false);
                        props.navigation.pop();
            } else {
                Utils.showSnackBar(props.postData?.error || 'Something went wrong', false);
            }
        } 
    }

  return (
   
    <View style={styles.container}>
    {/* Title */}
      <TextInput style={[styles.inputStyle, focusedInput ==='title' && styles.focusedInputStyle ]}
      ref={inputRefTitle}
      value={title}
      placeholder='Title'
      onFocus={()=> setFocusInput('title')}
      onChangeText={(value)=>handleChangeTitle(value)}
      returnKeyType='next'
      onSubmitEditing={()=> inputRefBody.current?.focus()}
      />
      {errorTitle && (<Text style={styles.errorText}>{errorTitle}</Text>)}
    {/* Body */}
    <TextInput style={[styles.inputStyle,focusedInput ==='body' && styles.focusedInputStyle]}
      ref={inputRefBody}
      value={body}
      placeholder='Body'
      onFocus={()=> setFocusInput('body')}
      onChangeText={(value)=>handleChangeBody(value)}
      returnKeyType='done'
      onSubmitEditing={UnfocusNodes}
      />

    {errorBody && (<Text style={styles.errorText}>{errorBody}</Text>)}

    <TouchableOpacity 
    disabled= {title===''||body===''}
    style={[styles.submitButton, (title === '' || body === '') && styles.disableButton]}
    onPress={onClickedSubmit}
    >
        <Text style={[styles.submitButtonText,(title === '' || body === '') && styles.diableButtonText]}>Submit</Text>
    </TouchableOpacity>
    </View>
  
  )
}
const mapStateToProps = (state: any) =>{
    return {
        postData: state.posts
    }

}
const mapDispatchToProps = (dispatch : any)=>{
    return{
        addPosts:(postData: PostData)=> dispatch((addPostApi(postData)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddPosts)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'stretch',
        padding:20,
    },
    inputStyle:{
        backgroundColor:'#CAD3C8',
        color:'#000000',
        height:55,
        borderRadius:10,
        marginTop:10,
        paddingHorizontal:10,
        shadowColor:'#000000',
        shadowOffset:{
            width:0,
            height:2,
        },
        elevation:1,
        shadowRadius:3,
        shadowOpacity:0.3
        
    },
    focusedInputStyle:{
      borderColor: '#2C3A47',
      borderWidth:1
    },
    errorInputStyle:{
      borderColor: '#e84118',
      borderWidth:1
    },
    errorText:{
        color:'red',
        fontSize: 16,
        fontWeight:500,
        alignSelf:'stretch'
    },
    submitButton:{
        marginVertical:30,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2C3A47',
        paddingVertical:15,
        borderRadius:10,
        shadowColor:'#000000',
        shadowOffset:{
            height:2,
            width:0,
        },
        shadowOpacity:3,
        shadowRadius:3,
        elevation:1

    },
    disableButton:{
        backgroundColor:'#596275' 
    },
    submitButtonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:700,
        textTransform:'uppercase'
    },
    diableButtonText:{
        color: '#000000'
    }
})