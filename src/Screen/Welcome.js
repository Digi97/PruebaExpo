import React  from "react";
import { StyleSheet, View , FlatList} from 'react-native';
import {styles} from 'estilos';
import {Button, Header, ListItem} from 'common';
import {Center, Box, Container, Text} from 'native-base'

export default class Welcome extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      pokemon:[
        {
            name: "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            name: "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            name: "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            name: "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        }]
    }
  }

  _buscarPokemon = () => {

  }

  renderItem = ({item, index}) => (
    <ListItem
        name={item.name}
        avatar_url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
      />
    )


  render(){
    let {pokemon} = this.state;

    return (
      <Box>
        <Center>
          <Header title="Inicio" />
        </Center>
        <Box alignSelf="center">
          <Button onPress={() => console.log('pruebas')} text="Buscar pokémon" />
      </Box>
        <FlatList
          data={pokemon}
          renderItem={this.renderItem}
          />
      </Box>
    );
  }
}
