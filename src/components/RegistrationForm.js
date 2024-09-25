import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // For animation

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    experience: '',
  });
  const [loading, setLoading] = useState(false); // For loading state
  const [success, setSuccess] = useState(false); // For success message
  const [error, setError] = useState(false); // For error message
  const [errors, setErrors] = useState({}); // For individual field validation

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Reset error for this field
  };

  // Field validation
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required.';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) error = 'Please enter a valid email.';
        break;
      case 'teamName':
        if (!value.trim()) error = 'Team Name is required.';
        break;
      case 'experience':
        if (!value || isNaN(value) || value <= 0) error = 'Experience must be a positive number.';
        break;
      default:
        break;
    }

    return error;
  };

  // Validate the whole form for current step
  const validateForm = () => {
    const newErrors = {};

    // Validate only the fields in the current step
    if (step === 1) {
      newErrors.name = validateField('name', formData.name);
      newErrors.email = validateField('email', formData.email);
    } else if (step === 2) {
      newErrors.teamName = validateField('teamName', formData.teamName);
      newErrors.experience = validateField('experience', formData.experience);
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => !error);
  };

  // Handle next step
  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Reset form after successful submission
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      teamName: '',
      experience: '',
    });
    setStep(1); // Reset step to 1
    setSuccess(false);
    setError(false);
    setErrors({});
  };

  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return; // Validate before submission

  setLoading(true);
  setSuccess(false);
  setError(false);

  try {
    // Simulated POST request to a mock API endpoint
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
    console.log('Form Submitted Successfully:', response.data);
    
    // Simulate a short delay to mimic server response
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      resetForm(); // Reset form fields
      setStep(1); // Go back to step 1 for new entries
    }, 1000); // 1 second delay for demonstration
  } catch (error) {
    console.error('Form Submission Error:', error);
    setLoading(false);
    setError(true); // Show error message if submission fails
  }
};




  // Progress bar calculation
  const progressPercentage = (step / 3) * 100;

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-green-300">
      <h2 className="text-3xl font-semibold mb-4 text-center text-green-600">
        Register for Tournaments
      </h2>

      {/* Progress Bar */}
      <div className="relative pt-1 mb-6">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
              Step {step} of 3
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-green-600">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-300"
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <motion.form
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        {step === 1 && (
          <div>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </label>
            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">
              Team Name:
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.teamName && <p className="text-red-600 text-sm">{errors.teamName}</p>}
            </label>
            <label className="block mb-2">
              Experience (in years):
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.experience && <p className="text-red-600 text-sm">{errors.experience}</p>}
            </label>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 font-semibold text-lg text-green-600">
                Confirm your details:
              </h3>
              <p className="mb-2">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="mb-2">
                <strong>Team Name:</strong> {formData.teamName}
              </p>
              <p className="mb-2">
                <strong>Experience:</strong> {formData.experience} years
              </p>
            </motion.div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </motion.form>

      {/* Success or Error Message */}
      {loading && <p className="text-blue-500 text-sm mt-4">Submitting...</p>}
      {success && (
        <p className="text-green-600 text-sm mt-4">Registration successful!</p>
      )}
      {error && (
        <p className="text-red-600 text-sm mt-4">
          An error occurred during submission. Please try again.
        </p>
      )}
    </div>
  );
};

export default RegistrationForm;
