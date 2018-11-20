/* First party */
import { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

/* Third party */
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'

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

    handleSubmit = () => {
        console.log('in handlesubmit: ', this.state.searchTerm)
        let urlRequest = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${apiKey}&limit=5`
        fetch(urlRequest)
            .then(res => res.json())
            .then(result =>
                console.log('in handleSubmit: ', result)
            )
    }

    componentDidMount() {
        let urlRequest = `http://api.giphy.com/v1/gifs/search?q=pandas&api_key=${apiKey}&limit=5`
        fetch(urlRequest)
            .then(res => res.json())
            .then(result =>
                console.log(result)
            )
    }
    
    render () {
        const { searchTerm } = this.state
        return (
            <Container>
                <Title> Product Search </Title>
                <Theme>
                    <Row center='xs'>
                        <Col xs={6}>
                            <Searchbar value={searchTerm} onSubmit={this.handleSubmit} />
                        </Col>
                    </Row>
                </Theme>
            </Container>
        )
    }
}
