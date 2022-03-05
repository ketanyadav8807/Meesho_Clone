import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  const steps = ["Cart", "Address", "Payment", "Summary"];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const navigate = useNavigate();
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    navigate(`checkout/${steps[newActiveStep]}`)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <CheckoutContext.Provider
      value={{
        steps: steps,
        activeStep: activeStep,
        completed: completed,
        handleStep: handleStep,
        handleNext: handleNext,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
