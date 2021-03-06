import { AsyncStorage } from 'react-native';

const deviceStorage = {
  //AsyncStorage functions
  async saveKey(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      const email = await AsyncStorage.getItem('email');
      const isMerchant = await AsyncStorage.getItem('isMerchant');
      if (value !== null) {
        this.setState({
          jwt: value,
          email: email,
          isMerchant: isMerchant,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async deleteJWT() {
    try {
      await AsyncStorage.removeItem('id_token')
        .then(
          () => {
            this.setState({
              jwt: '',
              email: '',
              isMerchant: false,
            })
          }
        );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;