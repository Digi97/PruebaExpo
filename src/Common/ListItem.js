import { ListItem, Avatar } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';

const Item = (props) => {

    return (<ListItem
  Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: { x: 1, y: 0 },
    end: { x: 0.2, y: 0 },
  }}
  ViewComponent={LinearGradient} // Only if no expo
>
  <Avatar rounded source={{ uri: props.avatar_url }} size="large" />
  <ListItem.Content>
    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
      {props.name}
    </ListItem.Title>

  </ListItem.Content>
  <ListItem.Chevron color="white" />
</ListItem> );
}

export default Item;
