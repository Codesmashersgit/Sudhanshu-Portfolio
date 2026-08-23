export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export interface FigurineItem {
  id: string;
  name: string;
  subtitle: string;
  edition: string;
  imageUrl: string;
  accentColor: string;
  glowColor: string;
  polycount: string;
  engine: string;
  description: string;
  bgHeading: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Client' | 'Personal';
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  tagline?: string;
  tools?: string[];
  liveUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

