import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { ArrowRight } from '@material-ui/icons'
import { AirDBContext } from '../../context/AirDBContext'

export default (props: any) => {
  const { users } = React.useContext(AirDBContext)
  const groupUsers = users.filter((user: any) =>
    props.users.split(', ').includes(JSON.stringify(user.fields.ID))
  )

  return (
    <div
      className={`group-display ${
        props.groupId === props.ID ? 'group-display-selected' : ''
      }`}
      onClick={() => props.setGroupId(props.ID)}
    >
      <div>
        <Typography variant="h6">{props.name}</Typography>
        <AvatarGroup>
          {groupUsers.map((user: any) => (
            <Avatar>{user.fields.username.charAt(0)}</Avatar>
          ))}
        </AvatarGroup>
      </div>
      <div className="arrow-container">
        <ArrowRight fontSize="large" />
      </div>
    </div>
  )
}
