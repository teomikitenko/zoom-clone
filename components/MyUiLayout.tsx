import {
  CallingState,
  StreamTheme,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import LocalParticipant from "./LocalParticipant";
import ParticipantList from "./ParticipantList";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const MyUiLayout = () => {
  const call = useCall();
  const {
    useCallCallingState,
    useLocalParticipant,
    useRemoteParticipants,
    useParticipants,
    // ... other hooks
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
        </>
      )}
    </StreamTheme>
  );
};

export default MyUiLayout;
