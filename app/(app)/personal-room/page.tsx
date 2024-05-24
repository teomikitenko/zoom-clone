import React from "react";
import PlayCopyButtons from "@/components/PlayCopyButtons";
import { currentUser } from "@clerk/nextjs/server";
import NavigateCopyButtons from "@/components/Modals/NavigateCopyButtons";
const PersonalRoom = async () => {
  const user = await currentUser();
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      <div className="flex gap-3">
        <h2 className="font-semibold text-blue-200 text-xl">Meeting ID:</h2>
        <p className="font-semibold text-slate-100 text-xl">{user?.id}</p>
      </div>
      <div className="flex gap-3">
        <h2 className="font-semibold text-blue-200 text-xl">Invite Link:</h2>
        <p className="font-semibold text-slate-100 text-xl">{`${process.env.NEXT_PUBLIC_MY_DEPLOYING_URL}/${user?.id}`}</p>
      </div>
      <NavigateCopyButtons
        key="personal-room"
        type="personal-room"
        id={user?.id as string}
      />
    </div>
  );
};

export default PersonalRoom;
