import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/1_1_project_introduction">
              Get Started →
            </Link>
            <a
              className="button button--outline button--lg"
              href="https://github.com/jan-cieslik/clinic_edge"
              target="_blank"
              rel="noopener noreferrer">
              View on GitHub ⭐
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/img/ce_transparent.png" alt="CLINIC-EDGE Logo" />
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, imageSrc, imageAlt, index }) {
  return (
    <div className={clsx(styles.featureCard, styles[`featureCard${index % 2 === 0 ? 'Left' : 'Right'}`])}>
      <div className={styles.featureTextContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {imageSrc && (
        <div className={styles.featureImageContainer}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </div>
  );
}

function Features() {
  const features = [
    {
      title: '🎯 Interactive Case Selection',
      description:
        'Begin your clinical journey by selecting a cardinal symptom (abdominal pain, fever, vaginal bleeding, etc.) to load a realistic patient case with full demographics and vital signs.',
      imageSrc: '/img/screenshots/Screenshot_Case_Selection.png',
      imageAlt: 'Case Selection Interface'
    },
    {
      title: '💬 AI-Powered Patient Chat',
      description:
        'Engage with an intelligent patient simulator to explore medical history, current symptoms, and clinical context. Get realistic responses as you investigate each case.',
      imageSrc: '/img/screenshots/Screenshot_Chat_Loading.png',
      imageAlt: 'Patient Chat Interface'
    },
    {
      title: '🔬 Request Diagnostic Tests',
      description:
        'Order comprehensive diagnostic tests including lab work, imaging (CT, MRI, ultrasound), microbiology, and invasive procedures. Receive auto-generated results in real-time.',
      imageSrc: '/img/screenshots/Screenshot_Case_Request_Labs.png',
      imageAlt: 'Diagnostic Request Interface'
    },
    {
      title: '📋 Complete Case Management',
      description:
        'Assign ICD-10 diagnoses, add prescriptions, and document your clinical reasoning. Complete cases with supervisor handover documentation for comprehensive learning.',
      imageSrc: '/img/screenshots/Screenshot_Case_Dashboard.png',
      imageAlt: 'Case Management Interface'
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <Heading as="h2" className={styles.featuresTitle}>
          Key Features
        </Heading>
        <div className={styles.featuresList}>
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsContainer}>
        <Heading as="h2" className={styles.highlightsTitle}>
          Built for Medical Education
        </Heading>
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🧬</div>
            <h3>Dynamic & Static Cases</h3>
            <p>Generate infinite realistic cases from probabilistic templates, or use fixed cases for standardized teaching.</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>📊</div>
            <h3>Real-Time Data Generation</h3>
            <p>Lab values, imaging reports, and diagnostic findings generated on-demand for authentic clinical learning.</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🎓</div>
            <h3>Classroom Integration</h3>
            <p>Create and manage virtual classrooms, track student progress, and share curated cases across your institution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageGallery() {
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const screenshots = [
    { src: '/img/screenshots/Screenshot_Case_Selection.png', alt: 'Case Selection', title: 'Case Selection' },
    { src: '/img/screenshots/Screenshot_Case_Dashboard.png', alt: 'Case Dashboard', title: 'Case Dashboard' },
    { src: '/img/screenshots/Screenshot_Chat_Textbox.png', alt: 'Patient Chat', title: 'Patient Chat' },
    { src: '/img/screenshots/Screenshot_Case_Request.png', alt: 'Request Tests', title: 'Request Tests' },
    { src: '/img/screenshots/Screenshot_Case_Request_Labs.png', alt: 'Lab Orders', title: 'Lab Orders' },
    { src: '/img/screenshots/Screenshot_Case_Labs.png', alt: 'Lab Results', title: 'Lab Results' },
    { src: '/img/screenshots/Screenshot_Case_Report.png', alt: 'Case Report', title: 'Case Report' },
    { src: '/img/screenshots/Screenshot_Case_Diagnosis.png', alt: 'Diagnosis', title: 'Diagnosis' },
    { src: '/img/screenshots/Screenshot_Case_Medication.png', alt: 'Medications', title: 'Medications' },
    { src: '/img/screenshots/Screenshot_Case_Prescription_Write.png', alt: 'Write Prescription', title: 'Write Prescription' },
    { src: '/img/screenshots/Screenshot_Case_Presctiption_Read.png', alt: 'View Prescription', title: 'View Prescription' },
    { src: '/img/screenshots/Screenshot_Case_Handover_pre.png', alt: 'Handover Preview', title: 'Handover Preview' },
    { src: '/img/screenshots/Screenshot_Case_Handover.png', alt: 'Case Handover', title: 'Case Handover' },
  ];

  useEffect(() => {
    if (!activeScreenshot) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveScreenshot(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeScreenshot]);

  const handleOpen = (screenshot) => {
    setActiveScreenshot(screenshot);
  };

  const handleClose = () => {
    setActiveScreenshot(null);
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <Heading as="h2" className={styles.galleryTitle}>
          Platform Screenshots
        </Heading>
        <p className={styles.gallerySubtitle}>
          Explore the CLINIC-EDGE interface and discover how our platform brings medical education to life
        </p>
        <div className={styles.galleryGrid}>
          {screenshots.map((screenshot, idx) => (
            <button
              key={idx}
              type="button"
              className={styles.galleryItem}
              onClick={() => handleOpen(screenshot)}
              aria-label={`Open ${screenshot.title} screenshot`}>
              <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
              <div className={styles.galleryItemOverlay}>
                <span>{screenshot.title}</span>
              </div>
            </button>
          ))}
        </div>
        {activeScreenshot && (
          <div
            className={styles.galleryModalBackdrop}
            onClick={handleClose}
            role="presentation">
            <div
              className={styles.galleryModal}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={activeScreenshot.title}>
              <button
                type="button"
                className={styles.galleryModalClose}
                onClick={handleClose}
                aria-label="Close screenshot">
                ×
              </button>
              <img src={activeScreenshot.src} alt={activeScreenshot.alt} />
              <p className={styles.galleryModalCaption}>{activeScreenshot.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <Heading as="h2">Ready to Transform Medical Education?</Heading>
        <p>Explore our comprehensive documentation and tutorials to get started with CLINIC-EDGE today.</p>
        <div className={styles.ctaButtons}>
          <Link className="button button--primary button--lg" to="/docs/2_1_getting_started">
            Getting Started Guide
          </Link>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/jan-cieslik/clinic_edge"
            target="_blank"
            rel="noopener noreferrer">
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main className={styles.main}>
        <Features />
        <CoreHighlights />
        <ImageGallery />
        <CTA />
      </main>
    </Layout>
  );
}
