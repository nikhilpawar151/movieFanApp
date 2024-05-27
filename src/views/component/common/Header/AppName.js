import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { RED } from '../../../../../utils/colors'
import { myFonts } from '../../../../../utils/fontStyles'


const GetCharacter = (letterText, letterAngle, topMargin = 0 ) => {
    return <View style={[styles.boxOne,{transform: [{rotate: letterAngle}],}, {marginTop : topMargin}]}>
            <Text style={styles.text}>{letterText}</Text>
        </View>
}

const AppName = () => {
  return (
    <View style={{flexDirection : 'row', paddingVertical : 10}}>
        {GetCharacter("M", '-20deg', )}
        {GetCharacter("O", '-20deg', -5)}
        {GetCharacter("V", '-10deg', -7)}
        {GetCharacter("I", '0deg', -10)}
        {GetCharacter("E", '0deg', -10)}
        {GetCharacter("F", '10deg', -7)}
        {GetCharacter("I", '20deg',-5 )}
        {GetCharacter("X", '20deg', )}
    </View>
  )
}

export default memo(AppName)

const styles = StyleSheet.create({
    boxOne : {
      height: 25,
      width: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text : {
      fontSize : 25, 
      color : RED, 
      ...myFonts.amarnath
    },
})