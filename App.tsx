import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdSlot from './components/AdSlot';
import JobCard from './components/JobCard';
import ResourcesSection from './components/ResourcesSection';
import WebJobsSection from './components/WebJobsSection';
import { searchWebJobs } from './services/gemini';
import { CATEGORIES, JOBS_DATA } from './constants';
import { FilterType, ApplicationStatus, WebJob } from './types';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'curated' | 'web'>('curated');
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    
    // Web Search State
    const [webJobs, setWebJobs] = useState<WebJob[]>([]);
    const [webLoading, setWebLoading] = useState(false);
    const [webHasSearched, setWebHasSearched] = useState(false);

    // Local Storage for Status Tracking
    const [jobStatuses, setJobStatuses] = useState<Record<string, ApplicationStatus>>(() => {
        const saved = localStorage.getItem('linkUpJobs_statuses');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('linkUpJobs_statuses', JSON.stringify(jobStatuses));
    }, [jobStatuses]);

    const handleStatusChange = (jobId: string, newStatus: ApplicationStatus) => {
        setJobStatuses(prev => ({
            ...prev,
            [jobId]: newStatus
        }));
    };

    // Derived state for curated jobs
    const filteredCuratedJobs = useMemo(() => {
        return JOBS_DATA.filter(job => {
            const matchesCat = activeFilter === 'all' || job.cat === activeFilter;
            const normalizedQuery = searchQuery.toLowerCase();
            const matchesSearch = job.title.toLowerCase().includes(normalizedQuery) || 
                                  job.loc.toLowerCase().includes(normalizedQuery) ||
                                  job.company.toLowerCase().includes(normalizedQuery);
            return matchesCat && matchesSearch;
        });
    }, [searchQuery, activeFilter]);

    // Handler for global search
    const handleSearchSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        if (activeTab === 'web' || (activeTab === 'curated' && filteredCuratedJobs.length === 0 && searchQuery.trim())) {
            if (!searchQuery.trim()) return;
            setActiveTab('web');
            setWebLoading(true);
            setWebHasSearched(true);
            setWebJobs([]);

            const results = await searchWebJobs(searchQuery);
            setWebJobs(results);
            setWebLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    return (
        <div className="min-h-screen pb-20 relative overflow-x-hidden">
            
            {/* High Tech Animated Background */}
            <div className="tech-bg-container">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="tech-bg-video"
                >
                    {/* Blue/Purple Binary Rain Video */}
                    <source src="https://cdn.pixabay.com/video/2021/04/11/70796-538234676_large.mp4" type="video/mp4" />
                </video>
                <div className="tech-grid"></div>
                <div className="tech-particles"></div>
                
                {/* Overlay Vignette with Purple Hint to match "Blue and Purple" description */}
                <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-accentPurple/20 to-bgDark/80"></div>
                
                {/* Moving Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-[200%] w-full animate-scan pointer-events-none"></div>
                
                {/* Decorative Rotating Elements */}
                <div className="absolute top-[10%] right-[5%] w-96 h-96 border border-accent/10 rounded-full animate-spin-slow opacity-20 pointer-events-none dashed-border"></div>
                <div className="absolute top-[10%] right-[5%] w-64 h-64 border border-accent/5 rounded-full animate-spin-slow opacity-30 pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
            </div>

            <Navbar />

            <main className="max-w-6xl mx-auto px-6 relative z-10">
                <Hero />
                
                <AdSlot />

                {/* Controls Section */}
                <div className="flex flex-col gap-8 mb-12 items-center animate-fade-in relative" style={{ animationDelay: '0.1s' }}>
                    
                    {/* Glassy Tab Navigation */}
                    <div className="p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full relative flex shadow-2xl">
                        <button
                            onClick={() => setActiveTab('curated')}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                                activeTab === 'curated' ? 'text-white' : 'text-textMuted hover:text-white'
                            }`}
                        >
                            Curated Jobs
                        </button>
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 flex items-center gap-2 ${
                                activeTab === 'web' ? 'text-white' : 'text-textMuted hover:text-white'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${activeTab === 'web' ? 'text-white' : 'text-accent'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            AI Search
                        </button>
                        
                        {/* Sliding Background */}
                        <div 
                            className={`absolute top-1.5 bottom-1.5 bg-gradient-to-r from-accent to-accentPurple rounded-full shadow-lg shadow-accent/25 transition-all duration-300 ease-out ${
                                activeTab === 'curated' ? 'left-1.5 w-[145px]' : 'left-[155px] w-[140px]'
                            }`} 
                        />
                    </div>

                    {/* Search Bar - Command Palette Style */}
                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accentPurple rounded-2xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur"></div>
                        <div className="relative flex items-center bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                            <div className="pl-6 text-textMuted group-focus-within:text-accent transition-colors">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                placeholder={activeTab === 'web' ? "Ask AI to find jobs (e.g. 'Senior Python Dev in Riyadh')..." : "Filter by title, company, or location..."}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full py-5 px-4 bg-transparent text-white text-lg placeholder-textMuted focus:outline-none font-medium"
                            />
                            <div className="pr-2">
                                <button 
                                    onClick={(e) => handleSearchSubmit(e)}
                                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Filter Pills - Curated Only */}
                    {activeTab === 'curated' && (
                        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
                            {Object.entries(CATEGORIES).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key as FilterType)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                                        activeFilter === key 
                                        ? 'bg-accent/10 text-accent border-accent/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                                        : 'bg-cardDark/80 backdrop-blur-md text-textMuted border-border hover:border-textMuted hover:text-textMain'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px] mb-20">
                    {activeTab === 'curated' ? (
                        <>
                             {filteredCuratedJobs.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                                    {filteredCuratedJobs.map((job, index) => (
                                        <JobCard 
                                            key={job.id} 
                                            job={job} 
                                            categories={CATEGORIES} 
                                            delay={index * 0.05}
                                            status={jobStatuses[job.id] || 'not_applied'}
                                            onStatusChange={(newStatus) => handleStatusChange(job.id, newStatus)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-24 text-center rounded-3xl border border-dashed border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
                                    <div className="inline-flex p-4 rounded-full bg-white/5 mb-4">
                                        <svg className="w-8 h-8 text-textMuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">No curated jobs found</h3>
                                    <p className="text-textMuted mb-6">We couldn't find any matches in our database.</p>
                                    <button 
                                        onClick={() => handleSearchSubmit()}
                                        className="text-accent hover:text-white font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
                                    >
                                        Use AI Web Search
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <WebJobsSection 
                            jobs={webJobs} 
                            loading={webLoading} 
                            searched={webHasSearched} 
                        />
                    )}
                </div>

                <ResourcesSection />

            </main>

            <footer className="mt-20 border-t border-white/5 bg-[#020617]/90 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold text-white mb-1">WaleedLinkUp<span className="text-accent">Jobs</span></h2>
                        <p className="text-sm text-textMuted">Empowering careers in the GCC.</p>
                    </div>
                    <div className="text-sm text-textMuted text-center md:text-right">
                        <p>&copy; 2026 Waleed Hassan Saied. All rights reserved.</p>
                        <p className="opacity-60 text-xs mt-1">Designed with AI.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;