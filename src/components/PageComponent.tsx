import type { ReactNode } from 'react';
import Title from './TitleComponent';

interface PageProps {
    title: string;
    children: ReactNode;
}

const Page = ({title, children}: PageProps) => {
    return (
        <div className='docpage-container'>
            <Title title={title}></Title>
            <div className='docpage-header'>
                <h3>{title}</h3>
            </div>
            <div className='docpage-content'>
                {children}
            </div>
        </div>
    );
};

export default Page;