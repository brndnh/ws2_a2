import Header from "../global/Header";
import Footer from "../global/Footer";

import firstImage from '../assets/works_cc3.png';
import { ArrowForwardCircleOutline } from 'react-ionicons';
import "./Works.css";

function Works() {
    return (
        <>
            <Header />
            <main className="about">
                <div className="container">
                    <div className="grid">
                        <div className="col-3 bg-columns">
                        </div>

                        <div className="col-6">
                            <section>

                                <hr className="long-divider" />

                                <div class="work-filters">
                                    <nav>
                                        <ul className="nav-list">
                                            <li><a href="/">#frontend</a></li>
                                            <li><a href="/">#visual</a></li>
                                            <li><a href="/">#uiux</a></li>
                                            <li><a href="/">#misc</a></li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="project-card">
                                    <div className="image-container">
                                        <img src={firstImage} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="title">
                                            “BH Cringe Compilation 3” <span className="tag">#misc</span>
                                        </h3>
                                        <p className="description">— Video Direction; Compositing, Effects</p>
                                        <p className="year">2024</p>
                                    </div>
                                    <button className="view-project">
                                        <a href=""><ArrowForwardCircleOutline color={"#000"} height="40px" width="40px" /></a>
                                    </button>
                                </div>

                                <div className="project-card">
                                    <div class="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/0J2IJiBxSZc?si=tY4YPg7q3PPN_K5s"
                                            title="YouTube"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="col-3 bg-columns">
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Works;
