import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

// import PropTypes from 'prop-types';

type DrawerContainerProps = {

  navigation: {
    navigate: (arg: string) => void;
    closeDrawer: () => void;
  };

};

// navigation: PropTypes.shape({
//   navigate: PropTypes.func.isRequired,
// }),

const DrawerContainer: React.FC<DrawerContainerProps> = (props) => {

  const {navigation} = props;

  return (
    <View style={styles.content}>
      <View style={styles.container}>
      <MenuButton
          title="Login"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('Login');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="HOME"
          source={require('../../../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('Home');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../../../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../../../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.closeDrawer();
          }}
        />
        {/* <MenuButton
          title="Login"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('Settings');
            navigation.closeDrawer();
          }}
        /> */}
        <MenuButton
          title="Shopping"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('Shopping');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SubmitRecipe"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('SubmitRecipe');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="UserProfile"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('UserProfile');
            navigation.closeDrawer();
          }}
        />

        
        <MenuButton
          title="Register"
          source={require('../../../assets/icons/list.png')}
          onPress={() => {
            navigation.navigate('Register');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
};

// DrawerContainer.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }),
// };

export default DrawerContainer;