import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import {  WHITE } from '../../../../../utils/colors'
import { myFonts } from '../../../../../utils/fontStyles'

const placeholder = require('../../../../../assets/images/placeholder.png')

const MovieItem = ({movie, index}) => {
  
  return (
    <View>
        <Image
        source={{uri : `https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}}
        defaultSource={placeholder}
        style={{
          ...styles.moviePhoto,
          marginLeft : index % 2 == 0 ? 10 : 5, 
          marginRight : index % 2 == 0 ? 5 : 10, 
          }}
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
    </View>
    
  )
}

export default memo(MovieItem)

const styles = StyleSheet.create({
  moviePhoto : {
    width: Dimensions.get('window').width/2-15, 
    height: Dimensions.get('window').width * 1.5/2 - 21, 
    marginVertical : 7, 
    opacity : 0.5
  },
  titleView : {
    position: 'absolute', 
    top: 0, 
    left: 15, 
    right: 0, 
    bottom: 15, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start'
  },
  title : {
    color : WHITE, 
    fontSize : 20, 
    ...myFonts.archivoSemiBold
  },
})