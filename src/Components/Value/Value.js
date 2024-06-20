
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utility/accordian"

function Value(){
  const [className, setClassName] = useState(null);
    return(
        <>
        <div className="v-wrapper">
            {/* left side */}
            <div className="v-left">
                
                    <img src="./main3.jpg" alt="img" />
                
            </div>

            {/* right side */}
            <div className="v-right">
          <h1 className="orangeText">Our Value</h1>
          <h1 className="secondaryText ">Value we give to you</h1>
          <span className="prim">
            We always help you to find the right Property <br />   Best service
            you can get is from us related to buying the best property that will
            have great value in future
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="orangeText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="prim2">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
            </div>

            
        </div>
        </>
    )
}
export default Value