import Slider from "react-slick";
import "./carousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ProdCard } from "../ProdCard/ProdCard";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewIcon style={{ color: "white", fontSize: "25px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "white", fontSize: "25px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  infinite: false,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        slidesToScroll: 4,
      },
    },
  ],
};

export const MultiItemCarousel = ({ children }) => {
  return (
    <div className="carousel">
      <Slider {...carouselProperties}>{children}</Slider>
    </div>
  );
};
