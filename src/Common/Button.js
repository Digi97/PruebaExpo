import React from "react";
import { TouchableOpacity , Text} from "react-native";

const Button = (props) =>{
  return (
    <TouchableOpacity style={{backgroundColor:'red'}} onPress={props.onPress}>
        <Text>
          {props.text}
        </Text>
    </TouchableOpacity>
  );
}

export default Button;
