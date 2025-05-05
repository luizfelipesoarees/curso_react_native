import React from 'react'
import { View, FlatList } from "react-native"
import users from '../data/users'
import { ListItem, Avatar, Button } from 'react-native-elements'

export default props => {

function getActions(user) {
   return (
      <>
         <Button
            onPress={() => props.navigation.navigate('UserForm', user)}
         />
      </>
   )
}

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
            >
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    rightElement={getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
