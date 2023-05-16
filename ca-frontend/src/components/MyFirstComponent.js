import './MyFirstComponent.css'
const MyFirstComponent = () => {
    return (
        <div className='MyFirstComponentHeader'> 
            <div className='logo-box'>
                <img src='../../images/ProfilePic.jpg' alt='[ SunnyCloud ]' className='Logo'/>
            </div>
            <div className='heading-primary'>
                <span className='heading-primary-main'>[ SunnyCloud ]</span>
                <span className='heading-primary-sec'>[ Cloud ]</span>
            </div>
        </div>
    );
}
export default MyFirstComponent;