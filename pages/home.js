import { Component } from 'react'

/* Third party */
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'

const Theme = styled.div`
    font-family: 'NeueHaasUnicaPro-Regular';
`

export default class Home extends Component {

    componentDidMount() {
        const apiKey = 'G3kX7Y9C74tjpHZadKuIGqjwLrCmfZnU'
        let searchTerm = 'pink'
        let urlRequest = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`

        fetch(urlRequest)
            .then(res => res.json())
            .then(result =>
                console.log(result)
            )
    }
    
    render () {
        return ( 
            <Theme>
                <div> testing index </div> 
                <Searchbar />
            </Theme>
        )
    }
}
