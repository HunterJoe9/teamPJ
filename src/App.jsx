import plz1 from "./images/plz1.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
// 라우터 작업 해서 페이지도 나눠주고
// 슬라이더 화면 크기 1280px 제한
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
            <li className="bg-white text-decoration-color:#fff btn-style">
              현진
            </li>
            <li className="bg-white btn-style">성윤</li>
            <li className="bg-white btn-style">주연</li>
            <li className="bg-white btn-style">범진</li>
            <li className="bg-white btn-style">규혁</li>
          </ul>
        </div>
      </header>
      {/* <__________________________________________________> */}

      <main>
        <img className="object-cover mx-auto" src={plz1} alt="background" />
        <div className="flex  animate-slider">
          <ul className="bg-white max-w-screen-xl mx-auto flex flex-row justify-items-center gap-8 py-8 ">
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
          className=" w-60 h-72 rounded-xl object-cover scale-100 hover:scale-150"
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
          className=" w-60 h-72 rounded-xl object-cover scale-100 hover:scale-150"
        />
      </div>
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <img
          src={plz1}
          alt="1"
          className=" w-60 h-72 rounded-xl object-cover scale-100 hover:scale-150"
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
          className=" w-60 h-72 rounded-xl object-cover scale-100 hover:scale-150"
        />
      </div>
      <div className="text-white flex  max-w-screen-xl mx-auto pt-16">
        <img
          src={plz1}
          alt="1"
          className=" w-60 h-72 rounded-xl object-cover scale-100 hover:scale-150"
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
          <FaDiscord size={40} color="white " />
          <FaTwitter size={40} color="white" />
          <SiVelog size={40} color="white" />
        </div>
      </div>
      <footer className="max-w-scrren-xl mx-auto flex justify-center py-1 md:py-2 text-white">
        2023, Designed by, BCS-PURPLE
      </footer>
    </div>
  );
}

export default App;
