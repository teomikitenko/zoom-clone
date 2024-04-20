import {
  ParticipantView,
  StreamVideoParticipant,
} from "@stream-io/video-react-sdk";
import React from "react";

const ParticipantList = (props: { participants: StreamVideoParticipant[] }) => {
  console.log(props.participants)
  return (
    <div
    style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
    >
      {props.participants.map((participant) => (
        <ParticipantView
          participant={participant}
          key={participant.sessionId}
        />
      ))}
    </div>
  );
};

export default ParticipantList;
