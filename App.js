import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {applyMiddleware, createStore} from "redux";
import reducer from './src/reducers/index'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import Navbar from "./src/components/navbar/Navbar";
import DeviceList from "./src/components/deviceList/DeviceList";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navbar/>
          <DeviceList/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:"100%"
  },
  text: {
    color:"black"
  }
});
