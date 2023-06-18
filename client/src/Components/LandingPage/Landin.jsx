import { Header } from "../Header/Header";
import "../Header/header.css";
import banner from "../../assets/middle.jpg";
import { Link } from "react-router-dom";
import { ProdCard, SuggestionCard, TechCard } from "../ProdCard/ProdCard";
import { PopperCard } from "../ProdCard/popperprodcard";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: "0",
  },
}));
export const Landigpage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

const Banner = () => {
  // const [loading, setLoading] = useState(true);
  const loading = useRef(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://udemy-vr4p.onrender.com/courses")
      .then(({ data }) => {
        // console.log(data);
        loading.current = false;
        setProducts([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section>
        <div className="midbanner">
          <div className="bannercard">
            <div>
              <h1>Dream big</h1>
              <p>
                Find a course to help you reach where you want to go. Starting
                at ₹455 through March 31.
              </p>
            </div>
          </div>
          <div className="bannerdiv">
            <img src={banner} alt="some" />
          </div>
        </div>
      </section>

      {loading.current ? (
        <>
          <SkeltonLoading />
          <SkeltonLoading />
        </>
      ) : (
        <>
          <section>
            <div className="headline">
              <div className="headline_main-text">
                A broad selection of courses
              </div>
              <div className="headline_sub-text">
                Choose from 183,000 online video courses with new additions
                published every month
              </div>
            </div>
          </section>
          <section>
            <div className="data-comp">
              <div className="data-cont">
                <div className="topic-btn">
                  <button>
                    <span>Python</span>
                  </button>
                  <button>
                    <span>Excel</span>
                  </button>
                  <button>
                    <span>Web Development</span>
                  </button>
                  <button>
                    <span>JavaScrip</span>
                  </button>
                  <button>
                    <span>Data Science</span>
                  </button>
                  <button>
                    <span>AWS Certification</span>
                  </button>
                  <button>
                    <span>AWS Certification</span>
                  </button>
                  <button>
                    <span>Drawing</span>
                  </button>
                </div>
                <div className="skill-hub">
                  <div className="skill-desc">
                    <h2>Expand your career opportunities with Python</h2>
                    <p>
                      Take one of Udemy’s range of Python courses and learn how
                      to code using this incredibly useful language. Its simple
                      syntax and readability makes Python perfect for Flask,
                      Django, data science, and machine learning. You’ll learn
                      how to build everything from games to sites to apps.
                      Choose from a range of courses that will appeal to both
                      beginners and advanced developers alike.
                    </p>
                    <Link className="skill-titl-btn" to={"#"}>
                      <span>Explore Python</span>
                    </Link>
                  </div>
                  <div className="prod-cont">
                    {products.map((el) => (
                      <LightTooltip
                        arrow
                        placement="right"
                        title={<PopperCard data={el} />}
                      >
                        <ProdCard data={el} />
                      </LightTooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <SuggestionCard
              title={"Popular for advancing Web Developers"}
              data={products}
              category={"It & Software"}
            />
            <SuggestionCard
              title={"Popul in Marketing"}
              data={products}
              category={"Marketing"}
            />
          </section>

          <section>
            <TechCard />
          </section>
          <section>
            <div className="featured">
              <div className="feature-cont">
                <h2>Featured topic by category</h2>
                <div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                </div>
                <a className="com-btn" href="/">
                  <span>Explore more topics</span>
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <img
                  className="banner-2"
                  src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
                  alt=""
                />
                <div>
                  <PitchCard
                    title={"Become an instructor"}
                    des={
                      "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
                    }
                    btn={"Start teaching today"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="partner">
              <Patner />
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <div>
                  <PitchCard2 />
                </div>
                <img
                  className="banner-2"
                  src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <img
                  className="banner-2"
                  src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
                  alt=""
                />
                <div>
                  <PitchCard
                    title={"Transform your life through education"}
                    des={
                      "Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                    }
                    btn={"Find out how"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </>
      )}
    </>
  );
};
/*
 */
const PitchCard = ({ title, des, btn }) => {
  return (
    <div className="pitch-cont">
      <h1 className="pitchHead">{title}</h1>
      <p className="pitchdec">{des}</p>
      <UdemyBtn btn={btn} />
    </div>
  );
};
const PitchCard2 = () => {
  return (
    <div className="pitch-cont">
      <img
        className="pitchcard2img"
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
        alt=""
      />
      <p className="pitchdec">
        Get unlimited access to 6,000+ of Udemy’s top courses for your team.
        Learn and improve skills across business, tech, design, and more.
      </p>
      <UdemyBtn btn={"Get Udemy Business"} />
    </div>
  );
};

const UdemyBtn = ({ btn }) => {
  return (
    <div>
      <Link to={"#"} className="udemylinkbtn">
        {btn}
      </Link>
    </div>
  );
};

const Patner = () => {
  return (
    <div>
      <h3 className="partner-title">Trusted by companies of all sizes</h3>
      <div className="parner-logo-cont">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt=""
        />
      </div>
    </div>
  );
};

const SkeltonLoading = () => {
  return (
    <>
      <div className="skelton">
        <Skeleton className="line" variant="text" animation="wave" />
        <div className="midskel">
          <Skeleton
            className="rectangel"
            variant="rectangular"
            width={50}
            height={50}
          />
          <div>
            <Part />
          </div>
        </div>
      </div>
    </>
  );
};
const Part = () => {
  return (
    <>
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
    </>
  );
};
