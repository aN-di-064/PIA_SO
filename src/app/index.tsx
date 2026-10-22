import { useRouter } from 'expo-router';
import { useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Image,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function BootScreen() {
  const router = useRouter();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false } 
      ),
      onPanResponderRelease: (e: GestureResponderEvent, gesture: PanResponderGestureState) => {
        pan.flattenOffset();
        
        // Si el usuario arrastró el disco hacia la bandeja
        if (gesture.dy > 180) {
          // Anima el disco para que sea "succionado" al centro de la bandeja
          Animated.timing(pan, {
            toValue: { x: 0, y: 250 },
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            // Transición al menú principal (home.tsx)
            setTimeout(() => {
              router.replace('/home');
            }, 300);
          });
        } else {
          // Si no lo arrastró lo suficiente, rebota a su lugar original
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
            friction: 5,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Inserta el disco para iniciar</Text>

      {/* 1. EL DISCO */}
      <Animated.View
        style={[
          styles.discContainer,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] }
        ]}
        {...panResponder.panHandlers}
      >
        <Image 
          source={require('../../assets/images/tabIcons/1000209717.png')}
          style={styles.discImage} 
        />
      </Animated.View>

      {/* 2. LA BANDEJA */}
      <View style={styles.trayContainer}>
        <View style={styles.tray}>
          <View style={styles.slot} />
          <Text style={styles.trayText}>BANDEJA DE ENTRADA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  instructions: {
    color: '#555',
    marginTop: 80,
    fontSize: 18,
    fontWeight: 'bold',
  },
  discContainer: {
    position: 'absolute',
    top: 180,
    zIndex: 1, 
    left: '50%',
    marginLeft: -70,
  },
  discImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 70, // Oculta las esquinas blancas del JPG
  },
  trayContainer: {
    position: 'absolute',
    top: 420,
    zIndex: 2,
    width: '100%',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  tray: {
    width: 280,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  slot: {
    width: 220,
    height: 8,
    backgroundColor: '#111',
    borderRadius: 4,
    marginBottom: 12,
  },
  trayText: {
    color: '#888',
    letterSpacing: 2,
    fontSize: 12,
  },
});