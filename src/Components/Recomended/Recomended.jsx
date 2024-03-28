import './Recomended.css'
import thumbnail1 from '../../Assets/thumbnail1.png';
import thumbnail2 from '../../Assets/thumbnail2.png';
import thumbnail3 from '../../Assets/thumbnail3.png';
import thumbnail4 from '../../Assets/thumbnail4.png';
import thumbnail5 from '../../Assets/thumbnail5.png';
import thumbnail6 from '../../Assets/thumbnail6.png';
import thumbnail7 from '../../Assets/thumbnail7.png';
import thumbnail8 from '../../Assets/thumbnail8.png';
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';
const Recomended = ({categoryId}) => {
    const [apiData,setApiData] = useState([]);
    const fetchData = async () => {
        const reletedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(reletedVideoUrl)
        .then(res => res.json())
        .then(data =>setApiData(data.items))
    }
 useEffect(() => {
   fetchData();
 },[])


  return (
    <div className='recomended'>
        {apiData.map((items,index) => {
        return (
            <Link to={`/video/${items.snippet.categoryId}/${items.id}`} key={index} className="side-video-list">
            <img src={items.snippet.thumbnails.medium.url} alt="..." />
            <div className="vid-info">
                <h4>{items.snippet.title}</h4>
                <p>{items.snippet.channelTitle}</p>
                <p>{value_converter(items.statistics.viewCount)} views</p>
            </div>
           </Link>
        )
    })}
      
    </div>
  )
}

export default Recomended