
export type T = {
    modalState: ModalState|undefined;
    setModalState: React.Dispatch<React.SetStateAction<ModalState|undefined>>
  };
 export type ModalState = {
    open:boolean,
    type:string
  }
  export type LinksType = {
    title: string;
    descr: string;
    color: string;
    icon: any;
    typeModal: string;
}[]
export type Layout = {
  l: string;
  prop: "left" | "top" | "bottom" | "right" | null;
};