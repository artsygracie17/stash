import { Component } from 'react'

export default class Home extends Component {
    
    render () {

        const apiKey = 'G3kX7Y9C74tjpHZadKuIGqjwLrCmfZnU'
        let searchTerm = 'pink'
        let urlRequest = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`

        return ( 
            <div> testing index </div> 
        )
    }
}
