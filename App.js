
import Welcome from './src/Screen/Detail';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Welcome />
    </NativeBaseProvider>
  );
}
