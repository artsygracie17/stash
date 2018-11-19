/* First Party */
import styled from 'styled-components'
import React from 'react'

const InputWrapper = styled.div`
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: 0 0 5px light gray;
  display: flex;
  font-family: 'NeueHaasUnicaPro-Regular';
  width: 100%;
`

const SearchInput = styled.input.attrs({ type: 'text' })`
  appearance: none;
  background-color: white;
  border: 1px solid white;
  border-radius: 0.2rem 0 0 0.2rem;
  color: black;
  display: inline-flex;
  flex-grow: 1;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 400;
  height: 3rem;
  line-height: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  width: 100%;
  &:focus {
    background-color: white;
    outline: 0;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }
`

const SearchIcon = styled.span`
  color: gray ;
  display: inline-flex;
  font-size: 1.4rem;
  position: relative;
  right: 1.5rem;
  top: 0.1rem;
  width: 0;
  &:hover {
    color: gray;
  }
`

export default class Searchbar extends React.Component {
  static getDerivedStateFromProps (nextProps, prevState) {
    if (prevState.searchTerm !== nextProps.searchTerm) {
      return {
        searchTerm: nextProps.searchTerm
      }
    }
    return null
  }

  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchTerm)
  }

  render () {
    return (
      <form key={'unique'} onSubmit={this.handleSubmit}>
        <InputWrapper>
          <SearchInput autoFocus
            value={this.state.searchTerm}
            placeholder='Search for a gif'
            onChange={this.handleChange}
          />
          <button
            onClick={this.handleSubmit}>
            <SearchIcon>search</SearchIcon>
          </button>
        </InputWrapper>
      </form>
    )
  }
}

Searchbar.defaultProps = {
  value: '',
  onSubmit: () => {}
}
