import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { PostData } from '../data/model/PostData';
import { getUserFromAPi as getPostsFromAPi } from '../../../core/services/redux';
import { connect } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamList, RoutesConstants, StackParamList } from '../../../core/constants/RoutesConstants';
import { CompositeScreenProps } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';

type ScreenProps = CompositeScreenProps<
    DrawerScreenProps<DrawerParamList>, // Child navigator props
    NativeStackScreenProps<StackParamList> // Parent navigator props
>;
type UserContainerProps = PropsWithChildren<ScreenProps & {
  userData: {
    isLoading: boolean;
    users: PostData[];
    error: string;
  };
  fetchUsers: () => void;
}>;


const ItemSeparator = () => <View style={styles.dividerStyle} />;
const ListHeader =()=> <Text style={[styles.textStyle,styles.headingStyle,{marginBottom:10}]}> Post List </Text>
const EmptyListContent = ()=> <Text style = {styles.textStyle}>No Post found.</Text>
const UserContainer = (props:UserContainerProps) => {

    useEffect(()=>{
      props.fetchUsers()
    },[])
    const handleRefresh =()=>{
      props.fetchUsers()
    }

    if(props.userData.isLoading)
    {
      return (
            <ActivityIndicator size={'large'} color={'#FFA500'}/>
        )
    }
    if(props.userData.error)
    {
      return(<Text style = {styles.textStyle}>{props.userData.error}</Text>)
    }

  return (
          props.userData?.users &&( 
          <View style={styles.container}>
            
            <FlatList
              keyExtractor={item=> item.id?.toString()??''}
              data={props.userData.users}
              renderItem={({item})=>
              <View>
              <Text style={[styles.textStyle,styles.titleStyle]}>{item.title}</Text>
              <Text style={[styles.textStyle,styles.bodyStyle]}>{item.body}</Text>
              </View>
              }
              ItemSeparatorComponent={ItemSeparator}
              ListHeaderComponent={ListHeader}
              ListEmptyComponent={EmptyListContent}
              refreshing ={!!props.userData?.isLoading}
              onRefresh={handleRefresh}
            />
          <TouchableOpacity
            style={styles.fab}
            onPress={() => {
              props.navigation.push(RoutesConstants.AddUser)
            
            }}
            >
              <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
          </View>)
         
        )
        
}

const mapStateToProps = (state: any) =>{
    return {
        userData: state.user
    }

}
const mapDispatchToProps = (dispatch : any)=>{
    return{
        fetchUsers:()=> dispatch(getPostsFromAPi())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    textStyle:{
        color:'#000000',
        fontSize:18,
        fontWeight:600
    },
    headingStyle:{
        fontSize:24,
        fontWeight:600
    },
    titleStyle:{
        fontSize:18,
        fontWeight:600
    },
    bodyStyle:{
        fontSize:16,
        fontWeight:400,
        fontStyle:'italic'
    },
     dividerStyle:
    {
      height: 1,
      backgroundColor: '#d3d3d3',
      marginVertical: 15,
    },
    fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // for Android shadow
    shadowColor: '#000000', // for iOS shadow
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
})