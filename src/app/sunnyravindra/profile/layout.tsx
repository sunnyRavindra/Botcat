import Navbar from '../../components/Navbar.tsx'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Navbar><Navbar>{children}</>
}
