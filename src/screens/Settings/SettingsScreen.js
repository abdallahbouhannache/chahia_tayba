import React, { useState,useLayoutEffect } from "react";
import { View, TextInput, Button } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";


const SettingsScreen = (props) => {
    const { navigation } = props;
    const [language, setLanguage] = useState('English');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
    const handleSave = () => {
      // Update global settings here
    };

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [birthday, setBirthday] = useState("");
  
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
  
    return (
      <View>
        <TextInput
            value={language}
            onChangeText={setLanguage}
            placeholder={'Language'}
        />
        <TextInput
            value={notificationsEnabled ? 'Enabled' : 'Disabled'}
            onChangeText={(value) => setNotificationsEnabled(value === 'Enabled')}
            placeholder={'Notifications'}
        />
        <Button title={'Save'} onPress={handleSave} />
      </View>
    );
  };
  
  export default SettingsScreen;