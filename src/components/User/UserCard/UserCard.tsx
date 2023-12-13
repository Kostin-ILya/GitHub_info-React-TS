import { UserStat } from 'components/User/UserStat'

import { LocalGithubUser } from 'interfaces/user.interface'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  )
}
