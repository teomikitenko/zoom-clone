import {
  ParticipantView,
  StreamVideoParticipant,
} from "@stream-io/video-react-sdk";
import React from "react";

const ParticipantList = (props: { participants: StreamVideoParticipant[] }) => {
  return (
    <div
      style={{
        display: "flex",
        width:'100%',
        height: "800px",
        flexDirection: "row",
        gap: "8px",
      }}
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
