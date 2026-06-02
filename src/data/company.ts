import type { Stat, Capability, Certification, TimelineEvent } from '../types';

export const companyStats: Stat[] = [
  { id: 'years', value: '30', label: 'Years of Experience', suffix: '+' },
  { id: 'supply', value: '86', label: 'Supplied to Global Brands', suffix: '%' },
  { id: 'countries', value: '50', label: 'Export Destinations', suffix: '+' },
  { id: 'capacity', value: '1.2M', label: 'Annual Production Capacity', suffix: '' }
];

export const companyCapabilities: Capability[] = [
  {
    id: 'cnc',
    title: 'Doosan Precision CNC',
    description: 'Four-axis precision machining centers delivering micron-level tolerances for critical automotive parts.',
    iconName: 'Cpu'
  },
  {
    id: 'cmm',
    title: 'Coordinate Measuring (CMM)',
    description: 'Advanced CMM validation to inspect and guarantee exact dimensional compliance across complex component geometries.',
    iconName: 'Sliders'
  },
  {
    id: 'robotic',
    title: 'FANUC Robotic Assembly',
    description: 'Automated assembly lines maximizing throughput, lowering defect rates, and securing component structural joints.',
    iconName: 'Workflow'
  },
  {
    id: 'honing',
    title: 'Precision Honing',
    description: 'Specialized cross-hatch honing on clutch cylinder interior walls to retain oil and extend seal life cycles.',
    iconName: 'Maximize'
  },
  {
    id: 'lab',
    title: 'ISO/IEC 17025 Lab Testing',
    description: 'Comprehensive testing including high-pressure burst, environmental, leak, and dynamic fatigue checks.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'digital',
    title: 'Digital Management & ERP',
    description: 'Enterprise resource planning tracking production workflows from raw materials to final shipping lanes.',
    iconName: 'Globe'
  }
];

export const companyCertifications: Certification[] = [
  {
    id: 'iatf',
    code: 'IATF 16949',
    name: 'Automotive Quality Management Standard',
    authority: 'TUV Rheinland / International Automotive Task Force',
    scope: 'Design and manufacturing of GDI fuel pumps, clutch cylinders, and drive shafts.',
    validity: 'Active / Recertified Annually',
    accentColor: 'brand-red'
  },
  {
    id: 'iso',
    code: 'ISO/IEC 17025',
    name: 'General Requirements for Testing Laboratories',
    authority: 'CNAS / International Laboratory Accreditation Cooperation',
    scope: 'In-house laboratory validation, dimensional calibration, and high-pressure fatigue tests.',
    validity: 'Active',
    accentColor: 'brand-blue'
  }
];

export const companyTimeline: TimelineEvent[] = [
  {
    year: '1996',
    title: 'Company Foundation',
    description: 'Established in Ruian, Zhejiang, China, specializing in high-stress drive shafts and mechanical joints.'
  },
  {
    year: '2004',
    title: 'Global Export Expansion',
    description: 'Obtained initial ISO 9001 standards and initiated direct export routes to European and North American aftermarket brands.'
  },
  {
    year: '2011',
    title: 'GDI Fuel Systems R&D',
    description: 'Invested in high-pressure fuel pump research & development, adding precision fuel delivery systems to the portfolio.'
  },
  {
    year: '2017',
    title: 'IATF 16949 Qualification',
    description: 'Achieved full accreditation under the automotive sector quality standard IATF 16949, qualifying as a Tier-1 level supplier partner.'
  },
  {
    year: '2021',
    title: 'ISO/IEC 17025 Lab Accreditation',
    description: 'Gained standard validation for the state-of-the-art testing lab, allowing certified in-house stress testing.'
  },
  {
    year: '2025',
    title: 'Robotic & Automation Upgrade',
    description: 'Renovated facility with robotic cells, advanced CNC lines, and cloud ERP systems for modern global scale.'
  }
];
