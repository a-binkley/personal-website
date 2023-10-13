import { Link } from 'react-router-dom';
import { PageTitle } from '../pages';
import '../styles/PageMenu.css';

export function PageMenu(props: { titles: PageTitle[], current: PageTitle }) {
    return (
        <div id='pageMenuWrapper'>
            <ol id='pageMenuList'>
                {props.titles.map((title) => <MenuPaddle title={title} type={title === props.current ? 'current' : 'other'} key={title} />)}
            </ol>
        </div>
    );
}

function MenuPaddle(props: { title: PageTitle, type: 'current' | 'other' }) {
    const paddleInfo: Map<PageTitle, { iconClass: string; iconPaths: string[]; }> = new Map([
        ['About', { 
            iconClass: 'file-person', 
            iconPaths: [
                'M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z',
                'M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
            ] 
        }],
        ['Home', {
            iconClass: 'house',
            iconPaths: [`M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 \
0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z`]
        }],
        ['Portfolio', { 
            iconClass: 'code-slash', 
            iconPaths: [`M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 \
.708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 \
0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z`] 
        }]
    ]);

    const info = paddleInfo.get(props.title);
    if (!info) throw new Error(`Page title "${props.title}" has no mapped content`);

    const target = props.title.toLowerCase();

    return (
        <li className='pageMenuListItem'>
            <div className='pageMenuPaddleEdge'>
                <Link to={`/${target === 'home' ? '' : target}`} style={{ color: '#3f3f3f' }} className='pageMenuLink'>
                    <svg id={`paddleIcon${props.title}`} xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='currentColor' className={`bi bi-${info.iconClass} ${props.type}`} viewBox='0 0 16 16'>
                        {info.iconPaths.map((iconPath, index) => <path d={iconPath} key={`paddleIconPath-${index}`} />)}
                    </svg>
                </Link>
            </div>
        </li>
    );
}
