import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppWithSafeArea = () => {
    return (
        <SafeAreaProvider>
            <App />
        </SafeAreaProvider>
    );
}

AppRegistry.registerComponent(appName, () => AppWithSafeArea);
