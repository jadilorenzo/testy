import React from 'react'
import TextBubble from './TextBubble'
import TextInput from './TextInput'
import GroupDisplay from './GroupDisplay'
import Paper from '../Paper'
import { AirDBContext } from '../../context/AirDBContext'
import { AddRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

export default () => {
  const { groups, messages } = React.useContext(AirDBContext)
  const [groupId, setGroupId] = React.useState<number>(1)

  return (
    <div>
      <Paper>
        <div className="chat-container">
          <div className="chat-group-section">
            <div style={{ height: 'min-content' }}>
              {groups.map((group: any) => (
                <GroupDisplay
                  {...group.fields}
                  ID={group.fields.ID}
                  groupId={groupId}
                  setGroupId={setGroupId}
                />
              ))}
              <div className="add-group-container">
                <IconButton disabled>
                  <AddRounded />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="chat-section">
            {messages
              .filter(
                (message: any) =>
                  message.fields.groupid === JSON.stringify(groupId)
              )
              .map((message: any, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>
                  <TextBubble
                    text={message.fields.text}
                    userid={message.fields.userid}
                  />
                </div>
              ))}
            <TextInput groupId={groupId} />
          </div>
        </div>
      </Paper>
    </div>
  )
}
