import './galleryItem.scss';

function GalleryItem({url, descr, setModal}) {
    let currentPic = {
        url: url,
        descr: descr
    }
    return(
        <div className='gallery__item' onClick={() => {setModal(currentPic)}}>
            <img src={url} alt={descr}  />
        </div>
    )
}

export default GalleryItem;