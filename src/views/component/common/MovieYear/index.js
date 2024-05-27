import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { myFonts } from '../../../../../utils/fontStyles'
import { WHITE } from '../../../../../utils/colors'
import MovieItem from '../MovieItem'


const MovieYear = ({movieYear}) => {
    
  return (
    <View>
        <Text style={styles.title}>{movieYear.year}</Text>
        <FlatList
        data={movieYear.movies}
        renderItem={({item, index}) => <MovieItem movie={item} index={index}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        />
    </View>
  )
}

export default memo(MovieYear)

const styles = StyleSheet.create({
  title : {
    ...myFonts.archivoSemiBold, 
    color : WHITE, 
    fontSize : 28, 
    marginLeft : 10, 
    marginTop : 15
  },
})