
import './global.css';
import Navbar from './Components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar></Navbar>
          <h1>Welcome</h1>
        </header>
        {children}
        </div>
        <footer>
           <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}