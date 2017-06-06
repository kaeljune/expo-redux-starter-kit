import Expo from 'expo';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReduxThunk from 'redux-thunk';

import store from './store';



injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello oono!!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
Expo.registerRootComponent(App);
