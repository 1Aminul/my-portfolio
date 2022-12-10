import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
       {
        name: "Learning platform",
        bullet: [
            "This site was authenticated by firebase.",
           " Users can easily choose any course.",
             "Users can know about the course.",
        ],
        Technology: "React.js. Firebase, react-bootstrap, node.js.",
        link: "https://b6-learning-platform-ass10-1aminul.netlify.app/"
       },
       {
        name: "Dentist Doctor",
        bullet: [
            "Users can visit the dentist doctor's home page.",
            "Users click see all button to go to the service page & click the Details button they go to the about page and review page.",
            "If a user is signing they submit their review. Otherwise, they cannot give their review."
        ],
        Technology: "React.js. Firebase, tailwind css, daisy ui, node.js, mongodb.",
        link: "https://service-review-side-ass11-1aminul.netlify.app/"
       },
       {
        name: "Resale Product",
        bullet: [
            "Users first create an account as a seller or a buyer.",
            " If a user is a seller he/she cannot buy any item and if he/she verifies by the admin he/she adds the product and advertise their item. Other users see all advertise items but cannot advertise without their personal itemsand cannot delete them.",
            "If the user is a buyer, he or she buys any item. And they paid by stripe for their buy item.This site has a dashboard, privatroute etc."
        ],
        Technology: "React.js. Firebase, tailwind css, daisy ui, node.js, mongodb.",
        link: "https://used-products-resale-client.web.app/"
       },
    ]
    return (
        <div className='my-32'>
             <h2 className="text-center text-2xl font-bold text-white">My Projects</h2>
            <div className='mt-12 grid lg:grid-cols-2 gap-6 w-[90%] mx-auto'>
                {
                    projects.map(project => 
                    <div className="card w-[90%] bg-slate-700 text-white shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">{project.name}</h2>
                     {
                     project.bullet.map(point=> <li className='text-xl text-justify'>{point}</li>)
                     }
                      <div className="card-actions justify-end">
                        <Link to={project.link}><button className="btn btn-primary">Live site</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Projects;