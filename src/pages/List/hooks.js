import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const useCustom = () => {
  const [appState, setAppState] = useState({})
  const history = useHistory()

  const getAllPokemon = async () => {
    setAppState({ loading: true, data: [] })
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
    let pokemonData = {}
    await axios.get(apiUrl).then(async (response) => {
      pokemonData = response?.data?.results
      const pokemonDetail = []
      if (pokemonData.length > 0) {
        await Promise.all(
          pokemonData.map(async (data) => {
            const detailUrl = data.url
            await axios.get(detailUrl).then((resp) => {
              pokemonDetail.push(resp.data)
            })
          })
        )
      }
      setAppState({ loading: false, data: pokemonDetail })
    })
  }

  const handleDetail = (id = []) => () => {
    history.push(`/detail/${id}`)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return {
    data: {
      allPokemon: appState?.data,
    },
    state: {
      loading: appState?.loading,
    },
    handler: {
      handleDetail,
    },
  }
}

export default useCustom
