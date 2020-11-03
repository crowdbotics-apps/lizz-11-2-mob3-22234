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

  state = { CheckBox_5: true }

  render = () => (
    <View>
      <Text>
        This is blank screen 2. The below checkbox should navigate to blank
        screen 1 onpress
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen1166934")}
      >
        <CheckBox
          title="Checkbox"
          checked={this.state.CheckBox_5}
          onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
        />
      </TouchableOpacity>
      <Text>The below icon should navigate to blank screen 0 onpress</Text>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("BlankScreen0-2020-11-021166891")
        }
      >
        <Icon name="angle-double-left" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_3: {},
  CheckBox_5: {},
  Text_7: {},
  Icon_9: {}
})
