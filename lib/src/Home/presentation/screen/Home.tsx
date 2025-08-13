import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { RoutesConstants, StackParamList, TabParamList } from '../../../../core/constants/RoutesConstants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PostData } from '../../data/model/PostData';
import { CompositeScreenProps, useFocusEffect } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { deletePostApi, getPostsFromApi } from '../../../../core/services/redux/posts/postsActions';
import PostItems from '../components/PostItems';
import { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';



type ScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, typeof RoutesConstants.HomeScreen>,
    NativeStackScreenProps<StackParamList>
>;
type PostsContainerProps = PropsWithChildren<ScreenProps & {
    postData: {
        isLoading: boolean;
        posts: PostData[];
        error: string;
    };
    fetchPosts: () => void;
    deletePosts: (postId: number | string) => void;
}>;

const ItemSeparator = () => <View style={styles.dividerStyle} />;
const ListHeader = () => <Text style={[styles.textStyle, styles.headingStyle, { marginBottom: 10 }]}>Post List</Text>;
const EmptyListContent = () => <Text style={styles.textStyle}>No Post found.</Text>;

const Home = (props: PostsContainerProps) => {
    const rowRef = useRef<SwipeableMethods | null>(null);

    useFocusEffect(
        useCallback(() => {
            props.fetchPosts();
        }, [props.fetchPosts])
    );

    const handleRefresh = useCallback(() => {
        props.fetchPosts();
    }, [props.fetchPosts]);

    const handleDelete = useCallback((id: number | string) => {
        props.deletePosts(id);
    }, [props.deletePosts]);


    const handleSwipeOpen = (ref: React.RefObject<SwipeableMethods | null>) => {
    if (rowRef.current && rowRef.current !== ref.current) {
        rowRef.current.close();
    }
    rowRef.current = ref.current;
    };

    if (props.postData.isLoading && props.postData.posts.length === 0) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size={'large'} color={'#FFA500'} />
            </View>
        );
    }
    if (props.postData.error && props.postData.posts.length === 0) {
        return (<Text style={styles.textStyle}>{props.postData.error}</Text>);
    }

    return (
        props.postData?.posts && (
            <View style={styles.container}>
              <FlatList
                keyExtractor={(item) => item.id?.toString() ?? ''}
                data={props.postData.posts}
                renderItem={({ item }) => (
                            <PostItems item={item} 
                            onSwipeOpen={handleSwipeOpen} 
                            handleDelete={ (id: number | string)=>handleDelete(id) } />
                            )}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={ListHeader}
                ListEmptyComponent={EmptyListContent}
                refreshing={!!props.postData?.isLoading}
                onRefresh={handleRefresh}
            />

                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => {
                        props.navigation.push(RoutesConstants.AddPosts)
                    }}
                >
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </View>)
    );
};

const mapStateToProps = (state: any) => {
    return {
        postData: state.posts
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchPosts: () => dispatch(getPostsFromApi()),
        deletePosts: (postId: number | string) => dispatch(deletePostApi(postId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteContainer: {
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 100,
        marginVertical: 15,
        borderRadius: 10,
    },
    deleteButtonInner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5,
    },
    textStyle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    headingStyle: {
        fontSize: 24,
        fontWeight: '600'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '600'
    },
    bodyStyle: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic'
    },
    dividerStyle: {
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
        elevation: 5,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },
    fabIcon: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    postItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    }
});

