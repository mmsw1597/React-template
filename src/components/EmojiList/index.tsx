import styled from '@emotion/styled'
import EmojiListItem from '../EmojiListItem'
import { EmojiArray } from 'emojiType'

const Container = styled.ul`
  width: 100%;
  padding: 0;
`

const EmojiList = ({
  emojiArray,
  keyword,
}: {
  emojiArray: EmojiArray
  keyword: string
}) => {
  return (
    <Container>
      {emojiArray
        .filter(
          (emoji) =>
            emoji.title.indexOf(keyword) >= 0 ||
            emoji.keywords.split(' ').includes(keyword),
        )
        .slice(0, 10)
        .map((emoji) => {
          return <EmojiListItem emoji={emoji} key={emoji.title} />
        })}
    </Container>
  )
}

export default EmojiList
