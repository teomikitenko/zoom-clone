import React, { Dispatch, SetStateAction } from 'react'
import type { ModalState } from '@/types/types';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';

const JoinMeetings = ({
    modalState,
    setModalState,
  }: {
    modalState: ModalState;
    setModalState: Dispatch<SetStateAction<ModalState | undefined>>;
  }) => {
  return (
    <Dialog open={modalState.open} onOpenChange={(open)=>setModalState({open,type:''})}>
      <DialogOverlay>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-center'>Type the link here</DialogTitle>
          </DialogHeader>
          <form action="" className="flex flex-col gap-4">
          <Input  />
          <button className="w-full bg-buttons hover:bg-input hover:rounded-sm px-4 py-2">
            <p>Join Meeting</p>
          </button>
          </form>
       
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default JoinMeetings