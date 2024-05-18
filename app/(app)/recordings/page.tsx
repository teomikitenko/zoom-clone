import RecordingsData from "@/components/RecordingsData";

const Recordings = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <RecordingsData />
    </div>
  );
};

export default Recordings;
