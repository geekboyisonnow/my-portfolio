import './App.css'
// import '.css/styles.css'

function Body() {
  return (
    <div className='App'>
      <body id='page-top'>
        {/* <div id='root'></div> */}
        <nav
          class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
          id='sideNav'>
          <a
            class='navbar-brand js-scroll-trigger'
            href='#page-top'>
            <span class='d-block d-lg-none'>
              Kenny Cannon
            </span>
            <span class='d-none d-lg-block'>
              <img
                class='img-fluid img-profile rounded-circle mx-auto mb-2'
                src='src/img/LizMe.jpg'
                alt='Kenny Cannon'
              />
            </span>
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='collapse navbar-collapse'
            id='navbarSupportedContent'>
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#experience'>
                  Experience
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#education'>
                  Education
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#skills'>
                  Skills
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#interests'>
                  Interests
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link js-scroll-trigger'
                  href='#awards'>
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Page Content--> */}
        <div class='container-fluid p-0'>
          {/* <!-- About--> */}
          <section class='resume-section' id='about'>
            <div class='resume-section-content'>
              <h1 class='mb-0'>
                Kenny
                <span id='text-primary'>Cannon</span>
              </h1>
              <div class='subheading mb-5'>
                1415 Main Street Lot 62 · Dunedin, FL 34698
                · (727) 686-4921
                <br />
                <a href='mailto:kennethfcannon@gmail.com'>
                  kennethfcannon@gmail.com
                </a>
              </div>
              <p class='lead mb-5'>
                All my previous roles have been focused on
                working together on a team to solve
                problems.&nbsp;&nbsp; I find success and
                thrive in a work environment that is team
                oriented.&nbsp;&nbsp; I am adaptable,
                appreciate learning from others, and open to
                mentoring.&nbsp;&nbsp; Building
                relationships with peers and getting a
                better understanding of the business is
                important to me.&nbsp;&nbsp; A good fit for
                me would be a company where I can learn and
                grow.
                <br />
              </p>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 512 512'
                class='icon'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'></path>
              </svg>

              <div class='social-icons'>
                <a class='social-icon' href='#'>
                  <i class='fab fa-linkedin-in'></i>
                </a>
                <a class='social-icon' href='#'>
                  <i class='fab fa-github'></i>
                </a>
                <a class='social-icon' href='#'>
                  <i class='fab fa-behance'></i>
                </a>
                <a class='social-icon' href='#'>
                  <i class='fa fa-link'></i>
                </a>
              </div>
            </div>
          </section>
          <hr class='m-0' />
          {/* <!-- Experience--> */}
          <section class='resume-section' id='experience'>
            <div class='resume-section-content'>
              <h2 class='mb-5'>Experience</h2>
              <div class='d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    IT Developer HR Systems
                  </h3>
                  <div class='subheading mb-3'>
                    Ashley Furniture Industries
                  </div>
                  <p>
                    Successfully assisted our Lead Developer
                    in helping to support integrations,
                    mastered the vast landscape of Ashley’s
                    software ecosystem while learning new
                    software concepts including our legacy
                    code written in Visual Basic and C#
                    .Net.&nbsp; Worked directly with our
                    Lead Developer and BSA to identify
                    solutions for our HR business partners
                    while providing support for various
                    integrations between our systems and
                    vendors.&nbsp; Became an integral part
                    of the team by working one on one with
                    key business partners to identify and
                    fix daily discrepancies between new and
                    legacy systems.
                  </p>
                  <p>
                    <em>
                      * Unfortunately my position along with
                      hundreds of others was eliminated due
                      to the pandemic.
                    </em>
                  </p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'>
                    November 2019 - May 2020 *
                  </span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    Spider Team Computer Programmer
                  </h3>
                  <div class='subheading mb-3'>
                    Geographic Solutions
                  </div>
                  <p>
                    Built, tested, & maintained web crawler
                    bots utilizing the Design Studio
                    application, by Kapow, to spider sites
                    and gather various types of employment
                    data.&nbsp; Responsible for successfully
                    investigating each unique website by
                    reading its JavaScript, JSON, & HTML and
                    writing code using Regex to extract
                    employment data.
                  </p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'>
                    June 2019 - November 2019
                  </span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    Sitecore Developer Intern
                  </h3>
                  <div class='subheading mb-3'>Ironman</div>
                  <p>
                    Successfully utilized Sitecore v.8
                    software to create, edit, & relocate
                    HTML5 & CSS3 content code from Ironman’s
                    LIVE WordPress website to a new Sitecore
                    site using best practices in an
                    efficient timely manner.&nbsp;
                    Identified and corrected any errors
                    uncovered by testing as well as refer
                    all issues or problems to appropriate
                    personnel for correction.
                  </p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'>
                    June 2018 - August 2018
                  </span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    WordPress Developer Intern
                  </h3>
                  <div class='subheading mb-3'>
                    Thirteen05 Creative
                  </div>
                  <p>
                    Designed & developed a visually stunning
                    mid-tier e-commerce WordPress site from
                    concept to development, including
                    designing graphics and creating site
                    content.
                  </p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'>
                    February 2017 - April 2017
                  </span>
                </div>
              </div>
            </div>
          </section>
          <hr class='m-0' />
          {/* <!-- Education--> */}
          <section class='resume-section' id='education'>
            <div class='resume-section-content'>
              <h2 class='mb-5'>Education</h2>
              <div class='d-flex flex-column flex-md-row justify-content-between mb-5'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    Suncoast Developers Guild
                  </h3>
                  <div class='subheading mb-3'>
                    Full-Stack Software Development
                    Certificate
                  </div>
                  <p>
                    SDG is an immersive and rigorous,
                    full-time program that prepared me to
                    become a successful Full-Stack Developer
                    by learning the fundamental of Object
                    Oriented Programming including HTML5,
                    CSS3, Vanilla JavaScript, ReactJS, SQL,
                    PostgreSQL, and Ruby on Rails.
                  </p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'>
                    October 2018 - January 2019
                  </span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    St. Petersburg College
                  </h3>
                  <span class='mcl'>Fall 2017</span>
                  <div class='subheading mb-3'>
                    Associate of Science - Digital Art,
                    Digital Media, Interactive Web Design, &
                    Advanced Video Production
                  </div>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'></span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    St. Petersburg College
                  </h3>
                  <span class='mcl'>Summer 2017</span>
                  <div class='subheading mb-3'>
                    Associate of Arts
                  </div>
                  <p></p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'></span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    St. Petersburg College
                  </h3>
                  <span class='mcl'>
                    Expected Graduation, Spring 2021
                  </span>
                  <div class='subheading mb-3'>
                    Web Development Certificate
                  </div>
                  <p></p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'></span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    St. Petersburg College
                  </h3>
                  <span class='mcl'>
                    Expected Graduation, Spring 2021
                  </span>
                  <div class='subheading mb-3'>
                    Computer Programming Specialist
                    Certificate
                  </div>
                  <p></p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'></span>
                </div>
              </div>
              <div class='d-flex flex-column flex-md-row justify-content-between'>
                <div class='flex-grow-1'>
                  <h3 class='mb-0' id='job-title'>
                    St. Petersburg College
                  </h3>
                  <span class='mcl'>
                    Expected Graduation, Summer 2022
                  </span>
                  <div class='subheading mb-3'>
                    Bachelor of Applied Science - Technology
                    & Business Management - Software
                    Programming
                  </div>
                  <p></p>
                </div>
                <div class='flex-shrink-0'>
                  <span class='text-primary'></span>
                </div>
              </div>
            </div>
          </section>
          <hr class='m-0' />
          {/* <!-- Skills--> */}
          <section class='resume-section' id='skills'>
            <div class='resume-section-content'>
              <h2 class='mb-5'>Skills</h2>
              <div class='subheading mb-3'>
                Programming Languages & Tools
              </div>
              <ul class='list-inline dev-icons'>
                <li class='list-inline-item'>
                  <i class='fab fa-html5'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-css3-alt'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-js-square'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-angular'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-react'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-node-js'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-sass'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-less'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-wordpress'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-gulp'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-grunt'></i>
                </li>
                <li class='list-inline-item'>
                  <i class='fab fa-npm'></i>
                </li>
              </ul>
              <div class='subheading mb-3'>Workflow</div>
              <ul class='fa-ul mb-0'>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-check'></i>
                  </span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-check'></i>
                  </span>
                  Cross Browser Testing & Debugging
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-check'></i>
                  </span>
                  Cross Functional Teams
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-check'></i>
                  </span>
                  Agile Development & Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr class='m-0' />
          {/* <!-- Interests--> */}
          <section class='resume-section' id='interests'>
            <div class='resume-section-content'>
              <h2 class='mb-5'>Interests</h2>
              <p>
                Apart from being a web developer, I enjoy
                most of my time being outdoors. In the
                winter, I am an avid skier and novice ice
                climber. During the warmer months here in
                Colorado, I enjoy mountain biking, free
                climbing, and kayaking.
              </p>
              <p class='mb-0'>
                When forced indoors, I follow a number of
                sci-fi and fantasy genre movies and
                television shows, I am an aspiring chef, and
                I spend a large amount of my free time
                exploring the latest technology advancements
                in the front-end web development world.
              </p>
            </div>
          </section>
          <hr class='m-0' />
          {/* <!-- Awards--> */}
          <section class='resume-section' id='awards'>
            <div class='resume-section-content'>
              <h2 class='mb-5'>Awards & Certifications</h2>
              <ul class='fa-ul mb-0'>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  Google Analytics Certified Developer
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  Mobile Web Specialist - Google
                  Certification
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder -
                  Emerging Tech Competition 2009
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder -
                  Adobe Creative Jam 2008 (UI Design
                  Category)
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  2<sup>nd</sup>
                  Place - University of Colorado Boulder -
                  Emerging Tech Competition 2008
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  1<sup>st</sup>
                  Place - James Buchanan High School -
                  Hackathon 2006
                </li>
                <li>
                  <span class='fa-li'>
                    <i class='fas fa-trophy text-warning'></i>
                  </span>
                  3<sup>rd</sup>
                  Place - James Buchanan High School -
                  Hackathon 2005
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/*
  <!-- Bootstrap core JS-->
  */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js'></script>
        {/*
  <!-- Third party plugin JS-->
  */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'></script>
        {/*
  <!-- Core theme JS-->
  */}
        <script src='scripts.js'></script>
      </body>
    </div>
  )
}

export default Body
