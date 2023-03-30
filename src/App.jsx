import chain from "./images/chain.png";
function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center">
          {/* <div>Hunter_joe's Portfolio</div> */}
          <div>
            <img className="w-12" src={chain} alt="chain" />
          </div>

          <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
            <li className="bg-orange-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-[400px] flex justify-center items-center">
          나를 소개하는 내용....
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>

          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
        </ul>
        <div className="bg-gray-300 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          연락처
        </div>
      </main>
      <footer className="max-w-scrren-xl mx-auto flex justify-center py-1 md:py-2">
        2023, Designed by, Hunter_Joe
      </footer>
    </div>
  );
}

export default App;
