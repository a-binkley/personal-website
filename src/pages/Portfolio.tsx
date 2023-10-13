import { Outlet } from 'react-router-dom';
import { PageMenu } from '../components';

export function Portfolio() {
    return (
        <>
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='Portfolio' />
            <Outlet />
        </>
    );
}
