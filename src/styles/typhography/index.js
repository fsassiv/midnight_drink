import styled from 'styled-components'

export const Typhography = ({ tag, children, ...props }) => {
  const Elem = styled(tag || 'p')`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => props.size || 1.6}rem;
  `

  return <Elem {...props}>{children}</Elem>
}
