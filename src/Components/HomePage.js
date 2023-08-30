import React from 'react';
import Header from './Header';
import Banner from './Banner';
import { lazy, Suspense } from 'react';

// lazy load component for better performance
const Section = lazy(() => import("./Section"));

function HomePage() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Suspense fallback={<div>Loading....</div>}>
                <Section />
            </Suspense>
        </>
    )
}

export default HomePage