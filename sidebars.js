// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ceSidebar: [
    'overview',
    {
      type: 'category',
      label: 'For IT Administrators',
      link: {type: 'doc', id: 'it-administrators/index'},
      items: ['architecture', 'installation', 'configuration', 'accounts-security', 'lti', 'operations', 'backups', 'data-governance'].map((id) => `it-administrators/${id}`),
    },
    {
      type: 'category',
      label: 'For Course Administrators',
      link: {type: 'doc', id: 'course-administrators/index'},
      items: ['permissions', 'cases', 'publication', 'reference-content', 'classrooms', 'sequences', 'assessments', 'learning-classes', 'seminar-authoring', 'access-registration', 'studies', 'results-support'].map((id) => `course-administrators/${id}`),
    },
    {
      type: 'category',
      label: 'For Course Staff',
      link: {type: 'doc', id: 'course-staff/index'},
      items: ['supervision', 'test-presentation', 'group-seminars', 'projection'].map((id) => `course-staff/${id}`),
    },
    {
      type: 'category',
      label: 'For Students',
      link: {type: 'doc', id: 'students/index'},
      items: ['access', 'dashboard', 'clinical-case', 'course-sequence', 'assessments', 'group-seminars', 'case-creation', 'privacy-help'].map((id) => `students/${id}`),
    },
  ],
};
export default sidebars;
