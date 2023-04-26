import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {


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
        console.log(formData);
    };


    const handleInputNestedChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        const newItems = [...formData[fieldName].items];

        // If the items array is empty, we need to create a new array
        if (newItems.length === 0) {
            newItems.push('');
        }

        newItems[parseInt(fieldIndex) - 1] = value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: {
                ...prevFormData[fieldName],
                items: newItems,
            },
        }));
    };


    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3001/api/offers';
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (err) {
            console.log('fetching error :', err);
        }
    };

    return (
        <>
            <Header />
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
                            alt=''
                            id='logo'
                            name='logo'
                            value={formData.logo}
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
                        <input
                            type='text'
                            id='contract'
                            name='contract'
                            value={formData.contract}
                            onChange={handleInputChange}
                        />
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
                            id='requirements-item-1'
                            name='requirements-item-1'
                            value={formData.requirements.items[0]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='requirements-item-2'
                            name='requirements-item-2'
                            value={formData.requirements.items[1]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='requirements-item-3'
                            name='requirements-item-3'
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
                            id='role-item-1'
                            name='role-item-1'
                            value={formData.role.items[0]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='role-item-2'
                            name='role-item-2'
                            value={formData.role.items[1]}
                            onChange={handleInputNestedChange}
                        />
                        <input
                            type='text'
                            id='role-item-3'
                            name='role-item-3'
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