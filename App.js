import React, { Component } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView, ScrollView,
  Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import MenuDrawer from 'react-native-side-drawer';
import {ASPlayer} from './audio-source/player';
import {ASComposer} from "./audio-source/composer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    // setTimeout(e => this.toggleMenu(), 200);
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    if(!this.state.menuOpen)
      this.playerElm.switchToMenu(null);
  };

  updateMenu = () => {
    this.forceUpdate();
  };


  drawerContent = () => {
    let content = <Text>Close</Text>;
    // if(this.playerElm)
    //   content = this.playerElm.renderMenu();
    return (
        <TouchableOpacity onPress={this.toggleMenu}>
          <View style={styles.menuContainer}>{content}</View>
        </TouchableOpacity>
    );
  };

  render() {
    return (
        <SafeAreaView style={{flex: 1}}>
          <ASComposer />
        </SafeAreaView>
    );
  }
}
// const styles = require('./audio-source/player/assets/audio-source-player.style.js').default;

export default App;
