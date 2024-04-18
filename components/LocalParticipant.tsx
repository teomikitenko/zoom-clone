import {
  ParticipantView,
  StreamVideoParticipant,
} from "@stream-io/video-react-sdk";
import React from "react";

const LocalParticipant = (props: { participant?: StreamVideoParticipant }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        width: "240px",
        height: "135px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
        zIndex:'100'
      }}
    >
      <ParticipantView participant={props.participant!} />
    </div>
  );
};

export default LocalParticipant;
