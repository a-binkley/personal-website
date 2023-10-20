import '../styles/PortfolioItem.css';

export function PortfolioItem(props: { title: string, tagline: string, lastModified: string, bootstrapIcon: string, iconPaths: string[], url: string }) {
    return (
        <a href={props.url} className='portfolio-item-wrapper' target='_blank' rel='noreferrer'>
            <svg className={`bi bi-${props.bootstrapIcon} portfolio-icon`} xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 24 24'>
                {props.iconPaths.map((iconPath, pathIndex) => <path d={iconPath} key={`portfolio-icon-path-${pathIndex}`} />)}
            </svg>
            <div className='portfolio-item-info-wrapper'>
                <h2 className='portfolio-item-title'>{props.title}</h2>
                <h3 className='portfolio-item-tagline'>{props.tagline}</h3>
                <h4 className='portfolio-item-modified'>{props.lastModified}</h4>
            </div>
        </a>
    );
}
