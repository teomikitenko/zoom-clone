import {
  CallControls,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  StreamTheme,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const MyUiLayout = () => {
  const {
    useCallCallingState,
  } = useCallStateHooks();

  const callingState = useCallCallingState();
  return (
    <StreamTheme>
      {callingState === "joined" && (
        <>
          <PaginatedGridLayout />
          <CallControls />
        </>
      )}
    </StreamTheme>
  );
};

export default MyUiLayout;

