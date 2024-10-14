import styled from "styled-components";
export const Pfimg = styled.img`
  transition: filter 2s ease;
  filter: blur(0px);
  border-radius: 5px;
  &:hover {
    filter: blur(3px);
  }
`;
export const Icon = styled.img`
  height: 65px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow:
      rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    backdrop-filter: blur(18.2px);
    -webkit-backdrop-filter: blur(18.2px);
  }
  @media (max-width: 768px) {
    height: 55px;
  }
`;

export const Iconftlink = styled.img`
  height: 60px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow:
      rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    backdrop-filter: blur(18.2px);
    -webkit-backdrop-filter: blur(18.2px);
  }
  @media (max-width: 768px) {
    height: 43px;
  }
`;

export const GlassDivContainer = styled.div`
  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const DivContainer = styled.div`
  display: flex;
  margin-top: 1px;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: white;
  border: 1px solid #e5e7eb;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
