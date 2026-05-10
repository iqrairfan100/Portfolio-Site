import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='experience-header'>
        <center>
          <h3>What Skills Do I Have?</h3>
          <h2>Technical Experience</h2>
        </center>
        <p className='experience_intro'>
          My expertise spans full-stack engineering, data science, and automation — 
          combining scalable backend systems with modern, data-driven interfaces.
        </p>
      </div>

      <div className='container experience_container'>

        {/* Frontend */}
        <div className='experience_section'>
          <h3>Frontend Development</h3>
          <p className='experience_subtext'>
            Building responsive and scalable interfaces using modern frameworks, 
            design systems, and mobile-first principles.
          </p>
          <div className='experience_content'>
            {[
              'JavaScript',
              'TypeScript',
              'ReactJS',
              'React Native',
              'Next.js',
              'Swift',
              'Objective-C',
              'HTML / CSS',
              'Tailwind / Bootstrap'
            ].map((skill, i) => (
              <article
                key={i}
                className={`experience_details ${
                  ['ReactJS', 'TypeScript', 'React Native'].includes(skill)
                    ? 'featured'
                    : ''
                }`}
              >
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className='experience_section'>
          <h3>Backend & Database Development</h3>
          <p className='experience_subtext'>
            Designing efficient APIs, integrating cloud architectures, and optimizing data pipelines for reliability and scale.
          </p>
          <div className='experience_content'>
            {[
              'Java',
              'Python',
              'Node.js / Express',
              'C# / .NET',
              'PostgreSQL',
              'MongoDB',
              'MySQL',
              'SQL Server / MSSQL',
              'Firebase',
              'AWS',
              'Azure Cloud'
            ].map((skill, i) => (
              <article
                key={i}
                className={`experience_details ${
                  ['Python', 'Node.js / Express', 'PostgreSQL', 'AWS'].includes(skill)
                    ? 'featured'
                    : ''
                }`}
              >
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Machine Learning & Tools */}
        <div className='experience_section'>
          <h3>Machine Learning & Tools</h3>
          <p className='experience_subtext'>
            Developing intelligent systems, automation models, and research-grade analytics pipelines for data-driven solutions.
          </p>
          <div className='experience_content'>
            {[
              'Pandas / NumPy / Matplotlib',
              'scikit-learn',
              'TensorFlow / PyTorch',
              'SQL Query Optimization',
              'Git / GitHub / Bitbucket',
              'Docker / CI-CD',
              'Figma / UX Design'
            ].map((skill, i) => (
              <article
                key={i}
                className={`experience_details ${
                  ['scikit-learn', 'TensorFlow / PyTorch', 'Docker / CI-CD'].includes(skill)
                    ? 'featured'
                    : ''
                }`}
              >
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>

      <h1 className='text-trans'>..........</h1>
      <h1 className='text-trans'>..........</h1>
    </section>
  )
}

export default Experience
