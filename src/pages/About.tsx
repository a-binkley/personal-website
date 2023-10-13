import { Outlet } from 'react-router-dom';
import { PageMenu } from '../components';

export function About() {
    return (
        <>
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='About' />
            <Outlet />
        </>
    );
}
