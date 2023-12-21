import { useState } from 'react'

import { Container } from 'components/Container'
import { TheHeader } from 'components/TheHeader'
import { Search } from 'components/Search'
import { UserCard } from 'components/User/UserCard'

import { extractLocalUser } from 'utils/exract-local-user'
import { defaultUser } from 'mock'
import {
  GithubUser,
  LocalGithubUser,
  GithubError,
} from 'interfaces/user.interface'
import './App.css'
function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data: GithubUser | GithubError = await res.json()

    if ('login' in data) {
      setUser(extractLocalUser(data))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <TheHeader />
      <Search isError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
