interface TextProps {
  children: React.ReactNode
  block: boolean
  paragraph: boolean
  size: number
  strong: boolean
  underline: boolean
  delete: boolean
  color: string
  mark: boolean
  code: boolean
}

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
}: TextProps) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span'
  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: size,
    textDecoration: underline ? 'underline' : undefined,
    color,
  }

  if (del) {
    children = <del>{children}</del>
  }

  if (code) {
    children = <code>{children}</code>
  }

  if (mark) {
    children = <mark>{children}</mark>
  }

  return <Tag style={{ ...fontStyle }}>{children}</Tag>
}

export default Text
