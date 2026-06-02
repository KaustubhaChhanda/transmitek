export type ProductCategoryType = 'propeller-shafts' | 'gdi-pumps' | 'master-cylinders' | 'slave-cylinders';

export interface Product {
  id: string;
  category: ProductCategoryType;
  name: string;
  image: string;
  specifications: string[];
  applications: string[];
  partNumbers?: string[];
  features?: string[];
  details?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering helper
}

export interface Certification {
  id: string;
  code: string;
  name: string;
  authority: string;
  scope: string;
  validity: string;
  accentColor: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
