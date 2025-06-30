import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 220,
    height: 220,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  note: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2979ff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // 🔽 Register form-specific styles
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 14,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default GlobalStyles;
