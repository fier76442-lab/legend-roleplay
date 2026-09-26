import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Legend RolePlay',
  description: 'Legend RolePlay official website'
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><div className="page-bg"/><Navbar/><main>{children}</main><footer className="footer">© {new Date().getFullYear()} Legend RolePlay — All rights reserved.</footer></body></html>
}