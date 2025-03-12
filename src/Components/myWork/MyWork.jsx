import React from 'react';
import './myWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="mywork-item" key={index}>
              <img src={work.w_img} alt={work.w_title} />
              <div className="overlay">
                <h3>{work.w_title}</h3>
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="view-project">View Project</a>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
