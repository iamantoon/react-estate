import {useGetProjectsQuery} from "../../store/projectsApi";
import Project from "../../components/project/Project";
import ServiceList from "../../components/services/ServiceList";
import NewsList from "../../components/News/NewsList";
import title from "./../../images/projects/01.jpg";
import "./main.css";

function Home () {
    const {data = []} = useGetProjectsQuery();
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content-row">
                        <div className="content-text">
                            <h1 className="content-title">We will find a home<br />that's perfect for you.</h1>
                            <p className="content-description">At Haven Estate, we believe that finding your dream home should be a stress-free and enjoyable experience.</p>
                        </div>   
                        <div className="content-image">
                            <img src={title} alt="House" />  
                        </div> 
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <h2 className="projects-title-main">Our projects</h2>
                    <ul className="projects">
                        {data.map((project) => {
                            if (project.home) {
                                return <Project 
                                            key={project.id} 
                                            title={project.title} 
                                            img={project.img} 
                                            year={project.year} 
                                            id={project.id} 
                                        />
                            }
                        })}
                    </ul>
                </div>
            </div>

            <div className="site-description">
                <div className="container">
                    <div className="desc">
                        <h2>The home of happy buyers and sellers</h2>
                        <p>Our team of experienced real estate agents is dedicated to helping you navigate the complex real estate market with ease, providing you with the knowledge and guidance you need to make informed decisions about buying or selling property.</p>

                        <br />

                        <p>Whether you're a first-time buyer or an experienced investor, our team is here to help you at every step of the way. We offer a range of services, including property valuation, property management, and mortgage advice, to ensure that your property journey is a seamless and successful one.</p>

                        <h2>Unlocking doors to your future</h2>
                        
                        <p>Whether you're a first-time buyer or an experienced investor, our team is here to help you at every step of the way. We offer a range of services, including property valuation, property management, and mortgage advice, to ensure that your property journey is a seamless and successful one.</p>

                        <br />

                        <p>With a focus on professionalism, integrity, and transparency, we aim to exceed your expectations and provide you with a stress-free and rewarding experience. Whether you are looking for a cozy starter home, a luxury villa, or a prime commercial property, we are here to help you achieve your goals.</p>

                        <br />

                        <p>Contact us today to learn more about how we can help you find your dream home or sell your property with ease.</p>
                    </div>
                </div>
            </div>

            <ServiceList />

            <section className="section-news">
                <div className="container">
                    <section className="news">
                        <h1 className="news__title">News</h1>
                        <p className="news__description">Stay informed with the latest real estate news and trends on our website. Our expert writers provide valuable insights on market trends, buying and selling tips, and investment strategies</p>
                        <NewsList />
                    </section>
                </div>
            </section>
        </>
    );
}

export default Home;