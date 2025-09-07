import React, { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarRange,
  History,
  LayoutDashboard,
  BanknoteArrowDown,
  UserRound,
  User,
  Bot,
  BookOpenText,
} from "lucide-react";
import ProfileButtons from "../components/ProfileButtons";
import { useNavigate } from "react-router";
import { Slide } from "react-slideshow-image";

function Profile() {
  const navigate = useNavigate();
  const slideStart = [
    {
      id: 1,
      image: "../src/assets/leo-2.png",
      title: "Pronto para monitorar suas despesas como ninguém?",
      desc: "Pronto para monitorar suas despesas como ninguém?",
      btnTitle: "Acesse o tutorial",
    },
    {
      id: 2,
      image: "../src/assets/leo-3.png",
      title: "Conheça o Leo!",
      desc: "O seu assistente treinado para te auxiliar nas despesas!",
      btnTitle: "Conheça o Leo",
    },
  ];

  return (
    <div>
      <main className="flex bg-gray-700 w-screen h-screen">
        <aside className="flex justify-between w-1/6 min-h-screen bg-gray-900 border-r-4 border-amber-700">
          <nav className="p-5 space-y-10">
            <button
              onClick={() => navigate(-1)}
              className="flex gap-2 p-2 w-fit text-gray-400 hover:text-amber-700 transition-colors duration-300 cursor-pointer"
            >
              <ArrowLeftIcon />
              Retornar a Home
            </button>
            <ul className="flex flex-col text-2xl gap-5">
              <li>
                <ProfileButtons>
                  <LayoutDashboard size="26" />
                  Dashboard
                </ProfileButtons>
              </li>
              <li>
                <ProfileButtons>
                  <BanknoteArrowDown />
                  Despesas
                </ProfileButtons>
              </li>
              <li>
                <ProfileButtons>
                  <CalendarRange />
                  Calendário
                </ProfileButtons>
              </li>
              <li>
                <ProfileButtons>
                  <History />
                  Histórico
                </ProfileButtons>
              </li>
            </ul>
            <ProfileButtons>
              <UserRound />
              Olá Usuário!
            </ProfileButtons>
          </nav>
        </aside>
        <section className="flex gap-10 w-full justify-center items-center text-center text-white">
          <Slide>
            {slideStart.map((start, slide) => {
              return (
                <div className={`space-y-3`} key={slide}>
                  <h1 className="text-4xl font-bold">{start.title}</h1>
                  <h3 className="text-2xl font-bold">{start.desc}</h3>
                  <img
                    src={`../src/assets/LeoSkins/${start.image}`}
                    alt="Leo 3"
                    className={`w-xs m-auto ${
                      start.id == 1 ? "bg-amber-600" : "bg-blue-400"
                    } hover:${
                      start.id == 1 ? "bg-amber-700" : "bg-blue-500"
                    } cursor-pointer transition-colors duration-300`}
                  />
                  {start.btnTitle}
                </div>
              );
            })}
          </Slide>
          <div className="flex justify-center gap-5 mt-5">
            <button className="rounded-full p-1 shadow shadow-black/30 hover:bg-slate-800 transition-colors duration-300 cursor-pointer">
              <ArrowLeftIcon />
            </button>
            <button className="rounded-full p-1 shadow shadow-black/30 hover:bg-slate-800 transition-colors duration-300 cursor-pointer">
              <ArrowRightIcon />
            </button>
          </div>
          ;
          {/* <div className="space-y-3 bg-gray-500/20 p-10 rounded-2xl">
            <h1 className="text-4xl font-bold">Iae Usuário!</h1>
            <h3 className="text-2xl font-bold">
              Pronto para monitorar suas despesas como ninguém?
            </h3>
            <div className="">
              <img
                src="../src/assets/LeoSkins/leo-2.png"
                alt="Leo 3"
                className="w-xs m-auto"
              />
              <button className="flex gap-2 m-auto bg-amber-600 p-3 rounded-xl font-bold hover:bg-amber-700 transition-colors duration-300 cursor-pointer">
                <BookOpenText />
                Acesse o Tutorial
              </button>
            </div>

            
            
          </div>

          <div className="space-y-3 hidden">
            <h1 className="text-4xl font-bold">Conheça o Leo!</h1>
            <h3 className="text-2xl font-bold">
              O seu assistente treinado para te auxiliar nas despesas!
            </h3>
            <img
              src="../src/assets/LeoSkins/leo-3.png"
              alt="Leo 3"
              className="w-xs m-auto"
            />
            <button className="flex gap-2 m-auto bg-blue-400 p-3 rounded-xl font-bold hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
              <Bot />
              Converse com o Leo
            </button>
          </div> */}
        </section>
      </main>
    </div>
  );
}

function Span(props) {
  return <span className="font-bold bg-orange-500/30">{props.children}</span>;
}

export default Profile;
