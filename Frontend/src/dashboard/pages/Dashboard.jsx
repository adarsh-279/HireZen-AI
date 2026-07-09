import React from 'react'
import Navbar from '../../ui/components/Navbar.jsx'
import ResumeAnalysisCard from '../components/ResumeAnalysisCard.jsx';
import RecentActivityCard from '../components/RecentActivityCard.jsx';
import PerformanceCard from '../components/PerformanceCard.jsx';
import Footer from '../../ui/components/Footer.jsx';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="p-15 space-y-8">
                <div>
                    <h1 className="text-4xl font-bold">
                        Welcome back, <span className="text-white">User</span>
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Ready to level up? Your career optimization journey can be increased by 72%. Ready for your next milestone?
                    </p>
                </div>

                <div className="w-full flex gap-8">
                    <ResumeAnalysisCard />
                    <PerformanceCard />
                </div>

                <div>
                    <RecentActivityCard />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard