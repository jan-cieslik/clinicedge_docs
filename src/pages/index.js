import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const audiences = [
  {
    title: 'For IT Administrators',
    path: 'it-administrators',
    description: 'Deploy, secure, integrate, and maintain your installation. Plan backups, updates, and responsible data operations.',
  },
  {
    title: 'For Course Administrators',
    path: 'course-administrators',
    description: 'Prepare cases, review content, publish course sequences, and organize registration, assessments, and studies.',
  },
  {
    title: 'For Course Staff',
    path: 'course-staff',
    description: 'Preview classroom content, supervise students, discuss test results, and lead shared clinical seminars.',
  },
  {
    title: 'For Students',
    path: 'students',
    description: 'Access your course, practice with simulated patients, complete activities, and find help when you need it.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Clinical simulation documentation"
      description="Practical ClinicEdge guides for clinical simulation: deployment, course administration, supervised teaching, and student learning.">
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>ClinicEdge documentation</p>
          <Heading as="h1">Clinical learning.<br />Clear guidance.</Heading>
          <p className={styles.lead}>
            From your first simulated patient to a complete teaching course.
            Find the right steps for your role, without the unnecessary technical detail.
          </p>
          <Link className="button button--primary button--lg" to="/docs/overview">Explore the documentation</Link>
        </div>
      </header>
      <main id="main-content" className="container">
        <section className={styles.section} aria-labelledby="audience-heading">
          <Heading as="h2" id="audience-heading">What would you like to do?</Heading>
          <div className={styles.grid}>
            {audiences.map(({title, path, description}) => (
              <Link className={styles.card} to={`/docs/${path}`} key={path}>
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
                <span className={styles.cardAction}>Open guide <span aria-hidden="true">&rarr;</span></span>
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.section} aria-labelledby="learning-heading">
          <Heading as="h2" id="learning-heading">One platform, connected learning activities</Heading>
          <div className={styles.features}>
            <div>
              <Heading as="h3">Clinical reasoning</Heading>
              <p>Practice patient history, diagnostic requests, interpretation, diagnoses, treatment, and handover in variable or fixed scenarios.</p>
              <Link to="/docs/students/clinical-case">Work through a case</Link>
            </div>
            <div>
              <Heading as="h3">Structured courses</Heading>
              <p>Combine clinical cases, surveys, tests, and interactive learning classes in published sequences with clear progression.</p>
              <Link to="/docs/course-administrators/sequences">Build a course sequence</Link>
            </div>
            <div>
              <Heading as="h3">Shared teaching</Heading>
              <p>Supervise classroom activity and lead group seminars with controlled release of findings and dedicated projection views.</p>
              <Link to="/docs/course-staff/group-seminars">Run a seminar</Link>
            </div>
          </div>
        </section>
        <aside className={styles.note}>
          <Heading as="h2">Looking for your institution's course?</Heading>
          <p>This is the public documentation, not a student login. Use the application link or LMS activity supplied by your course team.</p>
          <Link to="/docs/students/access">Understand your access options</Link>
        </aside>
      </main>
    </Layout>
  );
}
