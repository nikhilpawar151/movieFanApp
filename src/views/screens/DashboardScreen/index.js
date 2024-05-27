import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  MovieCategory, MovieYear } from '../../component/common'
import { getAPICall } from '../../../network/ApiClient'
import { GET_GENRES } from '../../../network/NetworkUrl'
import { PRIMARY_DARK, SECONDARY_DARK, WHITE } from '../../../../utils/colors'
import AppName from '../../component/common/Header/AppName'
import { Keys } from '../../../../utils/app-constant'



const DashboardScreen = () => {

  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState([-1])
  const [allMovies, setAllMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getAPICall(GET_GENRES)
    .then((res) =>{
      
      setGenres([{id : -1, name : "All"}, ...res.genres])
    })
    .catch(e=> {
      console.log("Error ", e)
    })
  }, [])

  const categoryClick = (id) => {
    let result = selectedGenre.includes(id) ? selectedGenre.filter((g) => g != id) : [...selectedGenre, id]
    if(result.length === 0)
      result = [-1]
    else if(id === -1){
      result = [-1]
    }else {
      result = result.filter(g => g != -1)
    }
    setAllMovies([])
    setSelectedGenre(result)
  }
  
  useEffect(() => {
    
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${Keys.API_KEY}&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100`

    if(!selectedGenre.includes(-1)){
      url = `${url}&with_genres=${selectedGenre.toString()}`
    }
    
    getAPICall(url)
    .then(res => {
      setAllMovies([{ year : 2012, movies : res.results}])
    })
    .catch(e => {
      console.log("Movie Error", e)
    })

  }, [selectedGenre])
  

  const fetchMoreMovies = async (next = true) => {
    
    if(allMovies.at(-1).year >= 2024)
      return
    setIsLoading(true)
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${Keys.API_KEY}&sort_by=popularity.desc&primary_release_year=${allMovies.at(-1).year + 1}&page=1&vote_count.gte=100`

    if(!selectedGenre.includes(-1)){
      url = `${url}&with_genres=${selectedGenre.toString()}`
    }

    getAPICall(url)
    .then(res => {
      setAllMovies([...allMovies, { year : allMovies.at(-1).year + 1, movies : res.results}])
      setIsLoading(false)
    })
    .catch(e => {
      console.log("Movie Error", e)
      setIsLoading(false)
    })

  }
  

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <AppName/>
        <MovieCategory genres={genres} selectedGenre={selectedGenre} categoryClick={categoryClick}/>
      </View>
      {allMovies.length > 0 ?
        <FlatList
        data={allMovies}
        renderItem={({item, index}) => <MovieYear movieYear={item} index={index}/>}
        keyExtractor={item => item.year.toString()}
        onStartReachedThreshold={0.9}
        onEndReached={() => fetchMoreMovies(true)}
        ListFooterComponent={isLoading ? <View style={styles.loadingView}><ActivityIndicator size={'large'} color={WHITE} /></View> : <></>}
        />
      
      : <></>}
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({

  loadingView : { 
    height: 60, 
    paddingVertical: 5, 
  },
  mainView : {
    backgroundColor : PRIMARY_DARK, 
    flex : 1
  },
  headerView : { 
    backgroundColor : SECONDARY_DARK, 
    padding : 10, 
  },
  
})