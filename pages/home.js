/* First party */
import { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

/* Third party */
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'

const Container = styled.div`

`

const Theme = styled(Grid)`
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
            <Container>
                {/* <Theme> */}
                    <h1> My Giphy </h1>
                    <Row center='xs'>
                        <Col xs={12}>
                            <Searchbar />
                        </Col>
                    </Row>
                {/* </Theme> */}
            </Container>
        )
    }
}
