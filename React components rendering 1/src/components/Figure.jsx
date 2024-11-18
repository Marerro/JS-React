import Profile from '../assets/profile.png';
import '../profile.css'

function Figure() {
    return (
        <>
        <div className='profilePicture'>
        <img className="Profile" src={Profile} alt="ProfilePicture" />
        <h4>Asabeneh Yetayeh</h4>
        </div>
        </>
    )
}

export default Figure;