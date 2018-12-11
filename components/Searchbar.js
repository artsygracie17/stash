/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

/* First Party */

const InputWrapper = styled.div`
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: 0 0 5px lightgray;
  display: flex;
  width: 100%;
`

const SearchButton = styled.span`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  height: 3rem;
  line-height: 1;
  margin-bottom: 1rem;
  padding: 0.5rem 0.2rem;
  text-align: center;
  width: 20%;
  outline: none;
  margin-bottom: 0;
  &:hover {
    background-color: transparent;
  }
`

const SearchInput = styled.input.attrs({ type: 'text' })`
  appearance: none;
  background-color: white;
  border: 1px solid white;
  border-radius: 0.2rem 0 0 0.2rem;
  box-sizing: border-box;
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
  width: 100%;
  &:focus {
    background-color: white;
    outline: 0;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }
`

const SearchIcon = styled.i`
  color: gray;
  display: inline-flex;
  font-size: 4rem;
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
      searchTerm: props.searchTerm
    }
  }

  handleChange = (event) => {
    this.props.onChange(event)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('in searchbar submit: ', this.state.searchTerm)
    this.props.onSubmit(this.state.searchTerm)
  }

  render () {
    return (
      <form key={'unique'} onSubmit={this.handleSubmit}>
        <InputWrapper>
          <SearchInput autoFocus
            value={this.state.searchTerm}
            placeholder='Search for giphy'
            onChange={this.handleChange}
          />
        </InputWrapper>
      </form>
    )
  }
}

Searchbar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {}
}

Searchbar.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}
