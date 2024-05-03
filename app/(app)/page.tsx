"use client";
import Image from "next/image";
import Hero from "@/public/images/hero-background.png";
import AddMeeting from "@/public/icons/add-meeting.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import Schedule from "@/public/icons/schedule.svg";
import Recordings from "@/public/icons/recordings.svg";
import { useContext } from "react";
import { ModalContext } from "@/components/Provider";
import { LinksType } from "@/types/types";
import type { T } from "@/types/types";
import dynamic from 'next/dynamic'

const DynamicDate = dynamic(() => import('../../components/CurrentDate'), { ssr: false })

//this page need be server component,fix this
export default function Home() {
  const createLink:LinksType = [
    {
      title: "New Meeting",
      descr: "Setup a new recording",
      color: "bg-[#FF742E]",
      icon: AddMeeting,
      typeModal:'Start Meeting'
    },
    {
      title: "Join Meeting",
      descr: "via invitation link",
      color: "bg-[#0E78F9]",
      icon: JoinMeeting,
      typeModal:'Join Meeting for link'
    },
    {
      title: "Schedule Meeting",
      descr: "Plan your meeting",
      color: "bg-[#830EF9]",
      icon: Schedule,
      typeModal:'Create Meeting'
    },
    {
      title: "View Recordings",
      descr: "Meeting recordings",
      color: "bg-[#F9A90E]",
      icon: Recordings,
      typeModal:'Recordings'
    },
  ];
  const{modalState,setModalState}=useContext(ModalContext as React.Context<T>)
  const setModal = (type:string)=>{
   setModalState({
    open:true,
    type
   })
  }
  return (
    <>
       <div className="flex flex-col w-full h-full relative">
        <div className="flex flex-col gap-7">
          <div className="relative h-[19rem] w-full rounded-md ">
            <Image
              src={Hero}
              quality={100}
              priority
              width={1500}
              height={1500}
              className="absolute top-0 left-0 object-cover"
              alt="hero"
            />
            <DynamicDate/>
          </div>
          <div className="grid gap-3 grid-cols-4 h-[16rem]">
            {createLink.map((l) => (
              <div
                key={l.title}
                className={`${l.color} rounded-md flex flex-col justify-between p-5`}
              >
                <div className="w-full relative">
                  <div className="w-16 rounded-lg h-16 opacity-35 bg-white"></div>
                  <Image
                    onClick={()=>setModal(l.typeModal)}
                    className="absolute top-3 left-3 cursor-pointer"
                    src={l.icon}
                    width={38}
                    height={38}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium">{l.title}</p>
                  <p className="text-sm">{l.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-lg">Today’s Upcoming Meetings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa omnis
          eveniet tempore non quo facilis esse quae saepe natus nobis ullam
          necessitatibus harum placeat repudiandae, illo ab animi dolore quod!
          Iure sapiente perspiciatis, obcaecati quibusdam deserunt, quia soluta
          enim nemo consequuntur esse distinctio maiores sunt possimus quam modi
          ipsum qui natus. Laborum, consequatur hic sunt quaerat velit
          architecto quae exercitationem. Eius aspernatur ut non. Nulla sequi,
          deserunt quasi, qui fugiat, quibusdam delectus recusandae
          necessitatibus eaque id iusto laudantium rem unde commodi veritatis
          sit eum quos beatae similique. Vitae, doloremque quam? Nemo aperiam
          atque officiis tenetur ducimus consequatur eum doloribus fugiat
          consequuntur, debitis repellat non doloremque aut, officia ipsa
          tempore est dignissimos. Necessitatibus inventore asperiores
          quibusdam, eveniet iusto autem distinctio impedit. Voluptatum suscipit
          eligendi labore repellat, porro perferendis ipsa voluptatem ea maxime
          dolorum at quasi nam nisi autem magnam, adipisci veniam. Officiis
          explicabo natus, est perspiciatis ipsam nulla error incidunt quis. A
          ducimus soluta asperiores maiores consectetur quidem cupiditate minus
          magnam ipsam optio officia, quisquam eius aliquid mollitia nihil iure
          aliquam! Natus, in? Consequatur cumque quidem magnam commodi quisquam
          quam cum. Quidem qui eaque, quaerat cupiditate suscipit optio commodi
          beatae esse odio nulla est, omnis doloribus perspiciatis culpa illo?
          Totam, corrupti error? Amet est porro pariatur, error aperiam nemo
          iste quis? Tempore quos, tenetur atque beatae eveniet illum velit
          numquam? Excepturi ea ducimus esse. Distinctio iusto nisi enim placeat
          ullam quidem consequatur odio accusamus sed beatae. Tenetur nisi
          suscipit corrupti ipsa. Non, iste dolorem? Nihil velit voluptas id!
          Accusamus numquam laborum facilis adipisci quo tempore optio
          doloremque itaque nisi minus ad impedit quisquam, rem ea quaerat
          consequatur commodi fugit non iure! Odit, nostrum inventore cum
          distinctio fugiat perspiciatis dolores sunt tempora ea perferendis,
          consequatur voluptates laboriosam? Excepturi esse assumenda quaerat,
          rerum unde labore fuga adipisci, numquam distinctio ad debitis
          inventore vel? Eos hic repellat perspiciatis expedita deleniti magni
          incidunt autem obcaecati, id, dolorum illum consectetur voluptates
          facilis eius a explicabo neque omnis nobis repellendus optio ratione
          libero reprehenderit? Autem, minima rem! Placeat maiores, nihil rerum
          suscipit eveniet expedita quam excepturi dolores iste voluptates
          quaerat soluta dolorem commodi dolorum mollitia minima facere? Dolorem
          veritatis tempora odit dolorum nobis? Soluta magni voluptatem magnam!
          Est tempore ut aut nisi? Necessitatibus repellat autem repudiandae
          error, neque sit tenetur consequuntur! Nobis beatae soluta, recusandae
          delectus esse alias perferendis labore. Dicta, consequatur.
          Reprehenderit quos facilis totam vitae! Officiis et accusamus
          molestias, hic praesentium esse vero sit modi quo minus, odit minima
          magnam explicabo incidunt! Voluptatum quod reiciendis, aliquam quam
          sapiente voluptatem iure ipsum hic veritatis, tenetur sit. Dolor
          laboriosam, quas id nisi labore atque quibusdam beatae corporis
          repellat earum quidem optio iste qui aspernatur cupiditate quam
          ducimus accusantium odit veniam modi ipsum vero dicta doloribus illo.
          Pariatur. Dolore consequuntur culpa qui earum explicabo? Sint tempore
          ratione a doloremque numquam. Voluptas officia quis, harum cumque
          dicta quam veniam exercitationem eos, tenetur id, ea nulla dolorem
          ipsam consequatur nisi! Nesciunt repudiandae harum deleniti voluptate
          facilis praesentium ducimus vitae eaque ea dolor nam architecto
          tenetur porro aspernatur explicabo cupiditate corporis, saepe dicta.
          Repudiandae fugiat distinctio quae recusandae sapiente. Placeat,
          perspiciatis? Vero esse eligendi dignissimos, inventore fugiat aut
          totam maxime doloribus obcaecati facilis pariatur eius voluptates
          error, est, soluta itaque. Eum debitis iusto maxime doloremque ratione
          minima architecto aliquid deserunt eveniet! Quam ipsam voluptates non
          quae. Deserunt neque pariatur repellendus iusto eaque sunt
          reprehenderit voluptates blanditiis itaque eos natus, odit a corporis
          aut in ab. Incidunt sit ab esse quidem quae. Neque dicta aut qui velit
          accusamus ducimus placeat dolorum distinctio, est expedita amet iure
          nisi eveniet. Mollitia debitis sit, possimus, totam laudantium
          corporis sed molestiae nostrum alias cum, repudiandae voluptatem?
        </p>
      </div> 
    </>
  );
}
