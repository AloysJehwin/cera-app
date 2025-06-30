import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} 

from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import GlobalStyles from '../styles/GlobalStyles';
import { Colors } from '../styles/Theme';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('All fields are required');
      return;
    }
    Alert.alert('Registration Successful!');
    navigation.navigate('Home');
  };

  return (
    <LinearGradient colors={Colors.backgroundGradient} style={GlobalStyles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={10} // ⬅️ reduced from 20 or 60
        >

          <ScrollView
            contentContainerStyle={{
              ...GlobalStyles.formContainer,
              flexGrow: 1,
              justifyContent: 'center',
              paddingBottom: 10
            }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={GlobalStyles.heading}>Register</Text>

            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              style={GlobalStyles.input}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={GlobalStyles.input}
            />
            <TextInput
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              style={GlobalStyles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={GlobalStyles.input}
            />

            <TouchableOpacity style={GlobalStyles.button} onPress={handleRegister}>
              <Text style={GlobalStyles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={GlobalStyles.note}>
                Already have an account? <Text style={{ color: Colors.primary }}>Login</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default RegisterScreen;
