import React from 'react';
import {TouchableHighlight, Image, Text, View} from 'react-native';
import styles from './styles';
// import PropTypes from "prop-types";

type MenuButtonProps = {
  onPress: ()=>void;
  source: number;
  title: string;
};

// function React.FC<MenuButton>(props) {
const MenuButton: React.FC<MenuButtonProps> = props => {
  const {title, onPress, source} = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.btnClickContain}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

// MenuButton.propTypes = {
//   onPress: PropTypes.func,
//   source: PropTypes.number,
//   title: PropTypes.string,
// };
export default MenuButton;
