import Image from "next/image"

export default function TextMy() {
  return (


    <main className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16">


      <div className="mx-auto max-w-7xl">
      
        <h1 className="mb-4 text-center text-2xl font-bold text-[#0A4B8F] md:text-3xl lg:text-4xl">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        </h1>
        <h2 className="mb-8 text-center text-xl font-semibold text-[#0A4B8F] md:text-2xl">
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h2>

       
        <p className="mb-12 text-center text-gray-700 md:text-lg">



          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs
          trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by
          eliminating the middleman, and by developing vertical marketspaces, thus paving the way for the first billion dollar valued solopreneur
          businesses. This program has the objective to train this new breed of billion dollar solopreneurs. These solopreneurs will adopt the
          ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>

      
        <div className="grid gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <Image

              src="/images/human.jpg"
              alt="Person working on AI technologies"
              width={400}
              height={300}
              className="h-[200px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <Image


              src="/images/code.jpg"
              alt="Solopreneur's Mind Map"
              width={400}
              height={300}
              className="h-[200px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <Image
            
              src="/images/office.jpg"
              alt="Training Environment"
              width={400}
              height={300}
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

