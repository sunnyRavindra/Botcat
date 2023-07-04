import './Layout.scss'

const Layout = (props) => {
    return (
        <div className='Layout'>
            {props.children}
        </div>
    );
}
export default Layout;