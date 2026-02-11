import { CategoryMap, Job, ResourceCategory, ApplicationStatus } from "./types";

export const CATEGORIES: CategoryMap = {
    all: "All Roles",
    sales: "Sales & Marketing",
    eng: "Engineering",
    it: "IT & Design",
    admin: "Accounting & HR",
    ops: "Operations & Safety"
};

export const STATUS_LABELS: Record<string, string> = {
    not_applied: "Not Applied",
    applied: "Applied",
    interviewing: "Interviewing",
    offered: "Offered",
    rejected: "Rejected"
};

export const STATUS_STYLES: Record<string, string> = {
    not_applied: "text-textMuted border-border bg-cardDark hover:border-textMuted",
    applied: "text-blue-400 border-blue-500/30 bg-blue-500/5 hover:border-blue-500 hover:bg-blue-500/10",
    interviewing: "text-amber-400 border-amber-500/30 bg-amber-500/5 hover:border-amber-500 hover:bg-amber-500/10",
    offered: "text-green-400 border-green-500/30 bg-green-500/5 hover:border-green-500 hover:bg-green-500/10",
    rejected: "text-red-400 border-red-500/30 bg-red-500/5 hover:border-red-500 hover:bg-red-500/10"
};

export const JOBS_DATA: Job[] = [
    // Sales & Marketing
    { id: "s1", title: "Marketing Executive (Sales & BD)", company: "Growth Corp", companyLogo: "https://ui-avatars.com/api/?name=Growth+Corp&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s2", title: "Sales Executive (Facilities Mgmt)", company: "Qatar FM Solutions", companyLogo: "https://ui-avatars.com/api/?name=Qatar+FM&background=random", cat: "sales", loc: "Qatar", link: "#" },
    { id: "s3", title: "Sales Executive (Safety & Hygiene)", company: "Eastern Safety", companyLogo: "https://ui-avatars.com/api/?name=Eastern+Safety&background=random", cat: "sales", loc: "Eastern Province", link: "#" },
    { id: "s4", title: "Sales Executive (Lighting)", company: "Lumina Electrical", companyLogo: "https://ui-avatars.com/api/?name=Lumina&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s5", title: "MEP Sales Executive", company: "Construct Sales", companyLogo: "https://ui-avatars.com/api/?name=Construct&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s6", title: "Marketing Executive (B2B)", company: "Saudi Industrial", companyLogo: "https://ui-avatars.com/api/?name=Saudi+Ind&background=random", cat: "sales", loc: "Saudi Arabia", link: "#" },
    { id: "s7", title: "Sales/BD Executive (Rental)", company: "EquipRent KSA", companyLogo: "https://ui-avatars.com/api/?name=Equip+Rent&background=random", cat: "sales", loc: "KSA", link: "#" },
    { id: "s8", title: "Sales Executive", company: "Bahrain Trading", companyLogo: "https://ui-avatars.com/api/?name=Bahrain+Trading&background=random", cat: "sales", loc: "Bahrain", link: "#" },
    { id: "s9", title: "Sales Executive (Field Sales)", company: "KSA Field Force", companyLogo: "https://ui-avatars.com/api/?name=Field+Force&background=random", cat: "sales", loc: "KSA", link: "#" },
    { id: "s10", title: "Sales Engineer (Design & Fit-Out)", company: "Interiors One", companyLogo: "https://ui-avatars.com/api/?name=Interiors&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s11", title: "Sales Engineer (HVAC Parts)", company: "Cooling Tech", companyLogo: "https://ui-avatars.com/api/?name=Cooling+Tech&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s12", title: "Senior Sales Manager (Electrical)", company: "Jeddah Power", companyLogo: "https://ui-avatars.com/api/?name=Jeddah+Power&background=random", cat: "sales", loc: "Jeddah", link: "#" },
    { id: "s13", title: "Sales Executive (HoReCa)", company: "Food Service Pro", companyLogo: "https://ui-avatars.com/api/?name=Food+Service&background=random", cat: "sales", loc: "GCC", link: "#" },
    { id: "s14", title: "Sales & Execution Leader", company: "MEP Leaders KSA", companyLogo: "https://ui-avatars.com/api/?name=MEP+Leaders&background=random", cat: "sales", loc: "KSA", link: "#" },
    { id: "s15", title: "Marketing Executive (Arabic)", company: "Bahrain Media", companyLogo: "https://ui-avatars.com/api/?name=Bahrain+Media&background=random", cat: "sales", loc: "Bahrain", link: "#" },
    { id: "s16", title: "Senior Marketing Executive", company: "Gulf Brands", companyLogo: "https://ui-avatars.com/api/?name=Gulf+Brands&background=random", cat: "sales", loc: "Bahrain", link: "#" },
    { id: "s17", title: "Customer Relationship Exec", company: "Client First", companyLogo: "https://ui-avatars.com/api/?name=Client+First&background=random", cat: "sales", loc: "GCC", link: "#" },

    // Engineering & Technical
    { id: "e1", title: "Senior Electrical Design Eng", company: "Saudi Design Grp", companyLogo: "https://ui-avatars.com/api/?name=Saudi+Design&background=random", cat: "eng", loc: "Saudi Arabia", link: "#" },
    { id: "e2", title: "Senior Electrical Engineer", company: "KSA Power", companyLogo: "https://ui-avatars.com/api/?name=KSA+Power&background=random", cat: "eng", loc: "KSA", link: "#" },
    { id: "e3", title: "Mechanical QC Engineer", company: "Quality Assurance Co", companyLogo: "https://ui-avatars.com/api/?name=QA+Co&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e4", title: "MEP Supervisor", company: "Site Masters", companyLogo: "https://ui-avatars.com/api/?name=Site+Masters&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e5", title: "MEP Design Engineer", company: "Engineering Hub", companyLogo: "https://ui-avatars.com/api/?name=Eng+Hub&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e6", title: "MEP Engineer", company: "Integrated MEP", companyLogo: "https://ui-avatars.com/api/?name=Integrated&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e7", title: "Freelance MEP Engineer", company: "Freelance KSA", companyLogo: "https://ui-avatars.com/api/?name=Freelance&background=random", cat: "eng", loc: "KSA", link: "#" },
    { id: "e8", title: "Architectural Engineer", company: "Industrial Arch", companyLogo: "https://ui-avatars.com/api/?name=Ind+Arch&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e9", title: "Estimation Engineer", company: "Jubail Industrial", companyLogo: "https://ui-avatars.com/api/?name=Jubail+Ind&background=random", cat: "eng", loc: "Jubail", link: "#" },
    { id: "e10", title: "Mechanical Estimation Eng", company: "Jubail Mech", companyLogo: "https://ui-avatars.com/api/?name=Jubail+Mech&background=random", cat: "eng", loc: "Jubail", link: "#" },
    { id: "e11", title: "Automation Engineer", company: "Smart Control", companyLogo: "https://ui-avatars.com/api/?name=Smart+Control&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e12", title: "Planning Engineer (P6)", company: "Prime Planners", companyLogo: "https://ui-avatars.com/api/?name=Prime+Planners&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e13", title: "Planning Engineer", company: "Construction Schedulers", companyLogo: "https://ui-avatars.com/api/?name=Const+Sched&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e14", title: "Mechanical Engineer (Steel)", company: "KSA Structures", companyLogo: "https://ui-avatars.com/api/?name=KSA+Struct&background=random", cat: "eng", loc: "KSA", link: "#" },
    { id: "e15", title: "C2 Electrical Engineer", company: "Certified Electric", companyLogo: "https://ui-avatars.com/api/?name=Cert+Electric&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e16", title: "Civil Site Engineer", company: "Urban Constructors", companyLogo: "https://ui-avatars.com/api/?name=Urban+Const&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e17", title: "Architect Site Engineer", company: "Villa Designs", companyLogo: "https://ui-avatars.com/api/?name=Villa+Designs&background=random", cat: "eng", loc: "GCC", link: "#" },
    { id: "e18", title: "Environmental Engineer", company: "Zuluf Eco", companyLogo: "https://ui-avatars.com/api/?name=Zuluf+Eco&background=random", cat: "eng", loc: "Zuluf", link: "#" },
    { id: "e19", title: "Project Engineer ELV", company: "Qatar Security", companyLogo: "https://ui-avatars.com/api/?name=Qatar+Sec&background=random", cat: "eng", loc: "Qatar", link: "#" },

    // IT & Design
    { id: "it1", title: "CRM Lead Developer", company: "TechFlow Remote", companyLogo: "https://ui-avatars.com/api/?name=TechFlow&background=random", cat: "it", loc: "Remote", link: "#" },
    { id: "it2", title: "CCTV Draftsman", company: "Qatar Surveillance", companyLogo: "https://ui-avatars.com/api/?name=Qatar+Surv&background=random", cat: "it", loc: "Qatar", link: "#" },
    { id: "it3", title: "BIM Manager", company: "Digital Construction", companyLogo: "https://ui-avatars.com/api/?name=Digi+Const&background=random", cat: "it", loc: "GCC", link: "#" },
    { id: "it4", title: "BIM Coordinator", company: "Smart BIM", companyLogo: "https://ui-avatars.com/api/?name=Smart+BIM&background=random", cat: "it", loc: "GCC", link: "#" },
    { id: "it5", title: "Design Engineer", company: "MultiDiscipline", companyLogo: "https://ui-avatars.com/api/?name=Multi&background=random", cat: "it", loc: "GCC", link: "#" },
    { id: "it6", title: "Site Architect", company: "OnSite Vision", companyLogo: "https://ui-avatars.com/api/?name=OnSite&background=random", cat: "it", loc: "GCC", link: "#" },
    { id: "it7", title: "Site Interior Architect", company: "Luxury Spaces", companyLogo: "https://ui-avatars.com/api/?name=Luxury&background=random", cat: "it", loc: "GCC", link: "#" },
    { id: "it8", title: "MEP Draftsman (Electrical)", company: "Qatar Drafting", companyLogo: "https://ui-avatars.com/api/?name=Qatar+Draft&background=random", cat: "it", loc: "Qatar", link: "#" },
    { id: "it9", title: "CAD/CAM Designer", company: "SolidWorks KSA", companyLogo: "https://ui-avatars.com/api/?name=SolidWorks&background=random", cat: "it", loc: "KSA", link: "#" },

    // Accounting & HR
    { id: "a1", title: "HR & Admin Executive", company: "Corporate Services", companyLogo: "https://ui-avatars.com/api/?name=Corp+Services&background=random", cat: "admin", loc: "GCC", link: "#" },
    { id: "a2", title: "Accountant", company: "Hidd Logistics", companyLogo: "https://ui-avatars.com/api/?name=Hidd+Log&background=random", cat: "admin", loc: "Hidd", link: "#" },
    { id: "a3", title: "Chief Accountant", company: "Rental Kings", companyLogo: "https://ui-avatars.com/api/?name=Rental+Kings&background=random", cat: "admin", loc: "KSA", link: "#" },
    { id: "a4", title: "Accountant", company: "Qatar Accounts", companyLogo: "https://ui-avatars.com/api/?name=Qatar+Acc&background=random", cat: "admin", loc: "Qatar", link: "#" },
    { id: "a5", title: "Tax Accountant", company: "Fiscal Consultants", companyLogo: "https://ui-avatars.com/api/?name=Fiscal&background=random", cat: "admin", loc: "GCC", link: "#" },
    { id: "a6", title: "Accountant", company: "Riyadh Trading", companyLogo: "https://ui-avatars.com/api/?name=Riyadh+Trad&background=random", cat: "admin", loc: "Riyadh", link: "#" },
    { id: "a7", title: "HR Assistant Cum Accountant", company: "Buiten Enterprises", companyLogo: "https://ui-avatars.com/api/?name=Buiten&background=random", cat: "admin", loc: "Buiten", link: "#" },
    { id: "a8", title: "MEP Draftsman Cum Accountant", company: "Hybrid Contracting", companyLogo: "https://ui-avatars.com/api/?name=Hybrid&background=random", cat: "admin", loc: "Qatar", link: "#" },
    { id: "a9", title: "Accounts Payable", company: "Bahrain Finance", companyLogo: "https://ui-avatars.com/api/?name=Bahrain+Fin&background=random", cat: "admin", loc: "Bahrain", link: "#" },

    // Operations & Safety
    { id: "o1", title: "Welding Inspector", company: "Jubail Steel", companyLogo: "https://ui-avatars.com/api/?name=Jubail+Steel&background=random", cat: "ops", loc: "Jubail", link: "#" },
    { id: "o2", title: "Electrician", company: "Power Crew", companyLogo: "https://ui-avatars.com/api/?name=Power+Crew&background=random", cat: "ops", loc: "GCC", link: "#" },
    { id: "o3", title: "Safety Officer (NEBOSH)", company: "Qatar Safe", companyLogo: "https://ui-avatars.com/api/?name=Qatar+Safe&background=random", cat: "ops", loc: "Qatar", link: "#" },
    { id: "o4", title: "Safety Engineer", company: "Bahrain Secure", companyLogo: "https://ui-avatars.com/api/?name=Bahrain+Sec&background=random", cat: "ops", loc: "Bahrain", link: "#" },
    { id: "o5", title: "Environmental Officer", company: "Eco Compliance", companyLogo: "https://ui-avatars.com/api/?name=Eco+Comp&background=random", cat: "ops", loc: "GCC", link: "#" },
    { id: "o6", title: "Operations Executive", company: "Air Freight Co", companyLogo: "https://ui-avatars.com/api/?name=Air+Freight&background=random", cat: "ops", loc: "GCC", link: "#" },
    { id: "o7", title: "Operations Coordinator", company: "Logistics Hub", companyLogo: "https://ui-avatars.com/api/?name=Logistics+Hub&background=random", cat: "ops", loc: "GCC", link: "#" },
    { id: "o8", title: "Warehouse Supervisor", company: "Furniture Depot", companyLogo: "https://ui-avatars.com/api/?name=Furn+Depot&background=random", cat: "ops", loc: "GCC", link: "#" },
    { id: "o9", title: "Factory Supervisor", company: "Jeddah Mfg", companyLogo: "https://ui-avatars.com/api/?name=Jeddah+Mfg&background=random", cat: "ops", loc: "Jeddah", link: "#" },
    { id: "o10", title: "MEP Technician", company: "Jeddah Maint", companyLogo: "https://ui-avatars.com/api/?name=Jeddah+Maint&background=random", cat: "ops", loc: "Jeddah", link: "#" }
];

