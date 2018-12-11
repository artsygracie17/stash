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

const Title = styled.h1`
    color: lightblue;
    text-align: center;
`

const Theme = styled(Grid)`
    font-family: 'NeueHaasUnicaPro-Regular';
`
const apiKey = 'G3kX7Y9C74tjpHZadKuIGqjwLrCmfZnU'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home',
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

    componentDidMount() {
        // let urlRequest = `http://api.giphy.com/v1/gifs/search?q=pandas&api_key=${apiKey}&limit=5`
        // fetch(urlRequest)
        //     .then(res => res.json())
        //     .then(result =>
        //         console.log(result)
        //     )
    }
    
    render () {
        const { searchTerm, results } = this.state
        return (
            <Container>
                <Title> my giphy search </Title>
                <Theme>
                    <Row center='xs'>
                        <Col xs={6}>
                            <Searchbar 
                                searchTerm={searchTerm} 
                                onChange={this.handleSearchTermChange}
                                onSubmit={this.handleSearchbarSubmit} />
                        </Col>
                    </Row>
                    <Row>
                        { console.log('resultssss: ', results)}
                        { results.map(result => {
                            return (
                                <Col key={result.id}>
                                    <ResultCard
                                        title={result.title}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Theme>
            </Container>
        )
    }
}
