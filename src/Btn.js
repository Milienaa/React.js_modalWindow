import './btn.scss';

export default function Btn({setModal}) {
    return(
        <span className='btn' onClick={() => setModal(null)}>+</span>
    )
}