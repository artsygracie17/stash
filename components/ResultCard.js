/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const ResultCardContainer = styled.div`
width: 20rem;
height: 20rem;
    margin: 1rem;
    padding: 1rem;
`

const ResultCardBody = styled.div`
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    width: 20rem;
    height: 20rem;
    padding: 0rem 1rem;
`

const ResultTitle = styled.h4`
    color: gray;
`

export default class ResultCard extends React.Component {
    render () {
        const { title } = this.props
        return (
            <ResultCardContainer>
                <ResultCardBody> 
                    <ResultTitle>{title}</ResultTitle> 
                </ResultCardBody>
            </ResultCardContainer>
        )
    }
}

ResultCard.defaultProps = {
    title: ''
}

ResultCard.propTypes = {
    title: PropTypes.string
}