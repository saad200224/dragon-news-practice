import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='mt-12 mb-8 text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-5 mb-3 text-lg text-dark-3'>Journalism Without Fear or Favour</p>
            <p className='text-dark-3 text-xl font-medium'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;