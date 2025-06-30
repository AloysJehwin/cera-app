import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import GlobalStyles from '../styles/GlobalStyles';
import { Colors } from '../styles/Theme';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Email and Password are required');
      return;
    }

    // Placeholder logic
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Login Successful!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <LinearGradient colors={Colors.backgroundGradient} style={GlobalStyles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={GlobalStyles.formContainer}>
        <Text style={GlobalStyles.heading}>Login</Text>
        <Text style={GlobalStyles.subheading}>
          Access your CERA account
        </Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={GlobalStyles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={GlobalStyles.input}
        />

        <TouchableOpacity style={GlobalStyles.button} onPress={handleLogin}>
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
