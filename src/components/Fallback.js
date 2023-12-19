import {StyleSheet, View, Text, Image} from 'react-native';
import react from 'react'

const Fallback=()=>{
    return (
        <View style={{ alignItems: "center" }}>
            <Image 
                source={require("../../assets/to-do-list.png")} 
                style={{height: 300, width: 300}}
            />
            <Text> Start Adding Your Task</Text>
        </View>
    );
};

export default Fallback;

const Styles = StyleSheet.create({});