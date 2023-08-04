import Navbar from "@/app/components/Navbar"

export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar></Navbar>
        {children}
      </section>
    )
  }