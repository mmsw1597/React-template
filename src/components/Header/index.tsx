import styled from '@emotion/styled'

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  text-align: center;
`

const Header = ({ children }: { children: React.ReactNode }) => {
  return <Heading>{children}</Heading>
}

export default Header
