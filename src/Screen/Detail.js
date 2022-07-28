import React  from "react";
import { StyleSheet, View , FlatList} from 'react-native';
import {styles} from 'estilos';
import { Header, ListItem} from 'common';
import {Card, Icon, Button} from "@rneui/themed";
import {Center, Box, Text} from 'native-base'

export default class Welcome extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      pokemon:[]
    }
  }

  _buscarPokemon = () => {

  }




  render(){
    let {pokemon} = this.state;

    return (
      <Box>
        <Center>
          <Header title="Inicio" />
        </Center>
      <Card>
          <Card.Title>Bulbasaur</Card.Title>
          <Card.Divider />
          <Card.Image
           style={{ padding: 0 }}
           source={{
             uri:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
           }}
         />
         <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />

      </Card>
      </Box>
    );
  }
}
