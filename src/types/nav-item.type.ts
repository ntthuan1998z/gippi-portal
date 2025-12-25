export interface NavItem {
  key: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}