import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <section className="row animate__animated animate__fadeIn">
        <h1>Alejandro Salguero Quirós</h1>
        <h3>Software Developer</h3>
        <div className="col">
          <p>
            Hey!👋 I am Alejandro, 22 years old working in the IT world as a
            software developer, I am currently working in a costarican pyme
            where we provide POS software to small and medium costarican
            companys. In my life i like to spend time learnign and improving my
            technical and soft skills, rigth now I am learning web technologies
            such as: react, angular, sass, nodeJS and Xamarin.Forms. Thank you
            for visiting this web page. If you want more information please send
            me an email to alejandrosalgueroq@hotmail.com. 😄
          </p>
        </div>
      </section>
      <hr />
      <section className="row animate__animated animate__fadeIn">
        <h3>Working Experience 🏢</h3>
        <div className="col">
          <div className="mt-3">
            <h4>FullStack Developer</h4>
            <span>Guadalupe, Costa Rica</span>
            <br />
            <span>May 2018 - Currently</span>
            <br />
            <span>Grupo Argus</span>
            <br />
            <ul className="list-unstyled">
              <li>
                Create intuitive and easy-to-use user interfaces. Create and
                document reusable code.
              </li>
              <li>
                Proactively participate in meetings and give ideas to improve
                the way we write code and create new projects. Consistently meet
                deadlines each week.
              </li>
              <li>
                I participated in the creation of new products from initial idea
                to production rollout.
              </li>
              <li>
                Constantly learning new technologies and how they can improve
                the IT and sales team. Used technologies: Visual Basic, C#,
                .NET, JavaScript, NodeJS, Angular, SQL, SQLServer, PostgreSQL.
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <h4>Software Support Engineer</h4>
            <span>Tres Ríos, Costa Rica</span>
            <br />
            <span>January 2018 - May 2018</span>
            <br />
            <span>Tek Experts</span>
            <br />
            <ul className="list-unstyled">
              <li>
                Act as the primary technical contact delivering IT support and
                problem-solving solutions to corporate customers working with
                Data Protector.
              </li>
              <li>
                Manage critical issues by setting customer expectations
                attending to corresponding SLA's and KPI's, by following
                knowledge base articles and expertise on the role
              </li>
              <li>
                Support to different technologies and environments, integrations
                and troubleshooting on issues related to Data Protector. Mostly
                on Windows server, Windows SQL server, UNIX, LINUX environments,
                ORACLE, VMWare, etc.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />

      <section className="row animate__animated animate__fadeIn">
        <div className="col-md-6 col-sm-12">
          <h3>Education 🎓</h3>

          <div className="mt-3">
            <h4>Bachelor’s Degree Computer Science</h4>
            <span>Latin American University of Science and Technology</span>
            <br />
            <span>January 2018 - 2021</span>
          </div>

          <div className="mt-3">
            <h4>High School Diploma</h4>
            <span>Don Bosco Technical High School</span>
            <br />
            <span>January 2012 - December 2017</span>
          </div>

          <div className="mt-3 mb-3">
            <h4>Computers Science Technician</h4>
            <span>Don Bosco Technical High School</span>
            <br />
            <span>January 2015 - December 2017</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <h3>Skills 🧠</h3>
          <ul>
            <li>Detail Oriented</li>
            <li>Problem Solving</li>
            <li>Empathiy</li>
            <li>Self-Sufficient</li>
            <li>Web Development</li>
            <li>FullStack Development</li>
            <li>Persistent</li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="row animate__animated animate__fadeIn">
        <h3>References 🗣️</h3>
        <div className="col">
          <h4>Hanzel Jara Saborío</h4>
          <span>Projects Director</span>
          <br />
          {/*<span>email: hjara@grupoargus.co.cr</span>
          <br />
          <span>phone: +506 60470809</span>*/}
        </div>
      </section>
    </>
  );
};
