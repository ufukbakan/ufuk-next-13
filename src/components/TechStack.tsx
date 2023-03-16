import styles from '@/styles/About.module.css';
import GoldenTech from './common/GoldenTech';
import Tech from './common/Tech';

export default function () {
    return (
        <div className={styles['tech-stack']}>
            <h2>Tech Stack</h2>
            <h3>Languages</h3>
            <ol>
                <GoldenTech img='/icons/ts.png'>Typescript</GoldenTech>
                <GoldenTech img='/icons/js.png'>Javascript</GoldenTech>
                <GoldenTech img='/icons/java.png'>Java</GoldenTech>
                <GoldenTech img='/icons/css-3.png'>CSS</GoldenTech>
                <GoldenTech img='/icons/sql-server.png'>SQL</GoldenTech>
                <GoldenTech img='/icons/html-5.png'>HTML</GoldenTech>
                <Tech img='/icons/scala.png'>Scala</Tech>
                <Tech img='/icons/kotlin.svg'>Kotlin</Tech>
                <Tech img='/icons/cassandra.png'>CQL</Tech>
                <Tech img='/icons/c-sharp.png'>C#</Tech>
                <Tech img='/icons/python.png'>Python</Tech>
                <Tech img='/icons/php.png'>PHP</Tech>
                <Tech img='/icons/godot.png'>GDScript</Tech>
                <Tech img='/icons/prolog.png'>Prolog</Tech>
                <Tech img='/icons/haskell.png'>Haskell</Tech>
                <Tech img='/icons/ruby.png'>Ruby</Tech>
                <Tech img='/icons/c.png'>C</Tech>
                <Tech img='/icons/assembly.png'>x8086 Assembly</Tech>
            </ol>
            <h3>Backend</h3>
            <ol>
                <GoldenTech img='/icons/node.png'>Node.js</GoldenTech>
                <GoldenTech img='/icons/spring.png'>Spring Boot</GoldenTech>
                <GoldenTech img='/icons/bootpress.png'>Bootpress</GoldenTech>
                <GoldenTech img='/icons/express.png'>Express.js</GoldenTech>
                <GoldenTech img='/icons/nextjs.png'>Next.js</GoldenTech>
                <GoldenTech img='/icons/fastify.png'>Fastify</GoldenTech>
                <Tech img='/icons/nestjs.png'>Nest.js</Tech>
                <Tech img='/icons/kafka.svg'>Kafka</Tech>
                <Tech img='/icons/zookeeper.png'>Zookeeper</Tech>
                <Tech img='/icons/spring-cloud.svg'>Eureka</Tech>
            </ol>
            <h3>Data</h3>
            <ol>
                <GoldenTech img='/icons/spring-data.png'>JPA</GoldenTech>
                <GoldenTech img='/icons/prisma.svg'>Prisma</GoldenTech>
                <GoldenTech img='/icons/postgres.png'>PostgreSQL</GoldenTech>
                <Tech img='/icons/mysql.png'>MySQL</Tech>
                <Tech img='/icons/oracle-db.png'>Oracle</Tech>
                <Tech img='/icons/redis.png'>Redis</Tech>
                <Tech img='/icons/mongodb.svg'>MongoDB</Tech>
                <Tech img='/icons/cassandra.png'>Cassandra</Tech>
                <Tech img='/icons/typeorm.png'>TypeORM</Tech>
                <Tech img='/icons/tensorflow.svg'>Tensorflow</Tech>
                <Tech img='/icons/keras.svg'>Keras</Tech>
                <Tech img='/icons/scikit.png'>Scikitlearn</Tech>
                <Tech img='/icons/hadoop.png'>Hadoop</Tech>
                <Tech img='/icons/grafana.png'>Grafana</Tech>
            </ol>
            <h3>Frontend</h3>
            <ol>
                <GoldenTech img='/icons/vitejs.svg'>Vite.js</GoldenTech>
                <GoldenTech img='/icons/react.svg'>React</GoldenTech>
                <GoldenTech img='/icons/electron.svg'>Electron.js</GoldenTech>
                <Tech img='/icons/preact.svg'>Preact</Tech>
                <Tech img='/icons/solid.svg'>Solid</Tech>
                <Tech img='/icons/threejs.svg'>Three.js</Tech>
                <Tech img='/icons/jquery.png'>JQuery</Tech>
                <Tech img='/icons/svelte.svg'>Svelte</Tech>
            </ol>
            <h3>QA</h3>
            <ol>
                <GoldenTech img='/icons/junit.png'>JUnit</GoldenTech>
                <GoldenTech img='/icons/mockito.png'>Mockito</GoldenTech>
                <GoldenTech img='/icons/boottest.svg'>Boottest</GoldenTech>
                <GoldenTech img='/icons/vitest.svg'>Vitest</GoldenTech>
                <GoldenTech img='/icons/jest.svg'>Jest</GoldenTech>
                <GoldenTech img='/icons/mocha.svg'>Mocha</GoldenTech>
                <GoldenTech img='/icons/chai.png'>Chai</GoldenTech>
                <GoldenTech img='/icons/selenium.png'>Selenium</GoldenTech>
                <Tech img='/icons/sinon.png'>Sinon</Tech>
                <Tech img='/icons/eslint.png'>ESLint</Tech>
                <Tech img='/icons/sonarlint.svg'>SonarLint</Tech>
            </ol>
            <h3>CI/CD</h3>
            <ol>
                <GoldenTech img='/icons/gitlab.png'>Gitlab</GoldenTech>
                <GoldenTech img='/icons/jira.svg'>Jira</GoldenTech>
                <GoldenTech img='/icons/github.svg'>Github</GoldenTech>
                <GoldenTech img='/icons/youtrack.svg'>YouTrack</GoldenTech>
                <Tech img='/icons/trello.png'>Trello</Tech>
            </ol>
            <h3>Deployment</h3>
            <ol>
                <GoldenTech img='/icons/aws.png'>AWS</GoldenTech>
                <GoldenTech img='/icons/docker.png'>Docker</GoldenTech>
            </ol>
            <h3>Graphics</h3>
            <ol>
                <GoldenTech img='/icons/blender.svg'>Blender</GoldenTech>
                <GoldenTech img='/icons/photoshop.svg'>Photoshop</GoldenTech>
                <GoldenTech img='/icons/illustrator.png'>Illustrator</GoldenTech>
                <Tech img='/icons/figma.png'>Figma</Tech>
            </ol>
            <h3>OS</h3>
            <ol>
                <GoldenTech img='/icons/windows.png'>Windows</GoldenTech>
                <GoldenTech img='/icons/linux.svg'>Linux</GoldenTech>
            </ol>
        </div>
    )
}