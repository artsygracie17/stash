/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

const ResultCardContainer = styled.div`
    width: 20rem;
    height: 20rem;
    margin: 1rem;
    padding: 1rem;
`

const ResultCardBody = styled.div`
    border-radius: 0.2rem;
    margin: 1rem;
    padding: 0rem;
    position: absolute;
`

const ResultGif = styled.img`
    border-radius: 0.2rem;
    opacity: 1;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`
const Favorite = styled.div`
    opacity: 1;
    text-align: right;

    &:hover {
        cursor: pointer;
    }
`

const handleFavoritesUpdate = () => {
    this.updateFavorites(this.props.gif)
    console.log('clicked')
    console.log(this.props.gif)
}

export default class ResultCard extends React.Component {

    render () {
        const { gif } = this.props
        const { handleFavoritesUpdate } = this
        const gifUrl = gif.images.fixed_width_downsampled.url
        return (
            <ResultCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <ResultCardBody> 
                    <Favorite onClick={handleFavoritesUpdate}>
                        <i className='material-icons'>favorite_border</i>
                    </Favorite>
                    <ResultGif src={gifUrl}></ResultGif>
                </ResultCardBody>
            </ResultCardContainer>
        )
    }
}

ResultCard.defaultProps = {
   gif: {},
   updateFavorites: () => {}
}

ResultCard.propTypes = {
    gif: PropTypes.object,
    updateFavorites: PropTypes.func
}