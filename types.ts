export interface Job {
    id: string;
    title: string;
    company: string;
    companyLogo: string;
    cat: string;
    loc: string;
    link: string;
}

export interface WebJob {
    title: string;
    company: string;
    location: string;
    url: string;
    description: string;
}

export interface CategoryMap {
    [key: string]: string;
}

export type FilterType = 'all' | 'sales' | 'eng' | 'it' | 'admin' | 'ops';

export type ApplicationStatus = 'not_applied' | 'applied' | 'interviewing' | 'offered' | 'rejected';

export interface ResourceItem {
    name: string;
    desc: string;
    url: string;
    domain: string;
}

export interface ResourceCategory {
    id: string;
    title: string;
    items: ResourceItem[];
}