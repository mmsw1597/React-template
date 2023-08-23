interface HeaderProps {
  children: React.ReactNode
  level: number
  strong: boolean
  underline: boolean
  color: string
}

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
}: HeaderProps) => {
  if (level < 1 || level > 6) {
    console.warn('Header only accept 1~6 as level')
    level = 1
  }
  const Tag = `h${level}` as HeaderTag

  const fontStyle = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : undefined,
    color,
  }

  return <Tag style={{ ...fontStyle }}>{children}</Tag>
}

export default Header
