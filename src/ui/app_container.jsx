import styled from "styled-components";
export const DivContainer = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: white;
  border: 1px solid #e5e7eb;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2px;

    border-radius: 0px;
  }
`;

export const DivShadow = styled.div`
  -webkit-box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 1);
  -moz-box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 0);
  box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 1);
  margin-bottom:  10px;

  @media (max-width: 768px) {
     height: 50vh; 

`;

///Glass Effect
// export const DivContainer = styled.div`
//   display: flex;
//   margin-top: 2px;
//   flex-direction: column;
//   align-items: center;
//   background: rgba(191, 165, 166, 0.1);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(30.5px);
//   -webkit-backdrop-filter: blur(30.5px);
//   border-radius: 6px;
//   width: 80%;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//
//   @media (max-width: 768px) {
//     width: 100%;
//     border-radius: 0px;
//   }
// `;
//
// export const DivShadow = styled.div`
//   -webkit-box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 1);
//   -moz-box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 0);
//   box-shadow: 0px 3px 5px -1px rgba(92, 209, 176, 1);
//   margin-bottom:  10px;
//
//   @media (max-width: 768px) {
//      height: 50vh;
//
// `;
