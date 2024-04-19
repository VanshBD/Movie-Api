import React from 'react';
import '../Templet/Templet.css';
import Logo from '../Templet/Images/Logo.png';
import Frame from '../Templet/Images/Frame.png'; // Assuming this image is used but commented out

// Import other images used in the code
import Group67 from './Images/Group 67.png';
import Group66 from './Images/Group 66.png';
import Group65 from './Images/Group 65.png';
import Logo1 from './Images/Logo (1).png';

const TempComponent = () => {
    return (<>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        {/* google Font link*/}
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
        />
        {/* font awsome cdn */}
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
        />
        {/* BOF Header Section*/}
        <header className="header-sec">
            <nav className="navbar  py-1 navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <div className="navbar-brand logo-img m-0">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="header-menu collapse navbar-collapse gap-5 justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-menu navbar-nav mt-4 mt-lg-0 gap-lg-5">
                            <li className="nav-item">
                                <a className="nav-link px-1" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-1" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-1" href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-1" href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                        <button className="btn-header btn my-2 my-lg-auto rounded-pill">
                            Free Quote
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        {/* EOF Header Section */}
        {/* BOF Hero section 1 */}
        <section className="hero-section py-1">
            <div className="herosec-body  py-md-5 ">
                <div className="container ">
                    <div className="herosec-detail row justify-content-center align-items-center">
                        <div className="herosec-info col-12 p-md-0 col-md-6">
                            <div className="hero-heading my-4 ">
                                <h1>Join Our Team</h1>
                            </div>
                            <div className="hero-text">
                                <p>
                                    We attract the accurate kind of people like us with Creative
                                    Minds and Committed to their Dreams. We offer you to start a
                                    transcendent career by joining Webvolty IT Solution.
                                </p>
                            </div>
                        </div>
                        <div className="herosec-img overflow-hidden col-12 col-md-5">
                            <div className="hero-img">
                                <img src={Frame} alt="Frame" />
                            </div>s
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* EOF Hero section 1 */}
        {/* BOF section 2 */}
        <section className="section-2 mt-5 pt-md-5">
            <div className="sec2-head w-50 text-center mx-auto ">
                {/* requrement of the border  */}
                <h2>
                    <span>
                        Career &amp; Culture at <b>nexios</b>
                    </span>{" "}
                </h2>
                {/* <div class="head-border border border-5 "></div> */}
            </div>
            <div className="sec2-body text-center my-4 w-75 mx-auto">
                <p>
                    We are one of the best places to work. nexios makes an atmosphere where
                    you can grow your inner self and outer self, show your talent It s a
                    perfect combination between you and nexios when the career and your
                    passion come together. We re always hard at work crafting clever and
                    thoughtful digital experiences for our products. We are finding for some
                    fresh talents who can add cultural values at nexios, someone who has the
                    same mission that is ours but also can bring diversity at a similar
                    time.
                </p>
            </div>
        </section>
        {/* EOF section 2 */}
        {/* BOF section 3 */}
        <section className="section-3 mb-5 pt-md-5">
            <div className="sec3-head w-50 text-center my-5 mx-auto ">
                <h2>
                    <span>
                        Opening <b>Position</b>
                    </span>
                </h2>
            </div>
            <div className="sec3-body ">
                <div className="container">
                    <div className="sec3-develop row justify-content-center align-items-center">
                        <div className="dev-device device-1 px-3 col-12 my-3 my-md-0 col-sm-6 col-md-4">
                            <div className="dev-box p-0 text-center border">
                                <div className="dev-head py-4 ">
                                    <h3>ios Developer</h3>
                                </div>
                                <div className="dev-position">
                                    <div className="position-text  ">
                                        <p className="m-0"> Opening Position</p>
                                    </div>
                                    <div className="position-number my-1 fs-4 font-bold">3</div>
                                </div>
                                <div className="dev-exp">
                                    <div className="exp-text">
                                        <p className="m-0">Experience in Year</p>
                                    </div>
                                    <div className="exp-number my-1 fs-4 font-bold">0 to 2</div>
                                </div>
                                <div className="dev-btn py-4">
                                    <button className="btn btn-info text-light px-4 py-2 rounded-pill">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dev-device device-2 px-3 col-12 my-3 my-md-0 col-sm-6 col-md-4">
                            <div className="dev-box p-0 text-center border">
                                <div className="dev-head py-4 ">
                                    <h3>ios Developer</h3>
                                </div>
                                <div className="dev-position">
                                    <div className="position-text  ">
                                        <p className="m-0"> Opening Position</p>
                                    </div>
                                    <div className="position-number my-1 fs-4 font-bold">3</div>
                                </div>
                                <div className="dev-exp">
                                    <div className="exp-text">
                                        <p className="m-0">Experience in Year</p>
                                    </div>
                                    <div className="exp-number my-1 fs-4 font-bold">0 to 2</div>
                                </div>
                                <div className="dev-btn py-4">
                                    <button className="btn btn-info text-light px-4 py-2 rounded-pill">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dev-device device-2 px-3 col-12 my-3 my-md-0 col-md-4">
                            <div className="dev-box p-0 text-center border">
                                <div className="dev-head py-4 ">
                                    <h3>ios Developer</h3>
                                </div>
                                <div className="dev-position">
                                    <div className="position-text  ">
                                        <p className="m-0"> Opening Position</p>
                                    </div>
                                    <div className="position-number my-1 fs-4 font-bold">3</div>
                                </div>
                                <div className="dev-exp">
                                    <div className="exp-text">
                                        <p className="m-0">Experience in Year</p>
                                    </div>
                                    <div className="exp-number my-1 fs-4 font-bold">0 to 2</div>
                                </div>
                                <div className="dev-btn py-4">
                                    <button className="btn btn-info text-light px-4 py-2 rounded-pill">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* EOF section 3 */}
        {/* BOF section 4 */}
        <section className="section-4 my-2 mb-md-5 p-md-5 text-center">
            <div className="sec4-head w-50 text-center my-3  mx-auto ">
                <h2>
                    <span>
                        Process of <b> Interview</b>
                    </span>
                </h2>
            </div>
            <div className="sec4-head-text w-50 mx-auto">
                <p>
                    It s a complete combination between you and company when the career and
                    your passion come together. This Incomparable culture inspires us to
                    always be genuine in the workplace, put ideas over hierarchy, result
                    over efforts, and have fun doing it all!
                </p>
            </div>
            <div className="sec4-body my-5">
                <div className="container">
                    <div className="sec4-process row  justify-content-lg-between justify-content-center align-items-center">
                        <div className="process-step p-0 col-lg-3">
                            <div className="process-img process-img1 pb-3 py-lg-3 px-0  ">
                                <img
                                    className="rounded-circle  mx-0 p-0"
                                    src={Group65}
                                    alt=""
                                />
                                <div className="process-border d-none d-lg-block" />
                            </div>
                            <div className="process-title">
                                <h4>HR Interview</h4>
                            </div>
                        </div>
                        <div className="pro-border-vertical m-0 p-0 d-block d-lg-none" />
                        <div className="process-step p-0 col-lg-3">
                            <div className="process-img process-img2  position-relative pb-3 py-lg-3 px-0  ">
                                <img
                                    className="rounded-circle  mx-0 p-0"
                                    src={Group66}
                                    alt=""
                                />
                                <div className="process-border d-none d-lg-block" />
                            </div>
                            <div className="process-title">
                                <h4>HR Interview</h4>
                            </div>
                        </div>
                        <div className="pro-border-vertical m-0 p-0 d-block d-lg-none" />
                        <div className="process-step p-0 col-lg-3">
                            <div className="process-img process-img3 pb-3 py-lg-3 px-0  ">
                                <img
                                    className="rounded-circle  mx-0 p-0"
                                    src={Group67}
                                    alt=""
                                />
                            </div>
                            <h4>HR Interview</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* EOF section 4 */}
        {/* BOF Footer Section */}
        <footer className="footer-sec text-center pt-5 p-0 m-0  ">
            <div className="footer-body mb-5  py-md-4 d-lg-flex justify-content-around align-items-center">
                <div className="container">
                    <div className="footer-detail row justify-content-center px-sm-5 px-md-0 gap-md-4 my-2 my-lg-0">
                        <div className="company-work col-12 px-sm-5 col-lg-4 text-center text-md-start  ">
                            <div className="companey-logo ">
                                <img src={Logo1} alt="" />
                            </div>
                            <div className="company-description my-4">
                                <p>
                                    nexios allows businesses to narrow the technology gap in their
                                    organization and get a competitive edge through innovative
                                    software development solutions tailored to their goals.
                                </p>
                            </div>
                            <div className="company-social  d-flex gap-3 gap-md-5 justify-content-lg-start justify-content-center fs-1">
                                <div className="social-icon">
                                    <i className="fa-brands fa-facebook" />
                                </div>
                                <div className="social-icon">
                                    <i className="fa-brands fa-instagram" />
                                </div>
                                <div className="social-icon">
                                    <i className="fa-brands fa-twitter" />
                                </div>
                            </div>
                        </div>
                        <div className="company-pages text-center text-md-start col-12 col-sm-6 col-md-3 col-lg-2 mt-lg-0 mt-md-3 mt-4    ">
                            <div className="pages-head  ">
                                <h5>Company</h5>
                            </div>
                            <div className="pages-detail ">
                                <ul className="pages-list p-0">
                                    <li className="pt-1 pt-md-2">Home</li>
                                    <li className="pt-1 pt-md-2">About Us</li>
                                    <li className="pt-1 pt-md-2">Portfolio</li>
                                    <li className="pt-1 pt-md-2">Careers</li>
                                    <li className="pt-1 pt-md-2">Contact Us</li>
                                    <li className="pt-1 pt-md-2">Sitemap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="company-service text-center text-md-start col-12 col-sm-6 col-md-3 col-lg-2 mt-lg-0 mt-md-3 mt-4    ">
                            <div className="service-head  ">
                                <h5>Services</h5>
                            </div>
                            <div className="service-detail ">
                                <ul className="service-list p-0">
                                    <li className="pt-1 pt-md-2">App Development</li>
                                    <li className="pt-1 pt-md-2"> Web Development</li>
                                    <li className="pt-1 pt-md-2">UI &amp; UX</li>
                                    <li className="pt-1 pt-md-2">Internet Of Things</li>
                                    <li className="pt-1 pt-md-2">Development Operations</li>
                                    <li className="pt-1 pt-md-2">Quality Assurance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="company-address text-center text-md-start col-12 col-md-4 col-lg-3 mt-lg-0 mt-md-3 mt-4    ">
                            <div className="address-head  ">
                                <h5>Get In Touch</h5>
                            </div>
                            <div className="address-detail ">
                                <div className="address-info d-flex justify-content-md-start justify-content-center gap-3 mt-2">
                                    <div className="address-logo">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="address-text">
                                        <p>
                                            111, name Square,
                                            <br /> Nr sell oil petrol pump,
                                            <br /> VIP circle,sudama, Surat.
                                        </p>
                                    </div>
                                </div>
                                <div className="address-contact d-flex justify-content-md-start justify-content-center gap-3">
                                    <div className="address-logo">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="address-text contact-info">
                                        <p>+91 8866856039</p>
                                    </div>
                                </div>
                                <div className="address-mail d-flex justify-content-md-start justify-content-center gap-3">
                                    <div className="address-logo">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="address-text mail-info">
                                        <p>Info@nexios.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3">
                <p className="fs-6 m-0 pt-2 p-lg-0">
                    ©2022 nexios technologies, | All right reserved Terms of Services |
                    Privacy Policy
                </p>
            </div>
        </footer>
        {/* EOF Footer Section  */}
    </>

    );
};

export default TempComponent;