import '../styles/PortfolioItem.css';

export function PortfolioItem(props: { title: string, tagline: string, lastModified: string, bootstrapIcon: string, iconPaths: string[], url: string }) {
    return (
        <a href={props.url} className='portfolio-item-wrapper' target='_blank' rel='noreferrer'>
            <svg className={`bi bi-${props.bootstrapIcon}`} xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='currentColor' viewBox='0 0 16 16'>
                {props.iconPaths.map((iconPath, pathIndex) => <path d={iconPath} key={`portfolio-icon-path-${pathIndex}`} />)}
            </svg>
            <h2 className='portfolio-item-title'>{props.title}</h2>
            <h3 className='portfolio-item-tagline'>{props.tagline}</h3>
            <h4 className='portfolio-item-modified'>{props.lastModified}</h4>
        </a>
    );
}
