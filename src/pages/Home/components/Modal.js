import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

// components
const ModalButton = tw.button`bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`;
const ModalContainer = tw.div`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black  bg-opacity-75`;
const ModalDiv = tw.div`relative w-auto my-6 mx-auto max-w-3xl`;
const ModalContent = tw.div`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`;
const ModalHeader = tw.div`flex items-start justify-between p-5 border-b border-solid border-blue-200 rounded-t`;
const ModalHeaderButton = tw.div`p-1 ml-auto bg-white border-0 text-primary-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none`;
const CloseSpan = tw.span`bg-transparent text-primary-500 h-6 w-6 text-2xl block outline-none focus:outline-none`;
const ModalBody = tw.div`relative p-6 flex-auto`;
const BodyText = tw.p`my-4 text-gray-500 text-lg leading-relaxed`;
const ButtonDiv = tw.div`mx-auto grid grid-cols-3 gap-2 place-items-center h-48`;

const ModalFooter = tw.div`flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b`;
const EmployeeButton = tw.button`bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`;

export default function Modal({ showModal, setShowModal, chooseStatus }) {
  return (
    <>
      {showModal ? (
        <>
          <ModalContainer>
            <ModalDiv>
              {/*content*/}
              <ModalContent>
                {/*header*/}
                <ModalHeader>
                  <ModalHeaderButton onClick={() => setShowModal(false)}>
                    <CloseSpan>×</CloseSpan>
                  </ModalHeaderButton>
                </ModalHeader>
                {/*body*/}
                <ModalBody>
                  <BodyText></BodyText>
                  <ButtonDiv>
                    <ModalButton
                      type="button"
                      onClick={() => chooseStatus(false)}
                    >
                      Employer
                    </ModalButton>

                    <BodyText>OR</BodyText>
                    <EmployeeButton onClick={() => chooseStatus(true)}>
                      {" "}
                      Employee
                    </EmployeeButton>
                  </ButtonDiv>
                </ModalBody>
                {/*footer*/}
                <ModalFooter></ModalFooter>
              </ModalContent>
            </ModalDiv>
          </ModalContainer>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
