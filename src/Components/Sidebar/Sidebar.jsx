import './Sidebar.css'
import home_icon from '../../Assets/home.png';
import game_icon from '../../Assets/game_icon.png'
import automobile_icon from '../../Assets/automobiles.png'
import sports_icon from '../../Assets/sports.png'
import entertainment_icon from '../../Assets/entertainment.png'
import tech_icon from '../../Assets/tech.png'
import music_icon from '../../Assets/music.png'
import blogs_icon from '../../Assets/blogs.png'
import news_icon from '../../Assets/news.png'
import jack_icon from '../../Assets/jack.png'
import simon_icon from '../../Assets/simon.png'
import tom_icon from '../../Assets/tom.png'
import megan_icon from '../../Assets/megan.png'
import cameron_icon from '../../Assets/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className="shortcut-links">
        <div className={`side-links ${category === 0? "active": ""}`} onClick={() => setCategory(0)}>
                <img src={home_icon} alt="..." />
                <p>Home</p>
            </div>
            <div className={`side-links ${category === 20? "active": ""}`} onClick={() => setCategory(20)}>
                <img src={game_icon} alt="..." />
                <p>Gaming</p>
            </div>
            <div className={`side-links ${category === 2? "active": ""}`} onClick={() => setCategory(2)}>
                <img src={automobile_icon} alt="..." />
                <p>Auto</p>
            </div>
            <div className={`side-links ${category === 17? "active": ""}`} onClick={() => setCategory(17)}>
                <img src={sports_icon} alt="..." />
                <p>Sports</p>
            </div>
            <div className={`side-links ${category === 24? "active": ""}`} onClick={() => setCategory(24)}>
                <img src={entertainment_icon} alt="" />
                <p>TV</p>
            </div>
            <div className={`side-links ${category === 28? "active": ""}`} onClick={() => setCategory(28)}>
                <img src={tech_icon} alt="..." />
                <p>Tech</p>
            </div>
            <div className={`side-links ${category === 10? "active": ""}`} onClick={() => setCategory(10)}>
                <img src={music_icon} alt="..." />
                <p>Music</p>
            </div>
            <div className={`side-links ${category === 22? "active": ""}`} onClick={() => setCategory(22)}>
                <img src={blogs_icon} alt="..." />
                <p>Blogs</p>
            </div>
            <div className={`side-links ${category === 25? "active": ""}`} onClick={() => setCategory(25)}>
                <img src={news_icon} alt="..." />
                <p>News</p>
            </div>
           <hr />
        </div>
        <div className="subscribe-list">
            <h3>Subscribe</h3>
            <div className="side-links">
                <img src={jack_icon} alt="..." />
                <p>Jack</p>
            </div>
            <div className="side-links">
                <img src={simon_icon} alt="..." />
                <p>Simon</p>
            </div>
            <div className="side-links">
                <img src={tom_icon} alt="..." />
                <p>Tom</p>
            </div>
            <div className="side-links">
                <img src={megan_icon} alt="..." />
                <p>Megan</p>
            </div>
            <div className="side-links">
                <img src={cameron_icon} alt="..." />
                <p>Camen</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar