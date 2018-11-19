/* First party */
import { Component } from 'react'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    width: 15rem;
    margin: 0 auto;
`

const SearchInput = styled.input.attrs({ type: 'text' })`
    border: 1px solid gray;
    border-radius: 0.2rem;
    text-decoration: none;
    height: 2rem;
    width: 100%;

    &:focus {
        text-decoration: none;
    }
`

export default class SearchBar extends Component {

    render() {
        return (
            <SearchBarContainer>
                <SearchInput />
            </SearchBarContainer>
        )
    }
}