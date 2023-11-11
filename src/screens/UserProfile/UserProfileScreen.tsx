import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  Button,
} from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import {Avatar, ListItem, Card} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from '@rneui/themed';
// import {Avatar,ListItem} from 'react-native-elements';
import {AppStyles} from './styles';

type MyComponentProps = {
  inputItems: string[][];
};

const ProfileOptions: React.FC<MyComponentProps> = ({inputItems}) => {
  return (
    <>
      <Card>
        {inputItems.map((item, ind) => (
          <TouchableOpacity
            onPress={() => {
              Alert.alert('clicked');
            }}
            key={ind}>
            <ListItem bottomDivider>
              <Avatar
                size={30}
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                containerStyle={{backgroundColor: '#BDBDBD'}}
              />
              <ListItem.Content>
                <ListItem.Title>{item[0]}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 10}}>
                  {item[1]}
                </ListItem.Subtitle>
              </ListItem.Content>
              <Icon name="arrow-right" type="material-community" color="grey" />
            </ListItem>
          </TouchableOpacity>
        ))}
      </Card>
    </>
  );
};

const UserProfileScreen = props => {
  const {navigation} = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: route.params?.name,
  //     });
  //   }, []);

  const settings = [
    ['setting1', 'subSetting1'],
    ['setting2', 'subSetting2'],
    ['setting3', 'subSetting3'],
  ];
  const moreSettings = [
    ['more1', 'submore1'],
    ['more2', 'submore2'],
    ['more3', 'submore3'],
  ];
  return (
    <ScrollView>
      <View>
        <Text style={[styles.title, styles.leftTitle, styles.titleMargins]}>
          Profile
        </Text>
        <ListItem
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: {x: 1, y: 0},
            end: {x: 0.2, y: 0},
          }}
          ViewComponent={LinearGradient} // Only if no expo
          // containerStyle={styles.headecontainer}
          style={styles.headecontainer}
          
          >
          <Avatar
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            size={50}
            rounded
            containerStyle={{backgroundColor: '#6733b9'}}></Avatar>
          <Avatar.Accessory
            size={23}
            onPress={() => navigation.navigate('EditProfile')}
          />

          <ListItem.Content>
            <ListItem.Title style={{color: 'black', fontWeight: 'bold'}}>
              Chris Jackson
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'black'}}>
              Vice Chairman
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <ProfileOptions inputItems={settings} />

        <Text style={[styles.title, styles.leftTitle]}>More</Text>

        <ProfileOptions inputItems={moreSettings} />

        {/* 
        <TextInput value={name} onChangeText={setName} placeholder={'Name'} />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
        />
        <TextInput
          value={birthday}
          onChangeText={setBirthday}
          placeholder={'Birthday'}
        />
        <Button title={'Save'} onPress={handleSave} /> */}
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: AppStyles.fontSize.headTitle,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
  },
  titleMargins: {
    marginTop: 10,
    marginBottom: 10,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 10,
  },
  headecontainer: {
    marginHorizontal: 15, // Set horizontal margin
    marginVertical: 10, // Set vertical margin
    alignItems: 'center',
  },
});
