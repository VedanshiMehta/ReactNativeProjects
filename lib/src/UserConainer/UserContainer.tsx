import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from './data/model/user'
import { getUserFromAPi } from '../../core/services/redux/user/userActions'
type UserContainerProps =PropsWithChildren<{
 userData: {
    isLoading: false,
    users: User[],
    error:''
};
 fetchUsers:()=> void
}>
const ItemSeparator = () => <View style={styles.dividerStyle} />;
const UserContainer = (props:UserContainerProps) => {

    useEffect(()=>{
      props.fetchUsers()
    },[])


    if(props.userData.isLoading)
    {
      return (<SafeAreaView>
            <ActivityIndicator/>
        </SafeAreaView>)
    }
    if(props.userData.isLoading)
    {
      return(<Text style = {styles.errorText}>{props.userData.error}</Text>)
    }
    if (!props.userData?.users?.length) {
  return <Text style = {styles.errorText}>No users found.</Text>;
}
  return (
          props.userData?.users &&( 
          <View>
            <Text style={[styles.errorText,{marginBottom:10}]}> User List </Text>
            <FlatList
              scrollEnabled={false}
              keyExtractor={item=> item.id?.toString()??''}
              data={props.userData.users}
              renderItem={({item})=>
              <View>
              <Text style={styles.errorText}>Name: {item.name}</Text>
              <Text style={styles.errorText}>E-mail: {item.email}</Text>
              <Text style={styles.errorText}>Contact: {item.phone}</Text>
              </View>
              }
              ItemSeparatorComponent={ItemSeparator}
            />
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
        fetchUsers:()=> dispatch(getUserFromAPi())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)

const styles = StyleSheet.create({
 errorText:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:600
    },
     dividerStyle:
    {
      height: 1,
      backgroundColor: '#d3d3d3',
      marginVertical: 15,
    }
})