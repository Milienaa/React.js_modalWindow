import { motion, AnimatePresence } from 'framer-motion';
import './modalWindow.scss';
import Btn from './Btn';

function ModalWindow({ modal, setModal }) {
    const myAnimate = {
        hidden: {opacity: 0},
        show: { opacity: 1 },
        hiddenModal: { opacity: 0, y: 100 },
        showModal: { opacity: 1, y: 0 }
    }

    return (
        <AnimatePresence>
            { modal &&
                <motion.div className="overlay"
                            variants = {myAnimate}
                            initial = "hidden"
                            animate ="show"
                            exit = "hidden"
                            onClick={() => setModal(null)}
                            >
                    <motion.div className = "modal"
                                variants = {myAnimate}
                                initial = "hiddenModal"
                                animate = "showModal"
                                exit = "hiddenModal"
                                transition = {{
                                    delay: 0.5,
                                    duration: 0.5,
                                    type: "spring"
                                }}>
                        <img src={modal.url} />
                        <h2>{modal.descr}</h2>
                        <Btn setModal={setModal} />
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default ModalWindow;