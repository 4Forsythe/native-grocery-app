import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Bell, MapPin, Search } from 'lucide-react-native';

import { Colors, Sizes } from '@/shared/constants';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableHighlight>
        <View style={styles.delivery}>
          <MapPin color={Colors.text} size={32} strokeWidth={2} />
          <View style={styles.delivery_address}>
            <Text style={styles.address_caption}>Express delivery</Text>
            <Text style={styles.address_heading}>Deepolie Street, 42</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.action_buttons}>
        <TouchableHighlight>
          <Search color={Colors.text} size={28} absoluteStrokeWidth />
        </TouchableHighlight>
        <TouchableHighlight>
          <Bell color={Colors.text} size={28} absoluteStrokeWidth />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    height: 60,
    width: '100%',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    position: 'absolute',
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delivery_address: {
    marginStart: 6,
  },
  address_caption: {
    fontSize: Sizes.h5,
    fontWeight: '400',
    color: Colors.muted,
  },
  address_heading: {
    fontSize: Sizes.h3,
    fontWeight: '600',
  },
  action_buttons: {
    gap: 12,
    flexDirection: 'row',
  },
});
