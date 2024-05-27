import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { CATEROY_COLOR, GREY, RED } from '../../../../../utils/colors'
import { myFonts } from '../../../../../utils/fontStyles'


const MovieCategory = ({genres, selectedGenre, categoryClick}) => {
    
  return (
    <View>
        <ScrollView horizontal style={{ paddingTop : 16, paddingBottom : 6}} showsHorizontalScrollIndicator={false} >
        {genres ? 
        <>
            {
                genres.map((genre, index) => {
                    return <Text 
                    key={index} 
                    style={{
                        ...styles.category, 
                        backgroundColor : selectedGenre?.includes(genre.id) ? RED : GREY, 
                        fontFamily : selectedGenre?.includes(genre.id) ? myFonts.sairaSemiBold.fontFamily : myFonts.sairaRegular.fontFamily,
                        fontWeight : selectedGenre?.includes(genre.id) ? myFonts.sairaSemiBold.fontWeight : myFonts.sairaRegular.fontWeight,
                    }}
                    onPress={() => categoryClick(genre.id)}
                    >
                        {genre.name}
                    </Text>
                })
            }
        </>
        : <></>}
        </ScrollView>
      
    </View>
  )
}

export default memo(MovieCategory)

const styles = StyleSheet.create({
    category : {
        color : CATEROY_COLOR, 
        paddingVertical : 6, 
        paddingHorizontal : 12, 
        fontSize : 14, 
        borderRadius : 4, 
        marginHorizontal : 5,
    }
})