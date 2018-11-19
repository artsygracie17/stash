import { Component } from 'react'

import Searchbar from '../components/Searchbar'

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
            <div>
                <div> testing index </div> 
                <Searchbar />
            </div>
        )
    }
}
