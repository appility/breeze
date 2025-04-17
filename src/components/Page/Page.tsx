import { PropsWithChildren } from "react"

const Page = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/*   <!-- ✅ Primary Navigation Bar --> */}
      <nav className="w-full bg-[#00BA8D] text-white py-4 px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold">Breeze</a>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Clients</a>
          <a href="#" className="hover:underline">Settings</a>
          <a href="#" className="hover:underline">Logout</a>
        </div>
      </nav>

      {/* <!-- ✅ Secondary Top Bar --> */}
      <div className="bg-[#CCF1E8] py-3 px-8 text-gray-700 text-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-medium">Clients</h1>
        </div>
      </div>

      {/* <!-- ✅ Content Wrapper --> */}
      <main className="container mx-auto p-8 bg-white min-h-[60vh] mt-6">
        {children}
      </main>


      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <p>&copy; Breeze. All rights reserved.</p>
      </footer>

    </>
  )
}

export default Page
