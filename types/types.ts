export type T = {
  modalState: ModalState | undefined;
  setModalState: React.Dispatch<React.SetStateAction<ModalState | undefined>>;
};
export type ModalState = {
  open: boolean;
  type: string;
};
export type LinksType = LinkData[];

export type LinkData = {
  title: string;
  descr: string;
  color: string;
  icon: any;
  typeModal: string;
};
export type LeftBarLink = {
    title: string;
    img: any;
    link: string;
}

export type Layout = {
  l: string;
  prop: "left" | "top" | "bottom" | "right" | null;
};
export type UserObject = {
  userClerkId: string;
  name: string;
};
export type Meeting = {
  user: {
    id: string;
    userClerkId: string;
    name: string | null;
  };
} & {
  id: string;
  creatorId: string;
  meetingDate: Date;
  meetingDescription: string;
  meetingId: string;
};
