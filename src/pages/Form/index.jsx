import './index.css';

import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const { theme } = useContext(ThemeContext);
    // Setting of Toastify for alerts
    const notifySuccess = () => toast.success('Offer added successfully');
    const notifyError = () => toast.error('Please, fill in all fields');

    const navigate = useNavigate();

    // Setting of the form data
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


    // Setting of the form inputs of the nested fields
    const itemsInputs = (items, fieldName) => {
        return items.map((item, index) => (
            <div className='form-admin-container' key={index}>
                <input
                    type='text'
                    id={`${fieldName}-item-${index + 1}`}
                    name={`${fieldName}-item-${index + 1}`}
                    value={item}
                    onChange={handleInputNestedChange}
                />
            </div>
        ));
    };


    const handleAddItem = (e, fieldName) => {
        e.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [fieldName]: {
                    ...prevFormData[fieldName],
                    items: [...prevFormData[fieldName].items, ""]
                }
            };
        });
    };


    const handleDeleteItem = (e, fieldName) => {
        e.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [fieldName]: {
                    ...prevFormData[fieldName],
                    items: prevFormData[fieldName].items.slice(0, -1)
                }
            };
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormFilled = Object.values(formData).every((value) => value !== '');
        if (!isFormFilled || !formData) {
            notifyError();
            return;
        }

        const url = `${process.env.REACT_APP_API_URL}/offers`;
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            notifySuccess();
            navigate('/');
        } catch (err) {
            console.log('fetching error :', err);
            notifyError();
        }
    };


    return (
        <>
            <h2 className={`title-admin ${theme === 'dark' ? 'dark' : ''}`}>New Offer</h2>
            <Button 
                className='btn-return'
                onClick={() => navigate('/')}
                content='Go back' />
            <form className={`form-admin ${theme === 'dark' ? 'dark' : ''}`}>
                <div className='form-admin-container'>
                    <label htmlFor='company'>Name of the company</label>
                    <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='logo'>URL of the logo</label>
                    <input
                        type='url'
                        id='logo'
                        name='logo'
                        value={formData.logo}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='logoBackground'>Color of the logo background</label>
                    <input
                        type='text'
                        id='logoBackground'
                        name='logoBackground'
                        value={formData.logoBackground}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='position'>Position in the company</label>
                    <input
                        type='text'
                        id='position'
                        name='position'
                        value={formData.position}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='contract'>Type of contract</label>
                    <select
                        className='select'
                        id='contract'
                        name='contract'
                        value={formData.contract}
                        onChange={handleInputChange}>
                        <option value=''>-- Please choose a type --</option>
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
                    <label htmlFor='website'>Website of the company</label>
                    <input
                        type='url'
                        id='website'
                        name='website'
                        value={formData.website}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='description'>Description of the job</label>
                    <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='apply'>Link for apply</label>
                    <input
                        type='text'
                        id='apply'
                        name='apply'
                        value={formData.apply}
                        onChange={handleInputChange} />
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='requirements-content'>Requirements</label>
                    <textarea
                        id='requirements-content'
                        name='requirements-content'
                        value={formData.requirements.content}
                        onChange={handleInputNestedChange}
                    />
                    <label
                        htmlFor={'requirements-item'}
                        className='nested-label'>List of requirements
                        {(formData.requirements.items).length === 0 && (
                            <span className='grey'>At least one is needed</span>)}</label>
                    <div className="items-btns">
                        <button
                            className='items-btn'
                            onClick={(e) => handleAddItem(e, 'requirements')}>
                            <FontAwesomeIcon icon={faSquarePlus} style={{ height: '2.2rem' }} /><span>Add</span>
                        </button>
                        <button
                            className={`items-btn remove-btn ${((formData.requirements.items).length > 0) ? '' : 'disabled'}`}
                            onClick={(e) => handleDeleteItem(e, 'requirements')}>
                            <FontAwesomeIcon icon={faSquareMinus} style={{ height: '2.2rem' }} /><span>Remove</span>
                        </button>
                    </div>

                    {itemsInputs(formData.requirements.items, "requirements")}
                </div>
                <div className='form-admin-container'>
                    <label htmlFor='role'>Role</label>
                    <textarea
                        id='role-content'
                        name='role-content'
                        value={formData.role.content}
                        onChange={handleInputNestedChange}
                    />
                    <label
                        className='nested-label'
                        htmlFor={'role-item'}>List of stages
                        {(formData.role.items).length === 0 && (
                            <span className='grey'>At least one is needed</span>)}</label>

                    <div className="items-btns">
                        <button
                            className='items-btn'
                            onClick={(e) => handleAddItem(e, 'role')}>
                            <FontAwesomeIcon
                                icon={faSquarePlus}
                                style={{ height: '2.2rem' }} /><span>Add</span>
                        </button>
                        <button
                            className={`items-btn remove-btn ${((formData.role.items).length > 0) ? '' : 'disabled'}`}
                            onClick={(e) => handleDeleteItem(e, 'role')}>
                            <FontAwesomeIcon
                                icon={faSquareMinus}
                                style={{ height: '2.2rem' }} /><span>Remove</span>
                        </button>
                    </div>
                    {itemsInputs(formData.role.items, "role")}
                </div>
                <Button
                    content='Add a new offer'
                    className='btn-admin-submit'
                    onClick={handleSubmit}
                />
            </form>

        </>
    )
}

export default Form