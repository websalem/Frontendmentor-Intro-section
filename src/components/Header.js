import Login from './Login';
import logo from '../images/logo.svg';
import iconCloseMenu from '../images/icon-close-menu.svg';
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';
import { useRef, useState } from 'react';
function Header() {

    const [expanded2, setExpanded2] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }
    const handleClick1 = () => {
        setExpanded1(!expanded1);
    }
    const handleClick2 = () => {
        document.querySelector('main').classList.toggle('overlay');
        setExpanded2(!expanded2);
    }
    return (
        <header>
            <div className='container'>

                <div className="logo">
                    <img src={logo} />
                </div>
                <nav className={expanded2 ? 'expanded' : ''}>

                    <div className='nav-close' onClick={handleClick2}>
                        <img src={iconCloseMenu} />
                    </div>
                    <ul>
                        <li className="has-children"><a href="#" data-text="Features" onClick={handleClick}>Features</a>
                            <ul className={expanded ? 'sub-menu expanded' : 'sub-menu'}>
                                <li>
                                    <img src={iconTodo} />
                                    <a href="#" data-text="Todo List">Todo List</a></li>
                                <li>
                                    <img src={iconCalendar} />
                                    <a href="#" data-text="Calendar">Calendar</a></li>
                                <li>
                                    <img src={iconReminders} />
                                    <a href="#" data-text="Reminders">Reminders</a></li>
                                <li>
                                    <img src={iconPlanning} />
                                    <a href="#" data-text="Planning">Planning</a></li>
                            </ul>
                        </li>
                        <li className="has-children" ><a href="#" data-text="Company" onClick={handleClick1}>Company</a>
                            <ul className={expanded1 ? 'sub-menu expanded' : 'sub-menu'} >
                                <li><a href="#" data-text="History">History</a></li>
                                <li><a href="#" data-text="Our Team">Our Team</a></li>
                                <li><a href="#" data-text="Blog">Blog</a></li>
                            </ul>
                        </li>
                        <li><a href="#" data-text="Careers">Careers</a></li>
                        <li><a href="#" data-text="About">About</a></li>
                    </ul>
                    <Login />
                </nav >

                <div className='mobile-toggle' onClick={handleClick2}>
                    <div className='icon-bar'></div>
                    <div className='icon-bar'></div>
                    <div className='icon-bar'></div>
                </div>
            </div>

        </header >
    )
}
export default Header;
