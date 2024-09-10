


export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-slate-900">
      <div className="bg-black lg:w-2/6  w-5/6 flex flex-col">
        <h1>Encontrar Desenvolvedor</h1>
        <div><input type="text" className="w-full"/></div>
        <section className="bg-gray-600 flex flex-row">
            <div className="bg-blue-800 h-fit p-4">
              <div className="size-16 bg-white rounded-full"></div>
            </div>
            <div className="bg-red-800 w-full">
              SAs
            </div>
          </section>
      </div>
    </main>  
    );
}
