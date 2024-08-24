import React, { useState } from 'react';
import Step1 from './Step/Step1';
import Step2 from './Step/Step2';
import Step3 from './Step/Step3';
import Step4 from './Step/Step4';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Account Setup',
    'Social Profiles',
    'Personal Details',
    'Social profiless'
  ];

  const nextPrev = (n) => {
    setCurrentStep((prevStep) => prevStep + n);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto mt-12 mb-8 p-12">
      <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">
        Form Wizard - Multi Step Form
      </h1>

      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-md bg-white mx-auto border-solid border-2 border-gray-100 mb-6"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center relative">
              <div
                className={`stepper-circle w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center ${currentStep >= index ? 'text-white' : 'border-gray-300 bg-white text-gray-600'}`}
                style={{
                  backgroundColor: currentStep >= index ? '#afcdde' : 'white',
                  borderColor: currentStep >= index ? '#afcdde' : '#d1d5db',
                }}
              >
                {index + 1}
              </div>
              <div
                className={`text-xs mt-2 ${currentStep >= index ? 'font-bold' : ''}`}
                style={{
                  color: currentStep >= index ? '#afcdde' : '#4b5563',
                }}
              >
                {step}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`stepper-line absolute top-5 left-[58%] w-full h-1`}
                  style={{
                    backgroundColor: currentStep > index ? '#afcdde' : '#d1d5db',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Step4 />}

        <div className="form-footer flex justify-center gap-2">
          {currentStep > 0 && (
            <button
              type="button"
              className="w-24 focus:outline-none border border-gray-300 py-1 px-2 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-sm"
              onClick={() => nextPrev(-1)}
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              className="w-24 border border-transparent focus:outline-none py-1 px-2 rounded-md text-center text-white hover:bg-indigo-700 text-sm"
              style={{ backgroundColor: '#afcdde' }}
              onClick={() => nextPrev(1)}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-24 border border-transparent focus:outline-none py-1 px-2 rounded-md text-center text-white hover:bg-indigo-700 text-sm"
              style={{ backgroundColor: '#afcdde' }}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
