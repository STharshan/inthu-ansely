'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Upload } from 'lucide-react'
import emailjs from '@emailjs/browser'

const steps = [
  'Client Information',
  'Project Scope & Requirements',
  'Design Preferences',
  'Content',
  'SEO & Tracking',
  'Timeline & Deadlines',
]

const ServiceInquiryForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [imageFiles, setImageFiles] = useState([])
  const [videoFiles, setVideoFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])
  const [videoPreviews, setVideoPreviews] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files)
    if (type === 'image') {
      setImageFiles(files)
      setImagePreviews(files.map((file) => URL.createObjectURL(file)))
    } else {
      setVideoFiles(files)
      setVideoPreviews(files.map((file) => URL.createObjectURL(file)))
    }
  }

  // Upload files to Google Drive
  const uploadToDrive = async (files) => {
    const uploadedLinks = []
    for (const file of files) {
      const metadata = {
        name: file.name,
        parents: ['YOUR_FOLDER_ID'], // TODO: Replace with your folder ID
      }

      const form = new FormData()
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }))
      form.append('file', file)

      const accessToken = 'YOUR_OAUTH_ACCESS_TOKEN' // TODO: Replace with valid OAuth token

      const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: new Headers({ Authorization: 'Bearer ' + accessToken }),
        body: form,
      })

      const data = await res.json()

      if (data.id) {
        await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: 'reader', type: 'anyone' }),
        })
        uploadedLinks.push(`https://drive.google.com/uc?id=${data.id}`)
      }
    }
    return uploadedLinks
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (step < steps.length) return nextStep()

    setUploading(true)
    try {
      const [imageLinks, videoLinks] = await Promise.all([
        uploadToDrive(imageFiles),
        uploadToDrive(videoFiles),
      ])

      const submissionData = {
        ...formData,
        imageLinks: imageLinks.join(', '),
        videoLinks: videoLinks.join(', '),
      }

      console.log('Final submission data:')
      console.table(submissionData)

      await emailjs.send('your_service_id', 'your_template_id', submissionData, 'your_public_key')

      alert('Form submitted successfully!')
      setFormData({})
      setImageFiles([])
      setVideoFiles([])
      setImagePreviews([])
      setVideoPreviews([])
      setStep(1)
    } catch (error) {
      console.error('Upload or Email error:', error)
      alert('Something went wrong. Check console for details.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">
      <main className="w-full max-w-4xl px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-orange-500">Service Inquiry</span> Form
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Complete each section to share your project details.
          </p>
        </div>

        {/* Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {steps.map((label, idx) => {
            const isActive = step === idx + 1
            const isCompleted = step > idx + 1
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setStep(idx + 1)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-lg text-center transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500/10 border border-orange-500 text-orange-400'
                    : isCompleted
                    ? 'bg-green-500/10 border border-green-500 text-green-400'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:bg-gray-800/70'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-medium">
                  {isCompleted ? <CheckCircle size={18} /> : idx + 1}
                </div>
                <span className="text-sm sm:text-base font-medium">{label}</span>
              </button>
            )
          })}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-10 md:p-12 shadow-lg space-y-6"
        >
          {/* Step 1 */}
          {step === 1 && (
            <>
              <InputField label="Business Name *" name="businessName" required onChange={handleChange} placeholder="Your Business Name" />
              <InputField label="Contact Person *" name="contactName" required onChange={handleChange} placeholder="John Doe" />
              <InputField label="Email *" name="contactEmail" type="email" required onChange={handleChange} placeholder="john@example.com" />
              <InputField label="Phone" name="contactPhone" onChange={handleChange} placeholder="+61 400 000 000" />
              <TextAreaField label="Business Address" name="businessAddress" onChange={handleChange} placeholder="Street, City, Country" />
              <InputField label="Industry / Niche" name="industry" onChange={handleChange} placeholder="E.g., Hospitality, Retail" />
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <SelectField label="Website Type *" name="websiteType" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="informational">Informational</option>
                <option value="e-commerce">E-commerce</option>
                <option value="booking">Booking</option>
                <option value="portfolio">Portfolio</option>
                <option value="custom">Custom Web App</option>
              </SelectField>
              <InputField label="Number of Pages" name="numberOfPages" onChange={handleChange} placeholder="E.g., Home, About, Contact" />
              <TextAreaField label="Project Objectives" name="projectGoals" onChange={handleChange} placeholder="What do you want to achieve?" />
              <TextAreaField label="Key Features / Functionality" name="coreFeatures" onChange={handleChange} placeholder="E.g., gallery, booking form, payment gateway" />
              <SelectField label="Preferred Platform" name="platformPreference" onChange={handleChange}>
                <option value="">Select</option>
                <option value="wordpress">WordPress</option>
                <option value="react">React</option>
                <option value="shopify">Shopify</option>
              </SelectField>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <InputField label="Design Style" name="designStyle" onChange={handleChange} placeholder="Modern, minimal, bold..." />
              <InputField label="Color Scheme" name="colorScheme" onChange={handleChange} placeholder="Preferred colors or hex codes" />
              <InputField label="Font Preferences" name="fontPreferences" onChange={handleChange} placeholder="Specific fonts or styles" />
              <TextAreaField label="Branding / Logo Notes" name="logosAssets" onChange={handleChange} placeholder="Describe or upload branding details" />
            </>
          )}

          {/* Step 4 - with Upload */}
          {step === 4 && (
            <>
              <TextAreaField label="Text Content" name="textContent" onChange={handleChange} placeholder="Who will provide content for pages?" />

              <FileUpload label="Upload Images" type="image/*" multiple onChange={(e) => handleFileChange(e, 'image')} />
              {imagePreviews.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {imagePreviews.map((src, i) => (
                    <img key={i} src={src} alt={`preview-${i}`} className="w-24 h-24 object-cover rounded-md border border-gray-700" />
                  ))}
                </div>
              )}

              <FileUpload label="Upload Videos" type="video/*" multiple onChange={(e) => handleFileChange(e, 'video')} />
              {videoPreviews.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {videoPreviews.map((src, i) => (
                    <video key={i} controls className="w-40 rounded-md border border-gray-700">
                      <source src={src} type="video/mp4" />
                    </video>
                  ))}
                </div>
              )}

              <TextAreaField label="Legal Pages" name="legalPages" onChange={handleChange} placeholder="Privacy Policy, Terms & Conditions..." />
            </>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <>
              <TextAreaField label="SEO Keywords" name="seoGoals" onChange={handleChange} placeholder="List keywords or SEO goals" />
              <TextAreaField label="Analytics / Tracking Info" name="analytics" onChange={handleChange} placeholder="Provide access details or accounts" />
              <TextAreaField label="Meta Titles & Descriptions" name="metaData" onChange={handleChange} placeholder="If available" />
            </>
          )}

          {/* Step 6 */}
          {step === 6 && (
            <>
              <InputField label="Project Start Date" name="startDate" type="date" onChange={handleChange} />
              <TextAreaField label="Key Milestones / Deadlines" name="milestones" onChange={handleChange} placeholder="Describe major milestones" />
              <InputField label="Go-Live Date" name="goLiveDate" type="date" onChange={handleChange} />
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center px-5 py-2.5 rounded-md border border-gray-700 text-white hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </button>
            )}
            <button
              type="submit"
              disabled={uploading}
              className={`flex items-center justify-center px-6 py-2.5 rounded-md font-medium shadow-md transition-all ${
                uploading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 text-white'
              }`}
            >
              {uploading ? 'Uploading...' : step === steps.length ? 'Submit' : 'Next'}
              {!uploading && <ArrowRight className="h-4 w-4 ml-2" />}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

/* Reusable Components */
const InputField = ({ label, name, type = 'text', required, placeholder, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
    />
  </div>
)

const TextAreaField = ({ label, name, placeholder, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <textarea
      name={name}
      placeholder={placeholder}
      rows="3"
      onChange={onChange}
      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
    />
  </div>
)

const SelectField = ({ label, name, required, onChange, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <select
      name={name}
      required={required}
      onChange={onChange}
      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500"
    >
      {children}
    </select>
  </div>
)

const FileUpload = ({ label, type, multiple, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col w-full border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-orange-500 transition p-6 text-center">
        <Upload className="mx-auto mb-2 text-gray-400" />
        <span className="text-gray-400 text-sm">Click or drag files here</span>
        <input type="file" accept={type} multiple={multiple} className="hidden" onChange={onChange} />
      </label>
    </div>
  </div>
)

export default ServiceInquiryForm
