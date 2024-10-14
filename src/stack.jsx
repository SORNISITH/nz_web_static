import { Link } from "react-router-dom";
import { Iconftlink, Icon, DivContainer } from "./ui/style.jsx";

const Stack = () => {
  return (
    <>
      <DivContainer style={{}} className="fadeIn1 ">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon draggable="false" src="/linux.svg" alt="linux logo" />
          <Icon draggable="false" src="/docker.svg" alt="docker logo" />
          <Icon
            style={{}}
            draggable="false"
            src="/nginx.svg"
            alt="nginx logo"
          />
          <Icon draggable="false" src="/nestjs.svg" alt="nestjs logo" />
          <Icon
            style={{}}
            draggable="false"
            src="/nodejs1.svg"
            alt="nodejs logo"
          />
          <Icon
            style={{
              height: "40px",
            }}
            draggable="false"
            src="/nextjs1.svg"
            alt="nextjs logo"
          />
          <Icon
            style={{
              height: "50px",
            }}
            draggable="false"
            src="/vercel.svg"
            alt="nextjs logo"
          />

          <Icon draggable="false" src="/npm.svg" alt="npm logo" />
          <Icon draggable="false" src="/postgres.svg" alt="postgres logo" />
          <Icon
            style={{}}
            draggable="false"
            src="/mongodb.svg"
            alt="mongodb logo"
          />
          <Icon draggable="false" src="/tsscript.svg" alt="tsscript logo" />
          <Icon draggable="false" src="/logo-javascript.svg" alt="js logo" />
          <Icon
            style={{
              height: "60px",
            }}
            draggable="false"
            src="/react.svg"
            alt="react logo"
          />
          <Icon style={{}} draggable="false" src="/vue.svg" alt="vue logo" />
          <Icon draggable="false" src="/vite.svg" alt="vite logo" />
          <Icon
            draggable="false"
            src="/tailwindcss.svg"
            alt="tailwindcss logo"
          />
          <Icon
            draggable="false"
            src="/html-5-logo-svgrepo-com.svg"
            alt="html logo"
          />
          <Icon
            draggable="false"
            src="/css3-01-svgrepo-com.svg"
            alt="css logo"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{}}>{"Editor: "}</h2>
          <Link className="inherit" target="_blank" to="https://neovim.io/">
            <Iconftlink
              style={{}}
              draggable="false"
              data-tooltip-id="neo-tooltip"
              data-tooltip-content="NEO VIM"
              src="/neovim-logo.svg"
              alt="neovim logo"
            />
          </Link>
          <Link
            className="inherit"
            target="_blank"
            to="https://www.lazyvim.org/"
          >
            <Iconftlink
              style={{}}
              data-tooltip-id="lazy-tooltip"
              data-tooltip-content="LAZYVIM PLUGIN "
              draggable="false"
              src="/icon-dark.svg"
              alt="lazyvim logo"
            />
          </Link>

          <Link
            className="inherit"
            target="_blank"
            to="https://code.visualstudio.com/"
          >
            <Iconftlink
              style={{}}
              data-tooltip-id="vscode-tooltip"
              data-tooltip-content="VS CODE"
              draggable="false"
              src="/Visual_Studio_Code_1.35_icon.svg"
              alt="vs logo"
            />
          </Link>
        </div>
      </DivContainer>
    </>
  );
};

export default Stack;
