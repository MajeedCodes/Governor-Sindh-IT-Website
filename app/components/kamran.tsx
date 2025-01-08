import Image from "next/image"

export default function Kamran() {
  return (
    <main className="min-h-[60vh] bg-white p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
        
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform ">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/sli.jpg"
                alt="Corporate meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg transition-transform ">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/kam.jpg"
                alt="Metaverse concept illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent">
             
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

