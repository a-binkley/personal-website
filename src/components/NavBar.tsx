import './styles/NavBar.css';

export function NavBar(props: { current: 'home' }) {
    return (
        <div className='navBarContainer'>
            <div className='navBarPageList'>
                <button>Home</button>
                <button>Resume & CV</button>
                <button>Projects</button>
            </div>
            <div id='navBarSeparator' />
            <div className='navBarSocialIcons'>
                <image>GitHub</image>
                <image>LinkedIn</image>
            </div>
        </div>
    );
};
