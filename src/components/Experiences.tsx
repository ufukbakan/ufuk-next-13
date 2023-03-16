import styles from '@/styles/Sections.module.css';
import BackButton from './common/BackButton';

export default function () {
    return (
        <div className={styles['section']} id="experiences">
            <BackButton />
            <h2>Experiences</h2>
            <ol className={styles['experience-list']}>
                <li>
                    <img src='/icons/freelancer.svg' alt='icon of freelancer.com'/>
                    <h4>Web developer at Freelancer.com (January 2019 - June 2019)</h4>
                    <p>I worked as a freelance designer & developer; designed web pages and logos, developed mail templates and web sites with Html, Css & Javascript.</p>
                </li>
                <li>
                    <h4>Summer Intern at TEST STB (June 2020 - August 2020)</h4>
                    <p>I worked on a selenium project with other interns. The project was a Python Selenium bot for testing
                        the frontend of demo web site of Yetenek Kapısı (talentgate.org) which is supported by government. Project succeeded to
                        act like a cypress integration test with 100% coverage.
                    </p>
                </li>
                <li>
                    <h4>Web developer at Uzmankirala.com (July 2021 - August 2021)</h4>
                    <p>I worked as a freelance web developer, developed web sites with React.js, JQuery, Php & Wordpress.</p>
                </li>
                <li>
                    <h4>Summer Intern at TÜBİTAK BİLGEM YTE (June 2021 - August 2021)</h4>
                    <p>I got Linux, PostgreSQL, Docker, Java, Spring Boot, JPA, Hibernate, Persistance, Clean Code,
                        Javascript and React.js courses and developed a Spring Boot Web project alongside React + Vite.js
                        web interface. The final project has user role based web interfaces, administration panels, user panels, and statistic graphs.
                    </p>
                </li>
                <li>
                    <h4>Software Engineer at TÜBİTAK BİLGEM YTE (August 2021 - August 2022)</h4>
                    <p>I worked as a remote full stack software developer for the project Turkey's Treasury and Financial
                        management system which worths billions of dolars and consists of dozens of microservices.
                        SpringBoot framework is primarly used in this job. I gained experience with working within an agile
                        environment. Using Atlassian continious integration tools like Jira was a daily routine. I developed
                        both backend with Java and PostgreSQL and frontend with ember and handlebars, for government's
                        financial system and wrote unit and integration tests to achieve 100% coverage. </p>
                </li>
                <li>
                    <h4>Software Engineer at T.C. İçişleri Bakanlığı (August 2022 - Now)</h4>
                    <p>I'm currently developing web services for a distributed big data environment with HDFS file system.
                        I'm developing React + Typescript frontends alongside Java Spring Boot and Express.js backends and
                        Spark jobs written in Scala. I've written unit and integration test for both frontend and backend with 90+% coverage.</p>
                </li>
            </ol>
        </div>
    )
}