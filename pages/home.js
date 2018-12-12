/* First party */
import { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

/* Third party */
import Searchbar from '../components/Searchbar'
import ResultCard from '../components/ResultCard'

const Container = styled.div`
    margin: 0 auto;
`

const Header = styled.div`
    color: gray;    
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    text-align: center;
`

const Search = styled.a`
    display: inline-block;
    margin-right: 0.3rem;
    color: ${props => props.isActive ? 'black' : 'gray'};

    &:hover {
        cursor: pointer;
    }
`

const Favorites = styled(Search)`
    margin-right: 0rem;  
    margin-left: 0.8rem;
`

const Theme = styled(Grid)`
    font-family: 'NeueHaasUnicaPro-Regular';
`
const apiKey = 'G3kX7Y9C74tjpHZadKuIGqjwLrCmfZnU'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            searchTerm: '',
            results: [],
            favorites: [],
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
          searchTerm: event.target.value
        })
      }    

    handleSearchbarSubmit = (searchTerm) => {
        console.log('in handlesubmit: ', searchTerm)
        let urlRequest = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${apiKey}&limit=50`
        fetch(urlRequest)
            .then(res => res.json())
            .then(results => {
                const resultsArray = results.data
                this.setState({
                    results: resultsArray
                })
            })
    }

    handlePageToggle = () => {
        this.setState({
            home: !this.state.home
        })
    }

    handleFavoritesUpdate = (gif) => {
        this.setState({
            favorites: [...this.state.favorites, gif]
        })
        console.log('favs: ', this.state.favorites)
    }
    
    render () {
        const { searchTerm, results, favorites, home } = this.state
        const {
            handleSearchTermChange,
            handleSearchbarSubmit,
            handlePageToggle,
            handleFavoritesUpdate
        } = this
        return (
            <Container>
                <Header>
                    <Search isActive={home} onClick={handlePageToggle}> search </Search> .
                    <Favorites isActive={!home} onClick={handlePageToggle}> favorites </Favorites>
                </Header>
                { home 
                ? <Theme>
                    <Row center='xs'>
                        <Col xs={6}>
                            <Searchbar 
                                searchTerm={searchTerm} 
                                onChange={handleSearchTermChange}
                                onSubmit={handleSearchbarSubmit} />
                        </Col>
                    </Row>
                    <Row center='xs'>
                        { console.log('resultssss: ', results)}
                        { results.map(result => {
                            return (
                                <Col key={result.id}>
                                    <ResultCard 
                                        gif={result}
                                        updateFavorites={handleFavoritesUpdate}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Theme>
                : <Theme>
                    <Row center='xs'>
                        { console.log('favorites: ', favorites)}
                        { favorites.map(fav => {
                            return (
                                <Col key={fav.id}>
                                    <ResultCard 
                                        gif={fav}
                                        updateFavorites={handleFavoritesUpdate}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Theme>
                }
            </Container>
        )
    }
}
