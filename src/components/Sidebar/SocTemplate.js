import React from 'react';
import Data from './../../data/soc'
import { useParams } from 'react-router-dom'
import Styles from '../../styles/pages/home.module.css'

function SocTemplate() {
    const id = useParams().id;
  return (
  <div>
    <div className="heading_box" style={{ marginTop: "6%" }}>
          <div>
            <p class="btn">
              <span>
                <span>
                  <span className="border_box">{Data.data[id].name}</span>
                </span>
              </span>
            </p>
          </div>
        </div>
        <div  data-aos="zoom-in-up">
      <div className={Styles.aboutUsSection}>
        <h2 className={Styles.sectionHeading}>About Us</h2>
        <p className={Styles.description}>
        {Data.data[id].description}
        </p>
      </div>
    </div>
    <h2 className={Styles.sectionHeading}>Heads 2021 - 22</h2>
      
      {Data.data[id].Heads.map(GovName => 
      <div style={{textAlign: "center", color: "#81BAE9"}}>
        <h3 style={{fontSize: "30px", lineHeight: "200%"}}>{GovName.name} ({GovName.email})</h3>
      </div>)}
      <div style={{marginTop: "3%"}}>
      <h2 className={Styles.sectionHeading}>Connect Us on:</h2>
      <h1><a target="_blank" href={Data.data[id].facebook_link}>Facebook</a>&nbsp;&nbsp;&nbsp; <a target="_blank" href={Data.data[id].wiki_link}>Wikipedia</a></h1>
      </div>
  </div>
  )
}

export default SocTemplate;
