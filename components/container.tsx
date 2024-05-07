import Header from "@/components/header"
import Footer from "@/components/footer"
type layoutProp = {
  children: React.ReactNode
}

export default function index({ children }: layoutProp) {
  return (
    <div className='container mt-14 px-5 md:px-20 lg:px-56 xl:px-60 flex flex-col gap-3'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}