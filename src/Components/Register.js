import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Checkbox from './Checkbox';
import Toast from './Toast';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [teamSize, setTeamSize] = useState(1);
  const [errors, setErrors] = useState({});
  const [rulesAgreed, setRulesAgreed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderBloodGroup: '',
    email: '',
    contactNumber: '',
    alternateNumber: '',
    theme: 'hardware',
    teamMembers: ['', '', ''],
    teamMembersBloodGroup: ['', '', ''],
    instituteName: '',
    projectTitle: '',
    projectDescription: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.teamName.trim()) {
        newErrors.teamName = 'Team name is required';
      } else if (formData.teamName.trim().length < 3) {
        newErrors.teamName = 'Team name must be at least 3 characters long';
      }
      if (!formData.teamLeaderName.trim()) {
        newErrors.teamLeaderName = 'Team leader name is required';
      } else if (formData.teamLeaderName.trim().length < 3) {
        newErrors.teamLeaderName = 'Team leader name must be at least 3 characters long';
      }
      if (!formData.teamLeaderBloodGroup) {
        newErrors.teamLeaderBloodGroup = 'Team leader blood group is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.contactNumber) {
        newErrors.contactNumber = 'Contact number is required';
      } else if (!validatePhone(formData.contactNumber)) {
        newErrors.contactNumber = 'Please enter a valid 10-digit mobile number';
      }
      if (formData.alternateNumber && !validatePhone(formData.alternateNumber)) {
        newErrors.alternateNumber = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (currentStep === 2) {
      if (!formData.theme) {
        newErrors.theme = 'Theme selection is required';
      }
      if (!formData.instituteName.trim()) {
        newErrors.instituteName = 'Institute name is required';
      } else if (formData.instituteName.trim().length < 3) {
        newErrors.instituteName = 'Institute name must be at least 3 characters long';
      }
      if (!formData.projectTitle.trim()) {
        newErrors.projectTitle = 'Project title is required';
      } else if (formData.projectTitle.trim().length < 5) {
        newErrors.projectTitle = 'Project title must be at least 5 characters long';
      }
      for (let i = 0; i < teamSize - 1; i++) {
        if (!formData.teamMembers[i].trim()) {
          newErrors[`teamMember${i}`] = `Team member ${i + 2} name is required`;
        } else if (formData.teamMembers[i].trim().length < 3) {
          newErrors[`teamMember${i}`] = `Team member ${i + 2} name must be at least 3 characters long`;
        }
      }
      for (let i = 0; i < teamSize - 1; i++) {
        if (!formData.teamMembersBloodGroup[i]) {
          newErrors[`teamMemberBloodGroup${i}`] = `Team member ${i + 2} blood group is required`;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleTeamMemberChange = (index, value) => {
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index] = value;
    setFormData(prev => ({
      ...prev,
      teamMembers: newTeamMembers
    }));
    if (errors[`teamMember${index}`]) {
      setErrors(prev => ({
        ...prev,
        [`teamMember${index}`]: undefined
      }));
    }
  };

  const handleTeamMemberBloodGroupChange = (index, value) => {
    setFormData((prevData) => {
      const updatedBloodGroups = [...prevData.teamMembersBloodGroup];
      updatedBloodGroups[index] = value;

      return {
        ...prevData,
        teamMembersBloodGroup: updatedBloodGroups,
      };
    });
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rulesAgreed) {
      setToastMessage("Please agree to the rules and regulations before submitting.");
      setToastType("error");
      setShowToast(true);
      return;
    }
    if (validateStep(2)) {
      try {
        await addDoc(collection(db, 'teams'), {
          teamName: formData.teamName,
          teamLeaderName: formData.teamLeaderName,
          teamLeaderBloodGroup: formData.teamLeaderBloodGroup,
          email: formData.email,
          contactNumber: formData.contactNumber,
          alternateNumber: formData.alternateNumber,
          theme: formData.theme,
          teamMembers: formData.teamMembers.slice(0, teamSize - 1),
          teamMembersBloodGroup: formData.teamMembersBloodGroup.slice(0, teamSize - 1),
          instituteName: formData.instituteName,
          projectTitle: formData.projectTitle,
          projectDescription: formData.projectDescription,
          submittedAt: new Date()
        });

        setToastMessage("Team registration successful!");
        setToastType("success");
        setShowToast(true);
      } catch (error) {
        console.error("Error adding document: ", error);
        setToastMessage("There was an error submitting your registration. Please try again.");
        setToastType("error");
        setShowToast(true);
      }
    }
  };

  const capitalizeWords = (str) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const renderError = (fieldName) => {
    return errors[fieldName] && (
      <p className="text-red-500 text-sm mt-1">{errors[fieldName]}</p>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register Your Team
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the details below to participate in the Science Exhibition
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {['Team Details', 'Project Info', 'Review'].map((label, index) => (
              <div key={label} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                  ${step > index + 1 ? 'bg-green-500 text-white' :
                    step === index + 1 ? 'bg-blue-600 text-white' :
                      'bg-gray-200 text-gray-400'}`}>
                  {step > index + 1 ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <span className={`text-sm ${step === index + 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-4 h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Name*
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  placeholder="Enter your team name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.teamName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('teamName')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size*
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1}>1 Member</option>
                  <option value={2}>2 Members</option>
                  <option value={3}>3 Members</option>
                  <option value={4}>4 Members</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Leader Name*
                </label>
                <input
                  type="text"
                  name="teamLeaderName"
                  value={formData.teamLeaderName}
                  onChange={handleInputChange}
                  placeholder="Enter team leader's full name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.teamLeaderName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('teamLeaderName')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Leader's Blood Group*
                </label>
                <select
                  name="teamLeaderBloodGroup"
                  value={formData.teamLeaderBloodGroup}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.teamLeaderBloodGroup ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                {renderError('teamLeaderBloodGroup')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Leader's Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter a valid email address"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('email')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Leader's Contact Number*
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('contactNumber')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alternate/Team Member's Number
                </label>
                <input
                  type="tel"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleInputChange}
                  placeholder="Enter alternate 10-digit mobile number (optional)"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.alternateNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('alternateNumber')}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme*
                </label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.theme ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="hardware">Hardware</option>
                  <option value="software">Software</option>
                </select>
                {renderError('theme')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institute Name*
                </label>
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleInputChange}
                  placeholder="Enter your institute name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.instituteName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('instituteName')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title*
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  placeholder="Enter your project title"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.projectTitle ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('projectTitle')}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description*
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your project (minimum 50 characters)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-4">
                {Array.from({ length: teamSize - 1 }).map((_, index) => (
                  <div key={index} className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Member {index + 2} Name:
                    </label>
                    <input
                      type="text"
                      value={formData.teamMembers[index] || ''}
                      onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                      placeholder={`Enter Team Member ${index + 2} Name`}
                      className={`w-full px-4 py-3 rounded-lg border ${errors[`teamMember${index}`] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {renderError(`teamMember${index}`)}

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Blood Group
                      </label>
                      <select
                        value={formData.teamMembersBloodGroup[index] || ""}
                        onChange={(e) => handleTeamMemberBloodGroupChange(index, e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border ${errors[`teamMemberBloodGroup${index}`] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                      {renderError(`teamMemberBloodGroup${index}`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      {capitalizeWords(key.replace(/([A-Z])/g, ' $1').trim())}:
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-2 break-words">
                      {Array.isArray(value) ? value.slice(0, teamSize - 1).filter(Boolean).map(capitalizeWords).join(', ') : capitalizeWords(value)}
                    </dd>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold text-blue-600">Rules and Regulations</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="max-h-80 overflow-y-auto pr-4">
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Registration and Participation</h5>
                        <ol className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Participants must register in advance and submit their project titles with a brief description by the given deadline.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Each team should consist of 2–4 members. Individual participation may also be allowed depending on the rules.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Participants must present their institutional ID cards on the day of the exhibition.</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Project Guidelines</h5>
                        <ol start="4" className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Projects must be original and should not have been presented in any prior competitions.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">The project should be relevant to the theme (if any) of the exhibition.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Participants are responsible for arranging their materials, tools, and equipment. Only basic facilities like tables, electricity, or water will be provided by the organizers.</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Setup and Display</h5>
                        <ol start="7" className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Teams must set up their projects at the designated location within the allotted time. Latecomers may be disqualified.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Projects must display the title, team member names, and college name clearly.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">All exhibits must be secured to prevent accidents or damage during the exhibition.</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Safety and Conduct</h5>
                        <ol start="10" className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Projects must not pose any safety risks to participants, judges, or visitors (e.g., hazardous chemicals, sharp objects, open flames).</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Teams should be present at their stations throughout the event to explain and demonstrate their projects.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Respectful behavior and professional conduct toward judges, volunteers, and other participants are mandatory.</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Evaluation</h5>
                        <ol start="13" className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Projects will be judged based on creativity, scientific methodology, presentation, and relevance to the theme.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">The decision of the judges will be final and binding.</li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="text-md font-semibold text-gray-900 mb-2">Other Important Rules</h5>
                        <ol start="15" className="list-decimal list-inside space-y-2 md:pl-4">
                          <li className="text-sm text-gray-700 leading-relaxed">Teams must follow the event schedule, including setup and dismantling times.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Use of pre-made or plagiarized content will result in immediate disqualification.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Snacks or refreshments, if provided, should be consumed only in designated areas.</li>
                          <li className="text-sm text-gray-700 leading-relaxed">Emergency procedures, if required, must be adhered to promptly.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 p-4 rounded-lg">
                  <Checkbox 
                    id="rules" 
                    checked={rulesAgreed} 
                    onCheckedChange={(checked) => setRulesAgreed(checked)}
                  >
                    <span className="text-sm text-blue-800 font-medium">
                      I have read and agree to the rules and regulations
                    </span>
                  </Checkbox>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="ml-auto flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!rulesAgreed}
                className={`ml-auto flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${rulesAgreed ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                Submit Registration
                <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </form>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default RegistrationForm;

