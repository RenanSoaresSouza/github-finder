import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiCityFill } from "react-icons/pi";
import {useState,useEffect} from 'react';
import { IoIosSearch } from "react-icons/io";
import { handleClientScriptLoad } from "next/script";


export default function Home() {
  const [search,setSearch] = useState(null);
  const [user,setUser] = useState(null);
  const [btn,setbtn] = useState(true);

    useEffect(()=>{
      if (search !== null) {
        fetch(`https://api.github.com/users/${search}`,{method:'GET'})
        .then((resp) => resp.json())
        .then((json) => setUser(json))
        
      }

    },[btn])

  return (
    <main className="h-fit  w-screen flex justify-center items-center bg-slate-900">
      <div className=" lg:w-4/6  w-5/6 flex flex-col">
        <h1 className="my-4 text-white text-2xl font-bold">Encontrar Desenvolvedor</h1>
        <div className="my-6 rounded-xl w-full  bg-slate-700 flex items-center "><IoIosSearch className="text-blue-600 size-9 mx-3"/><input onChange={(e)=>setSearch(e.target.value)} placeholder="Busque algum usuário do github..." type="text" className="w-full h-12 outline-none bg-slate-700 text-white"/><button onClick={ () => setbtn(!btn)} className="h-full p-3 m-1 rounded-lg bg-blue-500 text-white font-bold ">Pesquisar</button></div>
        <section className="bg-slate-700 rounded-xl mb-5">
           {user == null ?(<div className="h-80 flex flex-col justify-center items-center"><span className="text-3xl text-white font-bold">Digite um Usuário</span><span className="text-slate-500">Que As informações aparecerão aqui</span></div>):(user.status == '404' ?(<div className="h-80 flex flex-col justify-center items-center"><span className="text-3xl text-white font-bold">ERRO 404</span><span className="text-slate-300"> usuário não encontrado</span></div>):(<><header className="flex flex-row justify-end h-fit"> 
            <div className="h-fit p-2">
              <div className="size-32 bg-slate-500 rounded-full"><img className="rounded-full" src={user.avatar_url !== null ?(user.avatar_url):('#')}/></div>
            </div>
            <section className="flex flex-col w-full h-full">
            <div className="flex lg:flex-row flex-col justify-between h-full">
              <div className=" p-3"><h1 className="mt-4 mb-1 text-white w-full font-bold text-3xl">{user.name !== null ?(user.name):('Sem Nome')}</h1><h6><a className="text-blue-600 " href={user.html_url !== null ?(user.html_url):('#')}>@{user.login !== null ?(user.login):('Err')}</a></h6></div>
              <div className=" w- lg:text-end text-start pl-3 flex items-center lg:justify-end lg:p-10 text-white ">{user.created_at !== null ?(`Criado em: ${user.created_at.substring(0,10)}`):('')}</div>
            </div>
            <span className="lg:inline hidden ml-3 text-white">{user.bio !== null ?(user.bio):('Sem bio')}</span>
            
            </section>
            </header>
            <div className=" flex  justify-center lg:justify-end">
              <div className="  w-full lg:w-5/6 p-4">
                <span className="inline lg:hidden text-white">{user.bio !== null ?(user.bio):('Sem bio')}</span>
                <div className=" bg-slate-900 my-4 w-full p-4 rounded-lg flex justify-around">
                  <div className="flex flex-col">
                  <span className="text-sm text-slate-200">Repos</span><span className="text-2xl text-white font-bold">{user.public_repos !== null ?(user.public_repos):('0')}</span>
                  </div>
                  <div className="flex flex-col">
                  <span className="text-sm text-slate-200">Seguidores</span><span className="text-2xl text-white font-bold">{user.followers !== null ?(user.followers):('0')}</span>
                  </div>
                  <div className="flex flex-col">
                  <span className="text-sm text-slate-200">Seguindo</span><span className="text-2xl text-white font-bold">{user.following !== null ?(user.following):('0')}</span>
                  </div>
                </div>
                <nav className="flex lg:flex-row flex-wrap flex-1  justify-between">
                  <div className="flex items-center "><FaMapMarkerAlt className="size-5 text-white"/><span className="p-3 text-white text-nowrap">{user.location !== null ?(user.location):(<p className="text-slate-400">Não Disponível</p>)}</span></div>
                  <div className="flex items-center "><FaLink className="size-5 text-white"/><span className="p-3 text-white text-nowrap"><a href={user.blog !== '' ?(user.blog):('#')} >{user.blog !== '' ?(<p className="underline underline-offset-1 ">{user.blog}</p>):(<p className="text-slate-400">Não Disponível</p>)}</a></span></div>
                  <div className="flex items-center "><FaTwitter className="size-5 text-white"/><span className="p-3 text-white text-nowrap">{user.twitter_username !== null ?(user.twitter_username):(<p className="text-slate-400">Não Disponível</p>)}</span></div>
                  <div className="flex items-center "><PiCityFill className="size-5 text-white"/><span className="p-3  text-white text-nowrap">{user.company !== null ?(user.company):(<p className="text-slate-400">Não Disponível</p>)}</span></div>
                </nav>
                </div>
            </div></>))}
          </section>
      </div>
    </main>  
    );
}
