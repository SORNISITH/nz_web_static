import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./component/Input.jsx";
import { DivContainer } from "./ui/style.jsx";
const Blog = () => {
  const [dataNews, setDataNews] = useState(null);
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("news");
  const [limitApi, setLimitApi] = useState(false);
  const api = import.meta.env.VITE_API_KEY;
  const getData = (keyword) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${api}`,
      )
      .then((res) => {
        setDataNews(res.data);
      })
      .catch((error) => {
        console.error("Error get api", error);
        setLimitApi(true);
      });
  };
  useEffect(() => {
    getToday();
    getData(keyword);
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    if (date == null) {
      getToday();
    }
    if (keyword !== null) {
      getData(keyword);
    }
  };
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth());
    const day = String(today.getDate() - 1);
    const formatted = `${year}-${month}-${day}`;
    setDate(formatted);
    return formatted;
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleInput = (e) => {
    setKeyword(e.target.value);
  };
  if (limitApi) {
    return (
      <>
        <DivContainer className="fadeIn2">
          <h1>Sorry ! API outside DEVOLOPMENT https://newsapi.org/ </h1>
          <h2
            style={{
              padding: "10px",
            }}
          >
            sorry - you found this msg because I am requesting api outside
            development (I need to purchase news api)::{" "}
          </h2>
          <h2>
            {" "}
            API :: Developer plan license is only valid if your project is in
            development. If your project is being used outside of a development
            environment (i.e. production or staging), please upgrade to a valid
            license.
          </h2>
          <p>@Sor Nisith</p>
        </DivContainer>
        <DivContainer>
          <h1>This is an screen shot Example</h1>
          <img style={{ width: "100%" }} src="/new_example.png" alt="" />
        </DivContainer>
      </>
    );
  }
  if (limitApi == false) {
    return (
      <>
        <DivContainer
          style={{
            position: "sticky",
            borderRadius: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seach-bar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="search-container"
            >
              <div
                style={{
                  width: "200px",
                }}
              >
                <label
                  style={{
                    paddingLeft: "10px",
                    fontSize: "1.2rem",
                  }}
                >
                  Search For News
                </label>
                <Input
                  style={{ width: "200px", border: "1px solid red" }}
                  set={setKeyword}
                  value={keyword}
                  placeholder="Search News"
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  Date
                </label>
                <input
                  style={{
                    width: "200px",
                  }}
                  onChange={handleDate}
                  type="date"
                />
              </div>
            </div>
            <div>
              <button
                style={{ width: "100px" }}
                onClick={handleSearch}
                value="Search"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </DivContainer>
        <DivContainer
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
            className="container-blog"
          >
            <div className="side-blog"></div>
            <div className="main-blog">
              {dataNews == null
                ? console.log("Loading Data....")
                : dataNews.articles

                    .filter((item) => item?.author != null)
                    .map((item) => (
                      <>
                        <div
                          style={{
                            border: "1px solid #1e3a8a",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                            height: "auto",
                          }}
                          className="new-container"
                        >
                          <div style={{}} className="title">
                            <h2 style={{ color: "white" }}>
                              Topic : {item.title}
                            </h2>
                          </div>
                          <hr style={{}} />
                          <div
                            style={{
                              height: "auto",
                              position: "relative",
                              display: "flex",
                            }}
                            className="image"
                          >
                            <img
                              style={{
                                width: "50%",
                                minHeight: "auto",
                                objectFit: "contain",
                                marginTop: "10px",
                                border: "0.9px solid yellow",
                              }}
                              src={item.urlToImage}
                              alt={"link@ " + item.urlToImage}
                            />{" "}
                            <div
                              style={{
                                marginTop: "10px",
                                marginLeft: "10px",
                              }}
                              className="content"
                            >
                              <p
                                style={{
                                  fontSize: "1.5rem",
                                }}
                              >
                                {"-         \t" + item.description}
                              </p>
                              <br />
                              <article
                                style={{
                                  fontSize: "1.4rem",
                                  textAlign: "justify",
                                }}
                              >
                                {item.content}
                              </article>{" "}
                              <div
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                                className="author"
                              >
                                <h4>by {item.author || "unknown "}</h4>
                                <p
                                  style={{
                                    textAlign: "justify",
                                    fontStyle: "italic",
                                    marginLeft: "10px",
                                    fontSize: "0.6rem",
                                  }}
                                >
                                  {"time : " + item.publishedAt}
                                </p>
                              </div>{" "}
                            </div>
                          </div>
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <h4 style={{ marginTop: "10px" }}>{item.url}</h4>
                          </a>
                        </div>
                      </>
                    ))}
            </div>
          </div>
        </DivContainer>
      </>
    );
  }
};

export default Blog;
