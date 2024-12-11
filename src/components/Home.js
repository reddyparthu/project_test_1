// Home.js

import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to the Learning Management System</h1>
                <p>Your Gateway to Quality Education and Skill Development</p>
            </header>
            
            <section className="about-section">
                <h2>About Our LMS</h2>
                <p>
                    Our Learning Management System (LMS) provides a robust platform where students can access course materials, participate in discussions, complete assignments, and track their progress. With an intuitive user interface, our LMS makes learning accessible and flexible, catering to students' diverse needs.
                </p>
            </section>

            <section className="features-section">
                <h2>Key Features</h2>
                <ul>
                    <li>Interactive Courses with Video and Audio Lessons</li>
                    <li>Quizzes, Assignments, and Feedback</li>
                    <li>Student and Teacher Dashboards for Tracking Progress</li>
                    <li>Live Chats and Discussion Forums for Collaboration</li>
                    <li>Automated Certificate Issuance on Course Completion</li>
                </ul>
            </section>

            <section className="benefits-section">
                <h2>How Our LMS Helps Future Students</h2>
                <p>
                    With our LMS, students can access learning materials anytime, anywhere, and at their own pace. This flexible approach prepares students for a digital future where remote learning and self-paced education are becoming the norm. Additionally, our LMS promotes critical thinking, time management, and self-motivation—skills essential for future careers.
                </p>
            </section>
        </div>
    );
}

function Error() {
    return <div className="error-page">Error Page</div>;
}

export { Home, Error };

