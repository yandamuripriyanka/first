import './index.css'
const ThumbnailItem = props => {
  const {imageDetails, isActive, setThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onClickThumbnail = () => {
    setThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="btn" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText}/>
      </button>
    </li>
  )
}
export default ThumbnailItem
