import React, { useState } from 'react';
import './styles3.css'; // If you have separate CSS file

const PatientInformation = () => {
  const [form, setForm] = useState({
    name: '',
    sex: '',
    age: '',
    symptoms: ['']
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'symptoms') {
      const newSymptoms = [...form.symptoms];
      newSymptoms[index] = value;
      setForm((prev) => ({ ...prev, symptoms: newSymptoms }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addSymptomField = () => {
    setForm((prev) => ({ ...prev, symptoms: [...prev.symptoms, ''] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="form-section">
      <h2>Patient Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={form.sex}
          onChange={handleChange}
          required
        >
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <label>Symptoms:</label>
        <div className="symptom-fields" id="symptoms">
          {form.symptoms.map((symptom, index) => (
            <input
              key={index}
              type="text"
              name="symptoms"
              value={symptom}
              onChange={(e) => handleChange(e, index)}
              placeholder={`Symptom ${index + 1}`}
            />
          ))}
        </div>

        <button type="button" onClick={addSymptomField}>Add Symptom</button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientInformation;
