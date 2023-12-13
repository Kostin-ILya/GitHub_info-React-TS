import { UserStatItem } from 'components/User/UserStatItem'

import { LocalGithubUser } from 'interfaces/user.interface'
import styles from './UserStat.module.scss'

export interface UserStatProps
  extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <UserStatItem title="Repos" quantity={repos} />
    <UserStatItem title="Following" quantity={following} />
    <UserStatItem title="Followers" quantity={followers} />
  </div>
)
