import React from 'react'
import { Avatar, Badge } from '@material-ui/core'
import { AirDBContext } from '../../context/AirDBContext'

export default (props: any) => {
  const { users } = React.useContext(AirDBContext)

  const { username, active } = (
    users.filter(
      (user: { fields: { ID: number } }) =>
        user.fields.ID === JSON.parse(props.userid)
    )[0] || { fields: { username: 'xxx' } }
  ).fields

  return (
    <div className="text-bubble">
      <div className="text-text">{props.text}</div>
      <div className="text-username-group">
        <div className="text-username">{username}</div>
        <Badge
          color="secondary"
          variant="dot"
          invisible={!active}
          badgeContent=" "
        >
          <Avatar variant="rounded">{username.charAt(0)}</Avatar>
        </Badge>
      </div>
    </div>
  )
}
