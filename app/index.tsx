import { StyleSheet, View } from 'react-native';

import { Colors } from '@/shared/constants';
import { Header } from '@/shared/components';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.text,
    backgroundColor: Colors.background,
  },
});
