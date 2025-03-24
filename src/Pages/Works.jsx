import Header from "../global/Header";
import Footer from "../global/Footer";

function Works() {
    return (
        <>
            <Header />
            <main className="about">
                <div className="container">
                    <div className="grid">
                        <div className="col-2 bg-columns">
                        </div>

                        <div className="col-8">
                            <section>

                                <hr className="longDivider" />
                                
                                <div class="workFilters">
                                    <nav>
                                        <ul className="nav-list">
                                            <li><a href="/">#frontend</a></li>
                                            <li><a href="/">#visual</a></li>
                                            <li><a href="/">#uiux</a></li>
                                            <li><a href="/">#misc</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Works;
