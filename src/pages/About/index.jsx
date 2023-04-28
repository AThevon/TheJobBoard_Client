import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const About = () => {

    const { isMobile } = useContext(ThemeContext);

    const navigate = useNavigate();

    return (
        <section className="about">
            <div className="about-container">
                <h2>About Us</h2>
                <p>We are a job board website dedicated to helping job seekers find their dream jobs and employers find the right candidates for their organizations.</p>

                <h2>Our Story</h2>
                <p>Our platform provides a user-friendly interface for job seekers to search and apply for job openings, as well as for employers to post their job listings and connect with potential candidates.<br />
                    We understand the challenges faced by both job seekers and employers in the hiring process, and we strive to make the process as seamless as possible for both parties.</p>

            </div>
            <div className="about-container">

                <h2>Our Mission</h2>
                <p>Our team is made up of experienced professionals in the fields of human resources, software engineering, and user experience design, who are passionate about creating a better job search experience for everyone.</p>

                <h2>Our Vision</h2>
                <p>We believe that finding the right job or candidate is not just about matching skills and qualifications, but also about finding the right cultural fit and shared values.<br />
                Thank you for choosing our platform to be a part of your job search journey. We are committed to helping you achieve your career goals and finding the right talent for your organization.
                </p>
            </div>
            {isMobile && (
                <Button content='Back to admin portal' onClick={() => navigate('/admin')}
                className='btn-about'/>
            )}
        </section>
    );
}

export default About;