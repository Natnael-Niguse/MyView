import Header from './Header'; // Import Header component
import { Outlet } from "react-router-dom"; // Import Outlet component from react-router-dom

/**
 * Layout component for rendering header and nested routes.
 * @returns {JSX.Element} - Returns the Layout component JSX. 
 */
export default function Layout() {
    return (
        <main>
            {/* Render the Header component */}
            <Header />
            {/* Render the nested routes */}
            <Outlet />
        </main>
    );
}
