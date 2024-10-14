import styled from "styled-components";
import { Link } from "react-router-dom";
const AboutMeMenu = () => {
  return (
    <>
      <Link
        style={{
          width: "100%",
          height: "100%",
        }}
        to="/about"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="38px"
            fill="#e8eaed"
          >
            <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
          </Svg>{" "}
          <TextNav>About</TextNav>
        </div>
      </Link>
    </>
  );
};
const Svg = styled.svg`
	@media (min-width: 900px) {
	display: none;
`;

const TextNav = styled.h4`
  padding-right: 5px;
  @media (max-width: 700px) {
    display: none;
  }
`;
//css
export default AboutMeMenu;
