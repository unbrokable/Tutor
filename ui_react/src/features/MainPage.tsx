import googleplay from "../google-play.svg";
import appstore from "../app-store.png";
import white from "../white.jpg";
import ava1 from "../ava1.jpg";
import ava2 from "../ava2.jpg";
import ava3 from "../ava3.jpg";

const MainPage = () => {
  return (
    <>
      <div
        style={{
          padding: "1em",
          fontSize: "40px",
          textAlign: "center",
          border: "3px inset #00BFFF",
          borderRadius: "30px",
        }}
      >
        Tutor selection service In your town
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2em",
        }}
      >
        <button
          style={{
            backgroundColor: "#1B98F5",
            borderRadius: "10px",
            padding: "1em",
            color: "white",
            fontWeight: 700,
            paddingLeft: "2em",
            paddingRight: "2em",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Find tutor
        </button>
        <p style={{ fontSize: "20px", color: "black", fontWeight: 500 }}>
          12345 tutors awaiting order
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#00BFFF",
          padding: "2em",
          fontSize: "30px",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Even more convenient in the StudyAll mobile application
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div style={{ paddingLeft: "2em", padding: "1em" }}>
              <img
                src={googleplay}
                style={{ height: "50px", width: "50px" }}
              ></img>{" "}
              <a
                href="#"
                style={{
                  paddingLeft: "1em",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Click to download
              </a>
            </div>
            <div style={{ paddingLeft: "2em", padding: "1em" }}>
              <img
                src={appstore}
                style={{ height: "50px", width: "50px" }}
              ></img>{" "}
              <a
                href="#"
                style={{
                  paddingLeft: "1em",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Click to download
              </a>
            </div>
          </div>
          <img
            src={white}
            style={{
              height: "600px",
              width: "400px",
              transform: "rotate(165deg)",
              boxShadow: "10px 10px 5px #black",
            }}
          ></img>
        </div>
      </div>
      <div style={{ padding: "3em" }}>
        <p style={{ fontSize: "30px" }}>Reviews about tutors</p>
        <p style={{ color: "lightgray", fontSize: "30px" }}>
          100,500 reviews in the last 12 months.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              background: "#00BFFF",
              height: "480px",
              width: "400px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={ava1}
                style={{ padding: "2em", height: "150px", width: "150px" }}
              ></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    paddingTop: "2em",
                    fontSize: "17px",
                  }}
                >
                  Ivan Romanovich Savchenko
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingLeft: "1em",
                  }}
                >
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ★
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    4.88
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ·
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    45 reviews
                  </p>
                </div>
              </div>
            </div>
            <p style={{ paddingLeft: "2em" }}>Artem left a review</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "2em",
              }}
            >
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                Knows how to interest and correctly submits the material.
                Learning approach the most individual. The person is tactful,
                respectful. Pros: based on the results of 8 months of training,
                the child's confidence + progress in grades: there is a program,
                it is individualized according to the child, but still the
                learning strategy is visible, there is no throwing from side to
                side, consistency
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>July 20, 2021</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>Kharkiv</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>Math exam</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>1500₴</p>
            </div>
          </div>
          <div
            style={{ background: "#00BFFF", height: "480px", width: "400px" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={ava2}
                style={{ padding: "2em", height: "150px", width: "150px" }}
              ></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    paddingTop: "2em",
                    fontSize: "17px",
                  }}
                >
                  Elena Viktorovna Shvets
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingLeft: "1em",
                  }}
                >
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ★
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    4.78
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ·
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    22 reviews
                  </p>
                </div>
              </div>
            </div>
            <p style={{ paddingLeft: "2em" }}>Anastasia left a review</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "2em",
              }}
            >
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ fontSize: "24px" }}>★</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                Knows how to interest and correctly submits the material.
                Learning approach the most individual. The person is tactful,
                respectful. Pros: based on the results of 8 months of training,
                the child's confidence + progress in grades: there is a program,
                it is individualized according to the child, but still the
                learning strategy is visible, there is no throwing from side to
                side, consistency
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>December 18, 2021</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>Kiyv</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>English exam</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>1000₴</p>
            </div>
          </div>
          <div
            style={{ background: "#00BFFF", height: "480px", width: "400px" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={ava3}
                style={{ padding: "2em", height: "150px", width: "150px" }}
              ></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    paddingTop: "2em",
                    fontSize: "17px",
                  }}
                >
                  Alina Vasilivna Zadorojnaya
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingLeft: "1em",
                  }}
                >
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ★
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    4.7
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    ·
                  </p>
                  <p style={{ fontSize: "18px", color: `rgba(0,0,0,0.5)` }}>
                    8 reviews
                  </p>
                </div>
              </div>
            </div>
            <p style={{ paddingLeft: "2em" }}>Maksim left a review</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "2em",
              }}
            >
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
              <p style={{ color: "yellow", fontSize: "24px" }}>★</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                Knows how to interest and correctly submits the material.
                Learning approach the most individual. The person is tactful,
                respectful. Pros: based on the results of 8 months of training,
                the child's confidence + progress in grades: there is a program,
                it is individualized according to the child, but still the
                learning strategy is visible, there is no throwing from side to
                side, consistency
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>March 5, 2021</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>Kiyv</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "1em",
              }}
            >
              <p style={{ paddingRight: "1em" }}>English exam</p>
              <p style={{ paddingRight: "1em" }}>·</p>
              <p style={{ paddingRight: "1em" }}>700₴</p>
            </div>
          </div>
        </div>
        <a
          style={{
            fontSize: "20px",
            paddingLeft: "47%",
            textDecoration: "underline",
            color: "black",
          }}
        >
          Load more reviews
        </a>
      </div>
      <div
        style={{
          backgroundColor: "#00BFFF",
          padding: "2em",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Make money on what do you do best
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2em",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
              padding: "1em",
              fontSize: "30px",
              borderColor: "white",
              cursor: "pointer",
            }}
          >
            Become a tutor
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
