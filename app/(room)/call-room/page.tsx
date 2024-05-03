import React from "react";
import crypto from 'crypto'
import VideoCalls from "@/components/VideoCalls";

const CallRoom = () => {
    const idCall = crypto.randomUUID()
  return <VideoCalls />;
};

export default CallRoom;
