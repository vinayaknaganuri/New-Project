import React, { useState } from 'react';

function ReturnAssets() {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    os: '',
    systemName: '',
    model: '',
    processor: '',
    ram: '',
    storage: '',
    adapterType: '',
    adapterSerial: '',
    mouseType: '',
    mouseSerial: '',
    headsetType: '',
    headsetSerial: '',
    bag: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call or database logic
    alert('Asset returned successfully!');
    // Optionally reset the form after submission
    setFormData({
      employeeId: '',
      employeeName: '',
      os: '',
      systemName: '',
      model: '',
      processor: '',
      ram: '',
      storage: '',
      adapterType: '',
      adapterSerial: '',
      mouseType: '',
      mouseSerial: '',
      headsetType: '',
      headsetSerial: '',
      bag: '',
    });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Return Assets</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {[
            { label: 'Employee ID', name: 'employeeId', required: true },
            { label: 'Employee Name', name: 'employeeName', required: true },
            { label: 'OS Name', name: 'os' },
            { label: 'System Name', name: 'systemName' },
            { label: 'System Model', name: 'model' },
            { label: 'Processor', name: 'processor' },
            { label: 'RAM', name: 'ram' },
            { label: 'Storage', name: 'storage' },
            { label: 'Adapter Type', name: 'adapterType' },
            { label: 'Adapter Serial Number', name: 'adapterSerial' },
            { label: 'Mouse Type', name: 'mouseType' },
            { label: 'Mouse Serial Number', name: 'mouseSerial' },
            { label: 'Headset Type', name: 'headsetType' },
            { label: 'Headset Serial Number', name: 'headsetSerial' },
            { label: 'Bag', name: 'bag' },
          ].map((field, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <label htmlFor={field.name} className="form-label">{field.label}</label>
              <input
                type="text"
                className="form-control"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required} // Use the required property from the field object
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Return Asset</button>
      </form>
    </div>
  );
}

export default ReturnAssets;