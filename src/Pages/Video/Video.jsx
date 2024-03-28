import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recomended/Recomended'
import './Video.css'
const Video = () => {
    const {videoId,categoryId} = useParams()
  return (
    <div className='play-container'>
        <PlayVideo videoId={videoId}/>
        <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video