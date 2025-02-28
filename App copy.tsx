import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Import the i18n configuration file

const App = () => {
  const { t } = useTranslation(); // t() function is used to access translations
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Change the language dynamically
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('greeting')}</Text>
      <Text>{t('invite.header')}</Text>
      
      {/* Buttons to switch language */}
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Français" onPress={() => changeLanguage('fr')} />
      <Button title="Hindi" onPress={() => changeLanguage('hi')} />
    </View>
  );
};

export default App;
