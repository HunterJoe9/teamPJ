import plz1 from "./images/plz1.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
// 라우터 작업 해서 페이지도 나눠주고
// 슬라이더 화면 크기 1280px 나가면 사라지기 (함수를 사용해서 줘야할거같은데 if로 줘야하나)
// 페이지 작업 + 꾸며주기
// 컴포넌트 나눠주기

function App() {
  return (
    <div className="bg-[#151f42] min-h-screen shadow-lg">
      <header className="bg-white h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center ">
          <div className="text-xl font-bold ml-3">BCS TEAM PJ</div>
          {/* <div>
            <img className="w-12" src={chain} alt="chain" />
          </div> */}

          <ul className="flex gap-2 md:gap-8 mr-3 text-xs sm:text-sm md:text-base">
            <button className="bg-white btn-style hover:text-purple-500 hover:scale-125 ease-linear duration-300">
              현진
            </button>
            <button className="bg-white btn-style hover:text-purple-500 hover:scale-125 ease-linear duration-300">
              성윤
            </button>
            <button className="bg-white btn-style hover:text-purple-500 hover:scale-125 ease-linear duration-300">
              주연
            </button>
            <button className="bg-white btn-style hover:text-purple-500 hover:scale-125 ease-linear duration-300">
              범진
            </button>
            <button className="bg-white btn-style hover:text-purple-500 hover:scale-125 ease-linear duration-300">
              규혁
            </button>
          </ul>
        </div>
      </header>
      {/* <__________________________________________________> */}

      <img className="object-cover mx-auto" src={plz1} alt="background" />
      <main>
        <div className="flex max-w-screen-xl mx-auto">
          <ul className="bg-white max-w-screen-xl flex flex-row items-center gap-8 py-8 ">
            <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl animate-slider">
              <img
                src={plz1}
                alt="1"
                className=" w-60 h-72 rounded-xl object-cover"
              />
            </li>
            <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl ">
              <img
                src={plz1}
                alt="1"
                className=" w-60 h-72 rounded-xl object-cover"
              />
            </li>

            <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl ">
              <img
                src={plz1}
                alt="1"
                className=" w-60 h-72 rounded-xl object-cover"
              />
            </li>
            <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl ">
              <img
                src={plz1}
                alt="1"
                className=" w-60 h-72 rounded-xl object-cover"
              />
            </li>
            <li className="bg-[#7bc6f8] w-60 h-72 rounded-xl ">
              <img
                src={plz1}
                alt="1"
                className=" w-60 h-72 rounded-xl object-cover"
              />
            </li>
          </ul>

          {/* ul태그 2개~3개 추가하면 되고 이제 화면 사이즈를 조절을해줘야되는디~  */}
        </div>

        {/* --------------------------------------------------------------------------게임이미지 */}
      </main>
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <img
          src={plz1}
          alt="1"
          className="border-2 w-60 h-72 rounded-xl object-cover hover:border-orange-400 hover:scale-125 ease-linear duration-300"
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      {/* __________________________________________________ */}
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <img
          src={plz1}
          alt="1"
          className="border-2 w-60 h-72 rounded-xl object-cover hover:border-orange-400 hover:scale-125 ease-linear duration-300"
        />
      </div>
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <img
          src={plz1}
          alt="1"
          className="border-2 w-60 h-72 rounded-xl object-cover hover:border-orange-400 hover:scale-125 ease-linear duration-300"
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      {/* __________________________________________________ */}
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <img
          src={plz1}
          alt="1"
          className="border-2 w-60 h-72 rounded-xl object-cover hover:border-orange-400 hover:scale-125 ease-linear duration-300"
        />
      </div>
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <img
          src={plz1}
          alt="1"
          className="border-2 w-60 h-72 rounded-xl object-cover hover:border-orange-400 hover:scale-125 ease-linear duration-300"
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="flex justify-center border-t mt-2">
        <div className="mt-2 flex gap-4">
          <button className=" text-white hover:text-[#5865f2] hover:scale-125 ease-linear duration-300">
            <FaDiscord size={40} />
          </button>
          <button className=" text-white hover:text-[#2c96d4] hover:scale-125 ease-linear duration-300">
            <FaTwitter size={40} />
          </button>
          <button className=" text-white hover:text-[#21c998] hover:scale-125 ease-linear duration-300">
            <SiVelog size={40} />
          </button>
        </div>
      </div>
      <footer className="max-w-scrren-xl mx-auto flex justify-center py-1 md:py-2 text-white">
        2023, Designed by, BCS-PURPLE
      </footer>
    </div>
  );
}

export default App;
