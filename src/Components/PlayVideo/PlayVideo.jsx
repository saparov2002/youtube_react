import './PlayVideo.css';
import like from '../../Assets/like.png';
import dislike from '../../Assets/dislike.png';
import share from '../../Assets/share.png';
import save from '../../Assets/save.png';
import user_profile from '../../Assets/user_profile.jpg';
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]));
    };

    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData && apiData.snippet && apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then(res => res.json())
            .then(data => setChannelData(data.items[0]));
        
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}` 
        await fetch(comment_url)
        .then(res => res.json())
        .then(data=>setCommentData(data.items))
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchOtherData();
        }
    }, [apiData]);

    useEffect(() => {

    })

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <h3>{apiData && apiData.snippet && apiData.snippet.title}</h3>

            <div className="play-video-info">
                <p>
                    {value_converter(apiData && apiData.statistics && apiData.statistics.viewCount)} View &bull;{' '}
                    {moment(apiData && apiData.snippet && apiData.snippet.publishedAt).fromNow()}
                </p>
                <div>
                    <span>
                        <img src={like} alt="..." />
                        {value_converter(apiData && apiData.statistics && apiData.statistics.likeCount)}
                    </span>
                    <span>
                        <img src={dislike} alt="..." />
                        {value_converter(apiData && apiData.statistics && apiData.statistics.favoriteCount)}
                    </span>
                    <span>
                        <img src={share} alt="..." />
                        share
                    </span>
                    <span>
                        <img src={save} alt="..." />
                        save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img
                    src={
                        channelData &&
                        channelData.snippet &&
                        channelData.snippet.thumbnails &&
                        channelData.snippet.thumbnails.default &&
                        channelData.snippet.thumbnails.default.url
                    }
                    alt="..."
                />
                <div>
                    <p>{apiData && apiData.snippet && apiData.snippet.channelTitle}</p>
                    <span>{value_converter(channelData && channelData.statistics && channelData.statistics.subscriberCount)} Subscribes</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>{apiData && apiData.snippet && apiData.snippet.description}</p>
                <hr />
                <h4>{apiData && apiData.statistics && apiData.statistics.commentCount} Comments</h4>
                {commentData.map((items,index)=>{
    return(
        <div key={index} className="comment">
            <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="..." />
            <div>
                <h3>
                    {items.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span>
                </h3>
                <p>
                    {items.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action">
                    <img src={like} alt="..." />
                    <span>{items.snippet.topLevelComment.snippet.likeCount}</span>
                    <img src={dislike} alt="..." />
                    <span>6</span>
                </div>
            </div>
        </div>
    );
})}

                
            </div>
        </div>
    );
};

export default PlayVideo;
