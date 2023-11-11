import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./styles";
// import PropTypes from "prop-types";

type MenuImageProps = {
  onPress: ()=>void;
  source: number,
  title: string
};
  
const MenuImage: React.FC<MenuImageProps> = (props) =>{
  const { onPress } = props;

  return (
    <TouchableOpacity
     style={styles.headerButtonContainer} onPress={onPress}>
      <Image style={styles.headerButtonImage} source={require("../../../assets/icons/menu.png")} />
    </TouchableOpacity>
  );

}


export default MenuImage;