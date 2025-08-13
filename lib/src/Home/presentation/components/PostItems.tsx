import Swipeable, { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";
import { PostData } from "../../data/model/PostData";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

type PostItemsProps = {
  item: PostData;
  onSwipeOpen: (ref: React.RefObject<SwipeableMethods | null>) => void;
  handleDelete: (id: number | string) => void;
};

const PostItems: React.FC<PostItemsProps> = ({ item, onSwipeOpen, handleDelete }) => {
  const thisRowRef = useRef<SwipeableMethods | null>(null);

  const renderActions = useCallback(
    (id: number | string, isEdit: boolean) => {
      const handleEdit = (id: string | number) => {
        console.log(`Edit: ${id}`);
      };

      return (
        <TouchableOpacity
          style={[styles.container, isEdit ? styles.editContainer : styles.deleteContainer]}
          onPress={() => (isEdit ? handleEdit(id) : handleDelete(id))}
        >
          <View style={styles.deleteButtonInner}>
            <Icon name={isEdit ? "edit" : "delete"} color="#ffffff" size={30} />
            <Text style={styles.deleteText}>{isEdit ? "Edit" : "Delete"}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [handleDelete]
  );

  return (
    <Swipeable
      ref={thisRowRef}
      onSwipeableWillOpen={() => onSwipeOpen(thisRowRef)}
      renderRightActions={() => renderActions(item.id ?? 0, false)}
      renderLeftActions={() => renderActions(item.id ?? 0, true)}
      overshootRight={false}
    >
      <View style={styles.postItem}>
        <Text style={[styles.textStyle, styles.titleStyle]}>{item.title}</Text>
        <Text style={[styles.textStyle, styles.bodyStyle]}>{item.body}</Text>
      </View>
    </Swipeable>
  );
};

export default PostItems;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: '50%',
  },
  deleteContainer: {
    backgroundColor: "red",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  editContainer: {
    backgroundColor: "green",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  deleteButtonInner: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  deleteText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 5,
  },
  textStyle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  bodyStyle: {
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "italic",
  },
  postItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
});
