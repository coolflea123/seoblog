import Layout from '../components/Layout';
import Link from 'next/link';
import { Accordion} from 'react-bootstrap';

const Index = () => {
    return (
      <Layout>
      <head>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossOrigin="anonymous"
      />
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      />
      <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
      rel="stylesheet"
      />
      <link rel="stylesheet" href="/static/css/styles.css" />
      <link rel="stylesheet" href="/static/css/style.css" />
      <title>Frontend Bootcamp</title>
      </head>
      <body>
      <section
      className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
    >
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Become a <span className="text-warning"> Web Developer </span></h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <Link href="/signin">
            <button
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start The Enrollment
            </button>
            </Link>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src="/image/showcase.svg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

          <div className="input-group news-input">
          <Link href="/signup">
            <button className="btn btn-dark btn-lg" type="button" data-bs-toggle="modal"
              data-bs-target="#enroll">Sign up today for more surprise!</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
    <section className="p-5">
    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        `url(/image/doggy1.jpg)`
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">LittleQ</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/littleq">
                                        <a>
                                            <h3 className="h1">Little Q</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">The world's most popular frontend web development library</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        `url(/image/doggy4.jpg)`
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">FatDog</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/fatdog">
                                        <a>
                                            <h3 className="h1">Fat Dog</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        The worlds most popular backend development tool for JavaScript Ninjas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        `url(/image/doggy3.jpg)`
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">MIBDog</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/mibdog">
                                        <a>
                                            <h3 className="h1">MIB Dog</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">A Production ready web framework for building SEO React apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>

    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
          <div className="col-md">
            <img src="/image/react.svg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  
  <section id="questions" className="p-5">
  <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
  <div>
  <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Where exactly are you located?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How much does it cost to attend?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What do I need to Know?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>How Do I sign up?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Do you help me find a job?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
</div>
</section>

    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Sara Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2021 Frontend Bootcamp</p>

        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>

  


    </body>
 
        </Layout>
    );
};

export default Index;
