import React from 'react';
import {Text,StyleSheet,View,Button,TouchableOpacity} from 'react-native';


const HomeScreen=({navigation})=>{
    return(
        <View>
            <Text> Hii There</Text>
                <Button
                    title="Go to Component Demo"
                    onPress={() =>
                             navigation.navigate('Components')
                                }
                />
                <Button
                    title="Go to List Demo"
                    onPress={() =>
                        navigation.navigate('List')
                             }
                />
            
        </View>
    )
};

const styles=StyleSheet.create({
    text:{
        fontSize:30
    }
});

export default HomeScreen;