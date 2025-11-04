import React, { JSX, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ButtonShape from './components/ButtonShape';

type ShapeType = 'rectangle' | 'capsule' | '';

export default function App(): JSX.Element {
  const [rectBackgroundColor, setRectBackgroundColor] = useState<string>('#FFFFFF');
  const [capsuleBackgroundColor, setCapsuleBackgroundColor] = useState<string>('#FFFFFF');
  const [shape, setShape] = useState<ShapeType>('');

  const generateColor = (forShape: ShapeType) => {
    const hexList = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexList[Math.floor(Math.random() * 16)];
    }

    switch (forShape.toLowerCase()) {
      case 'rectangle':
        setRectBackgroundColor(color);
        break;
      case 'capsule':
        setCapsuleBackgroundColor(color);
        break;
      default:
        setRectBackgroundColor('#FFFFFF');
        setCapsuleBackgroundColor('#FFFFFF');
        break;
    }
  };

  const handleShapePress = (selectedShape: ShapeType) => {
    setShape(selectedShape);
    generateColor(selectedShape);
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <View style={styles.container}>
        {/* Row One */}
        <View style={styles.buttonContainer}>
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
        </View>

        {/* Row Two */}
        <View style={styles.buttonContainer}>
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
        </View>

        {/* Row Three */}
        <View style={styles.buttonContainer}>
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
        </View>

        {/* Row Four */}
        <View style={styles.buttonContainer}>
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
          <ButtonShape
            shape="rectangle"
            backgroundColor={rectBackgroundColor}
            onPress={() => handleShapePress('rectangle')}
          />
          <ButtonShape
            shape="capsule"
            backgroundColor={capsuleBackgroundColor}
            onPress={() => handleShapePress('capsule')}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
