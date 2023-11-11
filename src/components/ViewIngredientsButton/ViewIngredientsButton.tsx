import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';

type ViewIngredientsButtonProps = {
  onPress: ()=>void;
  source: number,
  title: string
};

const ViewIngredientsButton: React.FC<ViewIngredientsButtonProps> = (props) =>{

    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    );
}


export default ViewIngredientsButton;
