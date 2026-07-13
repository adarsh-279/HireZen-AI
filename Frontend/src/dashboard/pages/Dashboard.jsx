import React, { useEffect } from "react";
import Navbar from '../../ui/components/Navbar.jsx'
import ResumeAnalysisCard from '../components/ResumeAnalysisCard.jsx';
import RecentActivityCard from '../components/RecentActivityCard.jsx';
import PerformanceCard from '../components/PerformanceCard.jsx';
import Footer from '../../ui/components/Footer.jsx';

import {useAuth} from "../../auth/hooks/useAuth.js"
import {useInterview} from "../../report/hooks/useInterview.js"

const Dashboard = () => {
    const {user} = useAuth();
    const { reports, getAllReport } = useInterview();
    
    useEffect(() => {
        getAllReport()
    }, [getAllReport])

    return (
        <>
            <Navbar />
            <div className="p-15 space-y-8">
                <div className=' pt-15'>
                    <h1 className="text-4xl font-bold">
                        Welcome back, <span className="text-white">{user?.username || 'User'}</span>
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Ready to level up? Your career optimization journey can be increased by 72%. Ready for your next milestone?
                    </p>
                </div>

                <div className="w-full flex gap-8">
                    <ResumeAnalysisCard />
                    <PerformanceCard reports={reports} />
                </div>

                <div>
                    <RecentActivityCard reports={reports} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard