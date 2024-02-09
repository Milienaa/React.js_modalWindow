import './gallery.scss';
import pic from './allPic';
import GalleryItem from './GalleryItem';
import { motion } from 'framer-motion';

function Gallery({ setModal }) {
    const myAnimate = {
        hidden: { opacity: 0 },
        show: {opacity: 1}
    }
    return(
        <div className = 'gallery'>
            {pic.map(elem => <motion.div key={elem.id}
                                         variants={myAnimate}
                                         initial = "hidden"
                                         animate = "show"
                                         transition={{
                                            duration: 1
                                         }}>
                                <GalleryItem 
                                    url = {elem.url}
                                    descr = {elem.description}
                                    setModal = {setModal}
                                />
                                    </motion.div>)}
        </div>
    )
}

export default Gallery;