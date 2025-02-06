import React from 'react';
import { StatusBar } from 'react-native';
import store from './src/redux/store';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider as ReduxProvider } from 'react-redux';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <StackNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
