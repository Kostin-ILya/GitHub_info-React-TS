import SearchIcon from 'assets/icon-search.svg?react'
import { Button } from 'components/Button'

import styles from './Search.module.scss'

interface SearchProps {
  isError: boolean
  onSubmit: (text: string) => void
}

export const Search = ({ isError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement & { username: HTMLInputElement }>
  ) => {
    e.preventDefault()
    const text = e.currentTarget.username.value

    if (text.trim()) {
      onSubmit(text)
      e.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label className={styles.label} htmlFor="userName">
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          type="text"
          name="username"
          id="username"
          placeholder="Search GitHub username"
        />
        {isError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
