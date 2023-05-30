import styled from 'styled-components'

export const GithubSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
  margin-bottom: 84px;
  img {
    height: 157px;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: block;
    img {
      margin-bottom: 10px;
    }
  }
`
