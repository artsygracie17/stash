/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

const ResultCardContainer = styled.div`
    width: 20rem;
    height: 20rem;
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
    color: magenta;
    opacity: 1;
    text-align: right;

    &:hover {
        cursor: pointer;
    }
`

export default class ResultCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favorited: false
        }
    }

    handleFavoritesUpdate = () => {
        this.props.updateFavorites(this.props.gif, this.props.isFavorite)
    }

    render () {
        const { handleFavoritesUpdate } = this
        const { gif, isFavorite } = this.props
        const gifUrl = gif.images.fixed_width_downsampled.url
        return (
            <ResultCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
                <ResultCardBody> 
                    <Favorite onClick={handleFavoritesUpdate}>
                        { isFavorite 
                            ? <i className='material-icons'>favorite</i>
                            : <i className='material-icons'>favorite_border</i>
                        }
                    </Favorite>
                    <a href={gif.url} target='_blank'>
                        <ResultGif src={gifUrl}></ResultGif>
                    </a>
                </ResultCardBody>
            </ResultCardContainer>
        )
    }
}

ResultCard.defaultProps = {
   gif: {},
   updateFavorites: () => {},
   isFavorite: false
}

ResultCard.propTypes = {
    gif: PropTypes.object,
    updateFavorites: PropTypes.func,
    isFavorite: PropTypes.bool
}