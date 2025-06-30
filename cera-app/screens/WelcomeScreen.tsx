import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { Colors } from '../styles/Theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={Colors.backgroundGradient} style={GlobalStyles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={GlobalStyles.animationContainer}>
        <LottieView
          source={require('../assets/animations/welcome_page.json')}
          autoPlay
          loop
          style={GlobalStyles.lottie}
        />
      </View>

      <Animated.View style={{ ...GlobalStyles.innerContainer, opacity: fadeAnim }}>
        <Text style={GlobalStyles.heading}>CERA</Text>
        <Text style={GlobalStyles.subheading}>
          Smart Emergency Guidance at Your Fingertips
        </Text>
        <Text style={GlobalStyles.description}>
          CERA uses AI and contextual awareness to guide you through critical
          situations like fire, flood, intrusion, or medical emergencies —
          tailored to your exact environment.
        </Text>

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={GlobalStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
