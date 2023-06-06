import { Link, NavLink } from "react-router-dom"
export default function Header(){

    return(
        <header className="flex justify-between items-center bg-gray-800 py-4 px-6 shadow-md">
        <div>
            <Link to="/" className="text-gray-100 font-large text-lg font-inter">FRANKIE'S</Link>
        </div>
        <nav>
            <ul className="flex items-center space-x-4">
                <li>
                    <NavLink 
                    to="/about" 
                    className="text-gray-100 hover:text-gray-200 font-large font-inter"
                    >About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/saved-recipe" 
                    className="text-gray-100 hover:text-gray-200 font-large font-inter"

                    >Saved Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/blog" 
                    className="text-gray-100 hover:text-gray-200 font-large font-inter"
                    >Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>




    )
}