import RecordingsData from "@/components/RecordingsData";



const Recordings = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <div className="grid grid-cols-2 gap-3">
        <RecordingsData/>
      </div>
    </div>
  );
};

export default Recordings;
