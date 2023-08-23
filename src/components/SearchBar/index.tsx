import styled from '@emotion/styled'
import * as React from 'react'

interface SearchBarProps {
  onSearch: (keyword: string) => void
}

const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
`

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
    console.log(e.target.value)
  }

  return <Input onChange={(e) => handleChange(e)} />
}

export default SearchBar
