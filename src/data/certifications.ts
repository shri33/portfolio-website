export type Certification = {
  id: string
  name: string
  issuer: string
  issueDate: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
}

export const certifications: Certification[] = [
  {
    id: 'google-cybersecurity-cert',
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google (via Coursera)',
    issueDate: 'Sep 2024',
    credentialId: '67WWH2ZOY8VR',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/67WWH2ZOY8VR',
    skills: ['Cybersecurity', 'Network Security', 'Python', 'Linux', 'SQL']
  },
  {
    id: 'google-cybersecurity-specialization',
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    issueDate: 'Sep 2024',
    credentialId: '67WWH2ZOY8VR',
    credentialUrl: 'https://www.credly.com/badges/a51bc2ab-cc71-4703-95fb-ca003131962b/linked_in_profile'
  },
  {
    id: 'automate-cybersecurity-python',
    name: 'Automate Cybersecurity Tasks with Python',
    issuer: 'Google',
    issueDate: 'Aug 2024',
    credentialId: 'QJJ9QDHYKC7I',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/QJJ9QDHYKC7I',
    skills: ['Python (Programming Language)']
  },
  {
    id: 'detection-and-response',
    name: 'Sound the Alarm: Detection and Response',
    issuer: 'Google',
    issueDate: 'Jul 2024',
    credentialId: 'EH7YUFLBGL38',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EH7YUFLBGL38'
  },
  {
    id: 'assets-threats-vulnerabilities',
    name: 'Assets, Threats, and Vulnerabilities',
    issuer: 'Google',
    issueDate: 'Jun 2024',
    credentialId: '7JJN7F6Z3NTX',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7JJN7F6Z3NTX'
  },
  {
    id: 'linux-and-sql',
    name: 'Tools of the Trade: Linux and SQL',
    issuer: 'Google',
    issueDate: 'May 2024',
    credentialId: 'XRKQ94JXZXWG',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XRKQ94JXZXWG'
  },
  {
    id: 'networks-security',
    name: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google',
    issueDate: 'Apr 2024',
    credentialId: 'XYVJZ9VY9AS3',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XYVJZ9VY9AS3'
  },
  {
    id: 'manage-security-risks',
    name: 'Play It Safe: Manage Security Risks',
    issuer: 'Google',
    issueDate: 'Mar 2024',
    credentialId: 'MQ53M8Z86YUM',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/MQ53M8Z86YUM'
  },
  {
    id: 'intro-html5',
    name: 'Introduction to HTML5',
    issuer: 'Coursera',
    issueDate: 'Aug 2023',
    credentialId: 'PVXX6AVKW5YG'
  },
  {
    id: 'aws-s3-basics',
    name: 'AWS S3 Basics',
    issuer: 'Coursera',
    issueDate: 'Aug 2023',
    credentialId: 'W6M9TTZQSB9L',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/W6M9TTZQSB9L'
  },
  {
    id: 'modern-javascript-es6',
    name: 'Modern JavaScript: ES6 Basics',
    issuer: 'Coursera Project Network',
    issueDate: 'Aug 2023',
    credentialId: 'SGVZBAPPTD5R'
  },
  {
    id: 'foundations-cybersecurity',
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    issueDate: 'Feb 2023',
    credentialId: '3YMTLV3DVGN4',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/3YMTLV3DVGN4'
  },
  {
    id: 'computer-forensics-aff4',
    name: 'Computer Forensics File Formats: Why you Should be Using AFF4',
    issuer: 'Cybrary',
    issueDate: '2023',
    credentialId: 'CC-a90e19e9-4c8d-464e-8885-92388f4b912d',
    credentialUrl: 'https://app.cybrary.it/courses/api/certificate/CC-a90e19e9-4c8d-464e-8885-92388f4b912d/view'
  }
]
