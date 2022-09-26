import React, { useRef, useState } from "react";
import MainStack from "./navigator/MainStack.js";
// import Home from "./View/home.js";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid
} from 'react-native';
// import TabletForPercents from './Components/TabletForPercents/TabletForPercents';
// import { InputsNumbers } from './Components/InputsNumbers/InputsNumbers';


export default function App() {

  // // -----------------FUNCTION MENU DISPLAY----------------------
  // const drawer = useRef(null);
  // const [drawerPosition, setDrawerPosition] = useState("right");
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === "left") {
  //     setDrawerPosition("right");
  //   } else {
  //     setDrawerPosition("left");
  //   }
  // };



  // const navigationView = () => (
  //   <View style={[styles.container, styles.navigationContainer]}>
  //     <Button
  //       title="Close drawer"
  //       onPress={() => drawer.current.closeDrawer()}
  //     />

  //     <SafeAreaView style={{ flex: 1 }}>
  //       </SafeAreaView>
  //   </View>
  // );
  // // -----------------FUNCTION MENU DISPLAY----------------------




  return (

    
    // <DrawerLayoutAndroid
    //     ref={drawer}
    //     drawerWidth={300}
    //     drawerPosition={drawerPosition}
    //     renderNavigationView={navigationView}
    //   >

    //     <View style={styles.container}>
    //       <Button
    //         title="Menu"
    //         onPress={() => drawer.current.openDrawer()}
    //       />

    //     </View>
    //   </DrawerLayoutAndroid>
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack />
    </SafeAreaView>

  );
}


