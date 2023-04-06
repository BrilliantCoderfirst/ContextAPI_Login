import React from 'react';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router, Routers, Route} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Navbar />
        <div className="homeContainer">
            <section className="first">
                <img src="https://c4.wallpaperflare.com/wallpaper/922/804/907/light-laptop-notebook-lighting-wallpaper-preview.jpg" alt="" />
                <div className="content">
                    <h1>UX-UI Design</h1>
                    <p>UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction.</p>
                </div>
            </section>
        </div>
    </>
  )
}

export default HomePage