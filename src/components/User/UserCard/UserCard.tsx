import { UserStat } from 'components/User/UserStat'
import { UserTitle } from 'components/User/UserTitle'
import { UserInfo } from '../UserInfo'

import { LocalGithubUser } from 'interfaces/user.interface'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = ({
  avatar,
  bio,
  blog,
  company,
  created,
  followers,
  following,
  location,
  login,
  name,
  repos,
  twitter,
}: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={avatar} alt={login} className={styles.avatar} />

      <UserTitle created={created} login={login} name={name} />

      <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
        {bio || 'This profile has no bio'}
      </p>

      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter={twitter}
      />
    </div>
  )
}
