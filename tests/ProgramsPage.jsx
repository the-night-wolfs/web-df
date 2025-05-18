import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import ProgramCard from './ProgramCard';
import './main-script'
import './ProgramsPage.css';
const ProgramsPage = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     easing: 'ease-in-out'
  //   });
  // }, []);

  const programs = [
    {
      id: 1,
      title: "Education Empowerment",
      description: "Providing quality education to underprivileged children through scholarships, learning materials, and educational infrastructure support.",
      icon: "graduationCap",
      image: "https://picsum.photos/400/300",
      category: "Education"
    },
    {
      id: 2,
      title: "Healthcare Initiatives",
      description: "Free health camps, medical support, and awareness programs to promote better health practices in rural communities.",
      icon: "heartbeat",
      image: "https://picsum.photos/400/300",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Women Empowerment",
      description: "Skill development, vocational training, and entrepreneurship programs to help women become financially independent.",
      icon: "venus",
      image: "https://picsum.photos/400/300",
      category: "Empowerment"
    },
    {
      id: 4,
      title: "Rural Development",
      description: "Infrastructure development, clean water initiatives, and sustainable farming practices to uplift rural communities.",
      icon: "fa-home",
      image: "https://picsum.photos/400/300",
      category: "Development"
    },
    {
      id: 5,
      title: "Environmental Conservation",
      description: "Tree plantation drives, waste management systems, and environmental awareness campaigns for a greener planet.",
      icon: "fa-tree",
      image: "https://picsum.photos/400/300",
      category: "Environment"
    },
    {
      id: 6,
      title: "Disaster Relief",
      description: "Immediate support and long-term rehabilitation for communities affected by natural disasters and calamities.",
      icon: "fa-hands-helping",
      image: "https://picsum.photos/400/300",
      category: "Relief"
    }
  ];

  const categories = ["All", "Education", "Healthcare", "Empowerment", "Development", "Environment", "Relief"];
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [filteredPrograms, setFilteredPrograms] = React.useState(programs);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredPrograms(programs);
    } else {
      setFilteredPrograms(programs.filter(program => program.category === category));
    }
  };

  return (
    <div className="programs-page">
      <div className="container">
        <div className="programs-header text-center" data-aos="fade-up">
          <h1 className="display-4 fw-bold">Our Programs</h1>
          <div className="header-separator"></div>
          <p className="lead">Discover the initiatives through which Durga Foundation is creating a positive impact in our communities</p>
        </div>

        <div className="filter-container" data-aos="fade-up" data-aos-delay="100">
          <div className="filter-wrap">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 programs-container">
          {filteredPrograms.map((program, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={program.id}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section text-center" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join us in our mission to create a more equitable and sustainable world</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Donate Now</button>
            <button className="btn btn-outline">Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;