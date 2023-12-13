import { Container } from 'components/Container'
import { TheHeader } from 'components/TheHeader'
import { Search } from 'components/Search'
import { UserCard } from 'components/User/UserCard'

import { defaultUser } from 'mock'

import './App.css'
function App() {
  return (
    <Container>
      <TheHeader />
      <Search isError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  )
}

export default App
