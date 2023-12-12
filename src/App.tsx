import { Container } from 'components/Container'
import { TheHeader } from 'components/TheHeader'
import { Search } from 'components/Search'

import './App.css'
function App() {
  return (
    <Container>
      <TheHeader />
      <Search isError onSubmit={() => {}} />
    </Container>
  )
}

export default App
