// import chain from "./images/chain.png";
function App() {
  return (
    <div className="bg-[#38914c] min-h-screen">
      <header className="bg-[#fe8605] h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center">
          <div className="text-xl font-bold ml-3">Hunter_joe's Portfolio</div>
          {/* <div>
            <img className="w-12" src={chain} alt="chain" />
          </div> */}

          <ul className="flex gap-2 md:gap-8 mr-3 text-xs sm:text-sm md:text-base">
            <li className="bg-white text-decoration-color:#fff btn-style">
              Introduce
            </li>
            <li className="bg-white btn-style">Portfolio</li>
            <li className="bg-white btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-[#feab04] max-w-screen-xl mx-auto h-[400px] flex justify-center items-center">
          나를 소개하는 내용....
        </div>
        <ul className="bg-[#1d86cc] max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div className="bg-white w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>

          <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div
              className="bg-white
 w-full h-1/2 rounded-t-xl"
            >
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl">
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div
              className="bg-white
 w-full h-1/2 rounded-t-xl"
            >
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li
            className="bg-[#7bc6f8]
 w-60 h-72 rounded-xl"
          >
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div
              className="bg-white
 w-full h-1/2 rounded-t-xl"
            >
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li
            className="bg-[#7bc6f8]
 w-60 h-72 rounded-xl"
          >
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div
              className="bg-white
 w-full h-1/2 rounded-t-xl"
            >
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
          <li
            className="bg-[#7bc6f8]
 w-60 h-72 rounded-xl"
          >
            {/*object-fit:cover 이미지 넣을때 적용해여ㅑ댐*/}
            <div
              className="bg-white
 w-full h-1/2 rounded-t-xl"
            >
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 설명</div>
          </li>
        </ul>
        <div className="bg-[#48ba61] max-w-screen-xl mx-auto h-20 flex justify-center items-center">
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
