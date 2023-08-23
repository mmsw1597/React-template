import { CSSProperties } from '@emotion/serialize'
import * as React from 'react'

interface SpacerProps {
  children: React.ReactNode
  type: 'horizontal' | 'vertical'
  size: number
}

const Spacer = ({ children, type = 'horizontal', size = 8 }: SpacerProps) => {
  const spacerStyle = {
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  }

  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      if (typeof element === 'object' && 'props' in element) {
        const originalProps = element.props as React.HTMLProps<
          typeof element.type
        >
        const style: CSSProperties = {
          ...originalProps.style,
          marginRight:
            type === 'horizontal' && index !== elements.length - 1
              ? size
              : undefined,
          marginBottom:
            type === 'vertical' && index !== elements.length - 1
              ? size
              : undefined,
        }

        return React.cloneElement(element, { ...originalProps, style })
      }
      return null
    })

  return <div style={{ ...spacerStyle }}>{nodes}</div>
}

export default Spacer
