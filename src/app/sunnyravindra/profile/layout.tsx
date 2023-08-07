import NavbarProfile from '../../components/NavbarProfile.tsx'

export default function NabarLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
    <NavbarProfile></NavbarProfile>
      {children}
    </section>
  )
}
