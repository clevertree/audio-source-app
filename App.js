import React, { Component } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import MenuDrawer from 'react-native-side-drawer';

const {AudioSourcePlayerElement} = require('./audio-source/player/audio-source-player.js');
// const ASUIComponentBase = require('./app/support/ASUIComponentBase.js').default;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    setTimeout(e => this.toggleMenu(), 200);
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  updateMenu = () => {
    this.forceUpdate();
  };


  drawerContent = () => {
    let content = <Text>Close</Text>;
    if(this.playerElm)
      content = this.playerElm.renderMenu();
    return (
        <TouchableOpacity onPress={this.toggleMenu}>
          <View style={styles.menuContainer}>{content}</View>
        </TouchableOpacity>
    );
  };

  render() {
    return (
        <View style={styles.container}>
          <MenuDrawer
            open={this.state.menuOpen}
            drawerContent={this.drawerContent()}
            drawerPercentage={55}
            animationTime={50}
            overlay={true}
            opacity={1.0}
            >
            <SafeAreaView>
              <TouchableWithoutFeedback onPress={this.state.menuOpen ? this.toggleMenu : null}>
                <View>
                  <AudioSourcePlayerElement
                    ref = {ref => this.playerElm = ref}
                    onToggleMenu={this.toggleMenu}
                    onUpdateMenu={this.updateMenu}
                    />
                </View>
              </TouchableWithoutFeedback>
            </SafeAreaView>
          </MenuDrawer>
        </View>
    );
  }
}
const styles = require('./audio-source/player/assets/audio-source-player.style.js').default;

export default App;
