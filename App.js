import React, { Component } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
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
        <View>
          <ASComposer />
          {/*<ASPlayer />*/}
          {/*<MenuDrawer*/}
          {/*  open={this.state.menuOpen}*/}
          {/*  drawerContent={this.drawerContent()}*/}
          {/*  drawerPercentage={55}*/}
          {/*  animationTime={this.state.menuOpen ? 250 : 50}*/}
          {/*  overlay={true}*/}
          {/*  opacity={1.0}*/}
          {/*  >*/}
          {/*  <SafeAreaView>*/}
          {/*    <TouchableWithoutFeedback onPress={this.state.menuOpen ? this.toggleMenu : null}>*/}
          {/*      <View>*/}
                {/*</View>*/}
              {/*</TouchableWithoutFeedback>*/}
            {/*</SafeAreaView>*/}
          {/*</MenuDrawer>*/}
        </View>
    );
  }
}
// const styles = require('./audio-source/player/assets/audio-source-player.style.js').default;

export default App;
