import React, { useEffect, useRef, useState } from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
const Progress = () => {
  const [step, setStep] = useState(0);
  function step2Validator() {
    // return a boolean
    return true;
  }

  function step3Validator() {
    // return a boolean
    return true;
  }

  function onFormSubmit() {}
  const ref = useRef();
  console.log(ref, "ref");
  return (
    <div>
      <StepProgressBar
        ref={ref}
        startingStep={step}
        nextBtnName="Mark step as done"
        previousBtnName=" "
        secondaryBtnClass="next"
        primaryBtnClass="prev"
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Booking Created",
            //   subtitle: "10%",
            name: "step 1",
            //   content: step1Content,
          },
          {
            label: "Booking Confirmed",
            //   subtitle: "50%",
            name: "step 2",
            //   content: step2Content,
            validator: step2Validator,
          },
          {
            label: "Container gated in",
            //   subtitle: "100%",
            name: "step 3",
            //   content: step3Content,
            validator: step3Validator,
          },
          {
            label: "Vessal arrived",
            //   subtitle: "100%",
            name: "step 4",
            //   content: step3Content,
            //   validator: step3Validator,
          },
          {
            label: "Booking completed",
            //   subtitle: "100%",
            name: "step 5",
            //   content: step3Content,
            //   validator: step3Validator,
          },
        ]}
      />
    </div>
  );
};

export default Progress;
