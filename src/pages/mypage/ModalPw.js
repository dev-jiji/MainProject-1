import React from "react";
import { useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";


const Change=tw.div`
flex
justify-start
m-3
p-2
border-2
h-12
text-lg
cursor-pointer
rounded-lg
bg-main
text-white
`


const Bt = tw.div`
  flex
  justify-start
  m-3
  p-2
  border-2
  border-gray-300
  h-12
  font-medium
  text-xl
  cursor-pointer
  rounded-lg
`;


const ModalPw = ({ title, name }) => {
  const [showModal, setShowModal] = React.useState(false);

  const [nickName, setNickName] = useState("");
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  return (
    <>
      <Change onClick={() => setShowModal(true)} className="mb-10 w-32 justify-center">{name}수정</Change>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold mb-10">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  <span className="bg-transparent 
                     h-6 w-6 text-2xl block 
                      z-10 ml-2">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}

                <Bt>
                  <input
                   className="placeholder:text-base pl-2 mb-1"
                    type="password"
                    required
                    value={pw}
                    maxLength={16}
                    minLength={8}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="기존 비밀번호"
                  />
                </Bt>


                <Bt>
                  <input
                   className="placeholder:text-base pl-2 mb-1"
                    type="password"
                    required
                    value={newPw}
                    maxLength={16}
                    minLength={8}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="변경할 비밀번호"
                  />
                </Bt>

                
                <Bt>
                  <input
                   className="placeholder:text-base pl-2 mb-1"
                    type="password"
                    required
                    value={pwCheck}
                    maxLength={16}
                    minLength={8}
                    onChange={(e) => setPwCheck(e.target.value)}
                    placeholder="비밀번호 재입력"
                  />
                </Bt>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    취소
                  </button>
                  <button
                    className="bg-main text-white active:bg-main font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    변경
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalPw;
