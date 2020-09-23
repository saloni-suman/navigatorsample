import React from 'react';
import {FlatList ,StyleSheet,Text} from 'react-native';

const ListScreen=()=>{
    const friends=[
        {name:"Vishu"},
        {name:"swati"},
        {name:"sharda"},
        {name:"shilpi"},
        {name:"sweta"},
        {name:"yash"},
        {name:"naweli"},
        {name:"shruti"},
    ];

    return (
        <FlatList
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text style={styles.textstyle}>{item.name}</Text>
            }}
        />
    );
};

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:30
    }
});

export default ListScreen;