export const PROFILE_IMG_URL = "https://picsum.photos/seed/waleed/200";

export const LEARNING_RESOURCES: ResourceCategory[] = [
    {
        id: "fullstack",
        title: "Full-Stack & Web Development",
        items: [
            { name: "freeCodeCamp", desc: "Full-stack curriculum with certifications.", url: "https://www.freecodecamp.org/", domain: "freecodecamp.org" },
            { name: "The Odin Project", desc: "Open-source full-stack web development path.", url: "https://www.theodinproject.com/", domain: "theodinproject.com" },
            { name: "App Academy Open", desc: "Complete bootcamp curriculum.", url: "https://open.appacademy.io/", domain: "appacademy.io" },
            { name: "Full Stack Open", desc: "Modern JavaScript development course.", url: "https://fullstackopen.com/en/", domain: "fullstackopen.com" },
            { name: "Scrimba", desc: "Interactive video player coding.", url: "https://scrimba.com/", domain: "scrimba.com" },
            { name: "W3Schools", desc: "Web dev tutorials with 'Try It Yourself'.", url: "https://www.w3schools.com/", domain: "w3schools.com" },
            { name: "MDN Web Docs", desc: "Comprehensive web platform docs.", url: "https://developer.mozilla.org/en-US/", domain: "developer.mozilla.org" },
            { name: "Django Girls", desc: "Beginner guide to building web apps.", url: "https://tutorial.djangogirls.org/en/", domain: "djangogirls.org" },
            { name: "OneMonth", desc: "30-day intensive web dev courses.", url: "https://onemonth.com/", domain: "onemonth.com" }
        ]
    },
    {
        id: "js",
        title: "JavaScript Essentials",
        items: [
            { name: "JavaScript.info", desc: "Modern JavaScript tutorial.", url: "https://javascript.info/", domain: "javascript.info" },
            { name: "Eloquent JavaScript", desc: "Free digital book with examples.", url: "https://eloquentjavascript.net/", domain: "eloquentjavascript.net" },
            { name: "JavaScript30", desc: "30-day vanilla JS coding challenge.", url: "https://javascript30.com/", domain: "javascript30.com" }
        ]
    },
    {
        id: "frontend",
        title: "Frontend & Design",
        items: [
            { name: "Frontend Masters", desc: "Free frontend fundamentals.", url: "https://frontendmasters.com/bootcamp/", domain: "frontendmasters.com" },
            { name: "CSS-Tricks", desc: "CSS layouts, Flexbox, and Grid guides.", url: "https://css-tricks.com/", domain: "css-tricks.com" }
        ]
    },
    {
        id: "datascience",
        title: "Data Science & AI",
        items: [
            { name: "Kaggle Learn", desc: "Micro-courses for data science.", url: "https://www.kaggle.com/learn", domain: "kaggle.com" },
            { name: "fast.ai", desc: "Free deep learning courses.", url: "https://www.fast.ai/", domain: "fast.ai" },
            { name: "DataCamp", desc: "Intro data science & analytics.", url: "https://www.datacamp.com/", domain: "datacamp.com" },
            { name: "IBM SkillsBuild", desc: "Free AI fundamentals training.", url: "https://skillsbuild.org/", domain: "skillsbuild.org" }
        ]
    },
    {
        id: "python",
        title: "Python Programming",
        items: [
            { name: "Google Python Class", desc: "Free class for Python beginners.", url: "https://developers.google.com/edu/python", domain: "google.com" },
            { name: "Automate the Boring Stuff", desc: "Practical Python scripting.", url: "https://automatetheboringstuff.com/", domain: "automatetheboringstuff.com" },
            { name: "Real Python", desc: "In-depth tutorials and articles.", url: "https://realpython.com/", domain: "realpython.com" }
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        items: [
            { name: "Microsoft Learn", desc: "Free Azure and AI courses.", url: "https://learn.microsoft.com/en-us/", domain: "microsoft.com" },
            { name: "AWS Skill Builder", desc: "AWS fundamentals training.", url: "https://aws.amazon.com/training/skill-builder/", domain: "aws.amazon.com" },
            { name: "Google Cloud Skills", desc: "Cloud computing fundamentals.", url: "https://cloud.google.com/training/", domain: "cloud.google.com" },
            { name: "Oracle University", desc: "OCI foundations courses.", url: "https://www.oracle.com/education/free-training/", domain: "oracle.com" },
            { name: "KodeKloud", desc: "Labs for DevOps & Kubernetes.", url: "https://kodekloud.com/", domain: "kodekloud.com" },
            { name: "Linux Foundation", desc: "Free Linux & cloud courses.", url: "https://training.linuxfoundation.org/free-courses/", domain: "linuxfoundation.org" }
        ]
    },
    {
        id: "sql",
        title: "SQL & Databases",
        items: [
            { name: "SQLZoo", desc: "Interactive SQL tutorials.", url: "https://sqlzoo.net/", domain: "sqlzoo.net" },
            { name: "SQLBolt", desc: "Step-by-step SQL lessons.", url: "https://sqlbolt.com/", domain: "sqlbolt.com" },
            { name: "Oracle Dev Gym", desc: "Free SQL course & quizzes.", url: "https://www.oracle.com/technical-resources/developer-tools/dev-gym/", domain: "oracle.com" }
        ]
    },
    {
        id: "cs",
        title: "CS Fundamentals",
        items: [
            { name: "Khan Academy", desc: "Programming & math basics.", url: "https://www.khanacademy.org/computing", domain: "khanacademy.org" },
            { name: "MIT OpenCourseWare", desc: "University CS courses.", url: "https://ocw.mit.edu/", domain: "mit.edu" }
        ]
    },
    {
        id: "practice",
        title: "Coding Practice",
        items: [
            { name: "Exercism", desc: "Code practice with mentoring.", url: "https://exercism.org/", domain: "exercism.org" },
            { name: "HackerRank", desc: "Coding challenges & interview prep.", url: "https://www.hackerrank.com/", domain: "hackerrank.com" },
            { name: "Edabit", desc: "Bite-sized coding challenges.", url: "https://edabit.com/", domain: "edabit.com" },
            { name: "CodingBat", desc: "Python and Java practice.", url: "https://codingbat.com/", domain: "codingbat.com" },
            { name: "Programiz", desc: "Tutorials & challenges.", url: "https://www.programiz.com/", domain: "programiz.com" }
        ]
    },
    {
        id: "roadmaps",
        title: "Career & Roadmaps",
        items: [
            { name: "Roadmap.sh", desc: "Visual guides for developer paths.", url: "https://roadmap.sh/", domain: "roadmap.sh" },
            { name: "Bento.io", desc: "Curated learning resources.", url: "https://bento.io/", domain: "bento.io" }
        ]
    }
];