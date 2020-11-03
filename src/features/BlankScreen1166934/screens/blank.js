import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_8: "", Switch_38: true }

  render = () => (
    <View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("BlankScreen0-2020-11-021166891")
        }
      >
        <Text>This text element should navigate to blank screen 0</Text>
      </TouchableOpacity>
      <Text>
        this text should do nothing ^ 2 line breaks - just spacing between
        elements
      </Text>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <Text>
        The above number input should navigate to blank screen 0 onchange
      </Text>
      <Text>
        The below switch should navigate to blank screen 0 onValueChange
      </Text>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_38}
        onValueChange={nextChecked => this.setState({ Switch_38: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_4: {},
  Text_6: {},
  TextInput_8: {},
  Text_14: {},
  Text_16: {},
  Switch_38: {}
})
