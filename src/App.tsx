import { useState } from 'react'
import EmojiList from './components/EmojiList'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import emojiArray from './data/emojiArray.json'

function App() {
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <Header>Emoji Search</Header>
      <SearchBar onSearch={setKeyword} />
      <EmojiList emojiArray={emojiArray} keyword={keyword} />
    </>
  )
}

export default App
