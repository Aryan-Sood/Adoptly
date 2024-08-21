import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoriesList({style}) {

  const path = "../assets/images/"
  const data = [
    require(path+"dog.png"),
    require(path+"cat.png"),
    require(path+"fish.png"),
    require(path+"bird.png")
  ]

  function renderListItem({item}){
    return (
        <View style={[style ? style : null, styles.backView]}>
            <Image style={{width:80, height:80}} source={item} />
        </View>
    );
  }


  return (
    <FlatList showsHorizontalScrollIndicator= {false} horizontal={true} data={data} renderItem={renderListItem} keyExtractor={(item, index) => index.toString()} />
  )
}


const styles = StyleSheet.create({
    backView:{
        marginLeft:12,
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'#f5b85d',
        borderRadius:8,
        borderWidth:2,
        borderColor: '#d6bf7e'

    }
})