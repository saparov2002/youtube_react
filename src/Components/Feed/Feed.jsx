import './Feed.css'
// import thumbnail1 from '../../Assets/thumbnail1.png';
// import thumbnail2 from '../../Assets/thumbnail2.png';
// import thumbnail3 from '../../Assets/thumbnail3.png';
// import thumbnail4 from '../../Assets/thumbnail4.png';
// import thumbnail5 from '../../Assets/thumbnail5.png';
// import thumbnail6 from '../../Assets/thumbnail6.png';
// import thumbnail7 from '../../Assets/thumbnail7.png';
// import thumbnail8 from '../../Assets/thumbnail8.png';
import { value_converter } from '../../data';
import { API_KEY } from '../../data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

const Feed = ({category}) => {
    const [data,setData] = useState([])
    const fetchVideoData = async () => {
        const videoList_url  = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url)
        .then(respons => respons.json())
        .then(data =>setData(data.items))
    }

    useEffect(() => {
       fetchVideoData();
    },[category])
  return (
    <div className='feed'>
        {data.map((item,index)=> {
           return(
    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
        <img src={item.snippet.thumbnails.medium.url} alt="..." />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} view &bull;  {moment(item.snippet.publishedAt).fromNow()}</p>
    </Link>
           )
        })}
    </div>
  )
}

export default Feed