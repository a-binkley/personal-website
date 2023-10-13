import { Outlet } from 'react-router-dom';
import { PageMenu } from '../components';

export function About() {
    return (
        <>
            <h1>Content coming soon!</h1>
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='About' />
            <Outlet />
        </>
    );
}
