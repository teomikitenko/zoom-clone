import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamTheme,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import LocalParticipant from "./LocalParticipant";
import ParticipantList from "./ParticipantList";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const MyUiLayout = () => {
  const {
    useCallCallingState,
    useLocalParticipant,
    useRemoteParticipants,
  } = useCallStateHooks();

  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
  return (
    <StreamTheme>
      {callingState === "joined" && (
        <>
          <LocalParticipant participant={localParticipant} />
          <ParticipantList participants={remoteParticipants} /> 
          <CallControls />
        </>
      )}
    </StreamTheme>
  );
};

export default MyUiLayout;

