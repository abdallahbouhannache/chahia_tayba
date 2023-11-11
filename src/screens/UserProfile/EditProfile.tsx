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
  FlatList,
} from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import {Avatar, ListItem, Card, Icon, Button, Input} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Avatar,ListItem} from 'react-native-elements';
import {AppStyles} from './styles';

const handleSave = () => {
  // Update user profile here
};

// type MyComponentProps = {
//   inputItems: string[][];
// };

// const ProfileFields: React.FC<MyComponentProps> = ({inputItems}) => {
//   const [email, setEmail] = useState('');
//   return (
//     <>
//       <Card>
//         {inputItems.map((item, ind) => (
//           <ListItem bottomDivider key={ind}>
//             <ListItem.Content>
//               <TextInput
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder={'Email'}
//               />

//               <TextInput
//                 value={state[fieldName]}
//                 onChangeText={value => handleChange(fieldName, value)}
//                 placeholder={fieldName}
//               />

//               {/* <ListItem.Title>{item[0]}</ListItem.Title>
//                 <ListItem.Subtitle style={{fontSize: 10}}>
//                   {item[1]}
//                 </ListItem.Subtitle>
//                 */}
//             </ListItem.Content>
//             {/* <Icon name="arrow-right" type="material-community" color="grey" /> */}
//           </ListItem>
//         ))}
//       </Card>
//     </>
//   );
// };

const EditProfile = props => {
  const {navigation} = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const initValues = [
    ['Name', 'user'],
    ['Last', ''],
    ['Phone', 'phone'],
    ['Gender', ''],
    ['calendar', 'calendar-o'],
  ];

  const [textFields, setTextFields] = useState(initValues);

  const settings = [
    ['setting1', 'subSetting1'],
    ['setting2', 'subSetting2'],
    ['setting3', 'subSetting3'],
  ];

  const updateTextField = (index: number, value: string) => {
    console.log(index, value);

    setTextFields(prevTextFields => {
      const updatedTextFields: string[][] = [...prevTextFields];
      updatedTextFields[index][0] = value;
      return updatedTextFields;
    });
  };

  const renderTextField = ({item, index}) => {
    // style={styles.textFieldContainer}

    {
      /* <TextInput
      value={item}
      onChangeText={value => updateTextField(index, value)}
      placeholder={`Text Field ${index + 1}`}
      style={styles.textField}
    /> */
    }
    console.log(item,index);
    console.log(item[1]);
    return (
      <View>
        <Input
          placeholder={item[0]}
          rightIcon={{type: 'font-awesome', name: item[1] || 'user'}}
          rightIconContainerStyle={styles.rightIconContainer}
          // underlineColorAndroid="white"

          // onChangeText={value => setTextFields(value)}
          onChangeText={value => updateTextField(index, value)}
          style={styles.textField}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle, styles.titleMargins]}>
        Profile
      </Text>
      <ListItem
        // linearGradientProps={{
        //   colors: ['#FF9800', '#F44336'],
        //   start: {x: 1, y: 0},
        //   end: {x: 0.15, y: 0},
        // }}
        // ViewComponent={LinearGradient} // Only if no expo
        // style={styles.listItem}
        containerStyle={styles.headcontainer}
      >
        <Avatar
          source={{uri: 'https://randomuser.me/api/portraits/men/38.jpg'}}
          size={50}
          rounded
          icon={{name: 'pencil', type: 'font-awesome'}}
          containerStyle={{backgroundColor: '#6733b9'}}>
          <Avatar.Accessory size={20} />
        </Avatar>

        <ListItem.Content>
          <ListItem.Title style={{color: 'black', fontWeight: 'bold'}}>
            Chris Jackson
          </ListItem.Title>
          <ListItem.Subtitle style={{color: 'black'}}>
            Vice Chairman
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <FlatList
        data={textFields}
        renderItem={renderTextField}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />

      {/* <ProfileFields inputItems={settings} /> */}

      {/* <TextInput value={name} onChangeText={setName} placeholder={'Name'} />
        <TextInput value={email} onChangeText={setEmail} placeholder={'Email'}  />
        <TextInput
          value={birthday}
          onChangeText={setBirthday}
          placeholder={'Birthday'}
        />
        <Icon name="arrow-right" type="material-community" color="grey" />
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder={'Phone'}
        />
        <TextInput
          value={gender}
          onChangeText={setGender}
          placeholder={'Gender'}
        /> */}

      <Button
        title={'Update Profile'}
        titleStyle={{fontWeight: '700'}}
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 5,
        }}
        size="lg"
        onPress={handleSave}
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{marginLeft: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: AppStyles.fontSize.headTitle,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
  },
  titleMargins: {
    marginBottom: 5,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    
  },
  boutton: {
    color: '',
    borderRadius: 10,
    padding: 10,
    backgroundColor: AppStyles.color.tint,
  },
  // listItem:{
    
  // },
  headcontainer: {
    height:120,
    marginBottom:10,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'center', // Center items vertically
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  flatListContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  flatList: {
    padding: 8,
  },
  textField: {
    marginBottom: 8,
    padding: 5,
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // borderRadius: 4,
    // elevation: 4,
    // shadowColor: AppStyles.color.tint,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    borderBottomWidth: 0,

  },
  rightIconContainer: {
    borderWidth: 0,
    height:40,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
      
  },
});

export default EditProfile;
