import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import styles from './styles';
// import PropTypes from "prop-types";

type BackButtonProps = {
  onPress: ()=>void;
  // source?: number;
  // title: string;
};

const BackButton: React.FC<BackButtonProps> = props => {
  const {onPress} = props;

  return (
    <TouchableHighlight onPress={onPress} style={styles.btnContainer}>
      <Image
        source={require('../../../assets/icons/backArrow.png')}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
};

// BackButton.propTypes = {
//   onPress: PropTypes.func,
//   source: PropTypes.number,
//   title: PropTypes.string,
// };

export default BackButton;
