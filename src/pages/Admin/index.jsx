import './index.css';

import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    // Setting of Toastify for alerts
    const notifySuccess = () => toast.success('Offer added successfully');
    const notifyError = () => toast.error('Please, fill in all fields');

    const [formData, setFormData] = useState({
        requirements: { content: '', items: [] },
        role: { content: '', items: [] },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleInputNestedChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, fieldChild, fieldIndex] = name.split("-");
        const newItems = [...formData[fieldName].items];

        if (fieldChild === "content") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [fieldName]: {
                    ...prevFormData[fieldName],
                    content: value,
                },
            }));
        } else {
            newItems[fieldIndex - 1] = value;
            setFormData((prevFormData) => ({
                ...prevFormData,
                [fieldName]: {
                    ...prevFormData[fieldName],
                    items: newItems,
                },
            }));
        }
    };


    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormFilled = Object.values(formData).every((value) => value !== '');

        if (!isFormFilled) {
            notifyError();
            return;
        }

        const url = 'http://localhost:3001/api/offers';
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            notifySuccess();
        } catch (err) {
            console.log('fetching error :', err);
        }
    };

    return (
        <>
            <h2 className='title-admin'>New Offer</h2>

            <form className='form-admin'>
                <div className="form-first-container">
                    <div className='form-admin-container'>
                        <label htmlFor='company'>Company</label>
                        <input
                            type='text'
                            id='company'
                            name='company'
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='logo'>Logo</label>
                        <input
                            type='url'
                            id='logo'
                            name='logo'
                            value={formData.logo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='logoBackground'>Logo Background</label>
                        <input
                            type='text'
                            id='logoBackground'
                            name='logoBackground'
                            value={formData.logoBackground}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='position'>Position</label>
                        <input
                            type='text'
                            id='position'
                            name='position'
                            value={formData.position}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='contract'>Contract</label>
                        <select
                            type='select'
                            id='contract'
                            name='contract'
                            value={formData.contract}
                            onChange={handleInputChange}>
                            <option value=''>--Please choose an option--</option>
                            <option value='full-time'>Full Time</option>
                            <option value='part-time'>Part Time</option>
                        </select>
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='location'>Location</label>
                        <input
                            type='text'
                            id='location'
                            name='location'
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='website'>website</label>
                        <input
                            type='text'
                            id='website'
                            name='website'
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-second-container">
                    <div className='form-admin-container'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            type='text'
                            id='description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='apply'>apply</label>
                        <input
                            type='text'
                            id='apply'
                            name='apply'
                            value={formData.apply}
                            onChange={handleInputChange} />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='requirements'>Requirements</label>
                        <textarea
                            type='text'
                            id='requirements-content'
                            name='requirements-content'
                            value={formData.requirements.content}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='requirements-items-1'
                            name='requirements-items-1'
                            value={formData.requirements.items[0]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='requirements-items-2'
                            name='requirements-items-2'
                            value={formData.requirements.items[1]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='requirements-items-3'
                            name='requirements-items-3'
                            value={formData.requirements.items[2]}
                            onChange={handleInputNestedChange}
                        />
                    </div>
                    <div className='form-admin-container'>
                        <label htmlFor='role'>role</label>
                        <textarea
                            type='text'
                            id='role-content'
                            name='role-content'
                            value={formData.role.content}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='role-items-1'
                            name='role-items-1'
                            value={formData.role.items[0]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='role-items-2'
                            name='role-items-2'
                            value={formData.role.items[1]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='role-items-3'
                            name='role-items-3'
                            value={formData.role.items[2]}
                            onChange={handleInputNestedChange}
                        />
                    </div>
                </div>
                <Button
                    content='Submit'
                    className='btn-admin-submit'
                    onClick={handleSubmit}
                />
            </form>
        </>
    )
}

export default Admin