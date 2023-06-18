import React from "react";
import "./Product.css";
import ReportIcon from "@mui/icons-material/Report";
// import LanguageTwoToneIcon from '@mui/icons-materialLanguageTwoTone';
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ClosedCaptionRoundedIcon from "@mui/icons-material/ClosedCaptionRounded";

import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import SystemUpdateAltTwoToneIcon from "@mui/icons-material/SystemUpdateAltTwoTone";
import AllInclusiveTwoToneIcon from "@mui/icons-material/AllInclusiveTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "../Header/Header";

export const Product = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* <PlayCircleFilledRoundedIcon/> */}
      <div className="BlackBox">
        <div className="BBText">
          <div className="flex purpal">
            <h5>Development</h5>
            <span className="icon">
              <ArrowRightSharpIcon />
            </span>
            <h5> Programming Languages </h5>
            <span className="icon">
              <ArrowRightSharpIcon />
            </span>
            <h5>Data Analysis</h5>
          </div>

          <h1 className="white headingTop1">
            Learning Python for Data Analysis and Visualization
          </h1>

          <h3 className="white">
            Learn python and how to use it to analyze,visualize and present
            data. Includes tons of sample code and hours of video!
          </h3>

          <div>
            <span className=" Ybox">Bestseller</span>
            <span className="darkyellow">
              4.3
              <span>
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarPurple500SharpIcon />
                <StarHalfSharpIcon />
              </span>
            </span>
            <span className="purpal underline">(17,379 rating)</span>
            <span className="white">185,449 students</span>
          </div>

          <div className="Bcreated">
            <span className="white">Created by </span>
            <span className="purpal underline">Jose Portilla</span>
          </div>

          <div className="white BBbottom">
            <span className="BBicons">
              <ReportIcon />
            </span>
            <span className="BBbottomText">Last updated 9/2019</span>
            <span className="BBicons">
              {" "}
              <PublicTwoToneIcon />
            </span>
            <span className="BBbottomText">English</span>
            <span className="BBicons">
              <ClosedCaptionRoundedIcon />
            </span>
            <span className="BBbottomText">
              English [Auto], Indonesian [Auto],{" "}
            </span>
            <span className="BBbottomText underline">6more</span>
          </div>
        </div>
      </div>

      {/* ////////////////////////////-------fixBox---------------//////// */}

      <div className="fixBox FixB">
        <div className="innerFixBox">
          <div className="Ftop2lines">
            <div className="flex FTH">
              <h1 className="FT1"> ₹455 </h1>
              <span className="FT2"> ₹3,499 </span>
              <span className="FT3"> 87% off </span>
            </div>
            <div className="red">
              <AccessAlarmsIcon />
              <span className="bold">5 hours</span> left at this price!
            </div>
          </div>

          <button className="gotocartBtn">Go to cart</button>
          <button className="buynowBtn">Buy now</button>

          <p className="center">30-Day Money-Back Guarantee</p>

          <div className="ThisCourse">
            <h4>This course includes:</h4>
            <p>
              <OndemandVideoSharpIcon /> 21 hours on-demand video
            </p>
            <p>
              <NoteAddSharpIcon /> 3 articles
            </p>
            <p>
              <SystemUpdateAltTwoToneIcon /> 4 downloadable resources
            </p>
            <p>
              <AllInclusiveTwoToneIcon /> Full lifetime access
            </p>
            <p>
              <PhoneAndroidTwoToneIcon /> Access on mobile and TV
            </p>
            <p>
              <EmojiEventsTwoToneIcon /> Certificate of completion
            </p>
          </div>

          <div className="flex gap underline pointer">
            <h4>Share</h4>
            <h4>Gift this course</h4>
            <h4>Apply Coupon</h4>
          </div>

          <div className="training">
            <h3>Training 5 or more people?</h3>
            <p>
              Get your team access to 6,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <button className="buynowBtn btn2">Try Udemy Business</button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

      <div className="MiddleMainDiv">
        <div className="MiddleContent">
          <h2>What you'll learn</h2>
          <div className="flex">
            <table>
              <tr className="MLcon flex">
                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>Have an intermediate skill level of Python programming.</p>
                </td>

                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>Use the Jupyter Notebook Environment.</p>
                </td>
              </tr>
              <tr className="MLcon flex">
                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>Use the numpy library to create and manipulate arrays.</p>
                </td>

                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>
                    Use the pandas module with Python to create and structure
                    data.
                  </p>
                </td>
              </tr>
              <tr className="MLcon flex">
                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>
                    Learn how to work with various data formats within python,
                    including: JSON,HTML, and MS Excel Worksheets.
                  </p>
                </td>

                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>
                    Create data visualizations using matplotlib and the seaborn
                    modules with python.
                  </p>
                </td>
              </tr>
              <tr className="MLcon flex">
                <td className="MLcon flex">
                  <span>
                    <DoneRoundedIcon />
                  </span>
                  <p>Have a portfolio of various data analysis projects.</p>
                </td>

                <td className="MLcon flex"></td>
              </tr>
            </table>
          </div>
        </div>

        <div className="CourseContent">
          <h2>Course content</h2>
          <div className="flex">
            <p>15 sections • 110 lectures • 21h 5m total length</p>
            <h5 className="Expand">Expand all sectons</h5>
          </div>

          <div className="CourceMainBox">
            <div className="CourceBoxs">
              <List sx={{ width: "100%" }}>
                <ListItemButton onClick={handleClick}>
                  <div className="OpenBox flex">
                    {open ? (
                      <ExpandLess className="openArrow" />
                    ) : (
                      <ExpandMore className="openArrow" />
                    )}
                    <h4>Intro to Course and Python</h4>
                    <span className="CourseCTime">2 lecture • 7 min</span>
                  </div>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}></ListItemButton>
                    <div className="AfterOpendiv">
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                    </div>
                  </List>
                </Collapse>
              </List>
            </div>

            <div className="CourceBoxs">
              <List sx={{ width: "100%" }}>
                <ListItemButton onClick={handleClick2}>
                  <div className="OpenBox flex">
                    {open ? (
                      <ExpandLess className="openArrow" />
                    ) : (
                      <ExpandMore className="openArrow" />
                    )}
                    <h4>Setup</h4>
                    <span className="CourseCTime">3 lecture • 17 min</span>
                  </div>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}></ListItemButton>
                    <div className="AfterOpendiv">
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                    </div>
                  </List>
                </Collapse>
              </List>
            </div>

            <div className="CourceBoxs">
              <List sx={{ width: "100%" }}>
                <ListItemButton onClick={handleClick}>
                  <div className="OpenBox flex">
                    {open ? (
                      <ExpandLess className="openArrow" />
                    ) : (
                      <ExpandMore className="openArrow" />
                    )}
                    <h4>Learning Numpy</h4>
                    <span className="CourseCTime">8 lecture • 1hr 7 min</span>
                  </div>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}></ListItemButton>
                    <div className="AfterOpendiv">
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                      <div className="flex ConDiv">
                        <PlayCircleFilledRoundedIcon className="playIcon" />
                        <p className="courseInfo">Course Info</p>
                      </div>
                    </div>
                  </List>
                </Collapse>
              </List>
            </div>
          </div>

          <div className="moreSection">
            <h5>5 more section</h5>
          </div>

          {/* <hr />
           <hr /> */}
          {/* ========================================================== */}
          {/* ----------------------------------------------------------- */}

          {/* <Accordion>
               
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
           
          <Typography><h4>Intro to Course and Python</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
          {/* --------------------------------------------------------------- */}

          {/* <Accordion>
               
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                 
                  
                 <Typography><h4>Setup</h4></Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                 </Typography>
               </AccordionDetails>
             </Accordion>
            
             <Accordion>
               
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                   
                 
                  
                 <Typography><h4>Learning Numpy</h4></Typography>
                 
               </AccordionSummary>
               <AccordionDetails>
                 <Typography>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                 </Typography>
               </AccordionDetails>
               
             </Accordion>
            
             <Accordion>
               
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                 
                  
                 <Typography><h4>Intro to Course and Python</h4></Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                 </Typography>
               </AccordionDetails>
             </Accordion>
            

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}

          {/* ================================================================ */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
