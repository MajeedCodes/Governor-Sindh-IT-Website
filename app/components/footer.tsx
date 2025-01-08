import { FaFacebook, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="mainmy h-[350px] w-full bg-[#F4F4F5] flex justify-between items-start p-10 text-black">
          
            <div className="flex flex-col gap-2 text-[#313131]">
                <h1 className="text-[25px] font-semibold">Core Courses</h1>
                <p>Programming Fundamentals</p>
                <p>Web2 Using NextJS</p>
                <p>Earn as You Learn</p>
            </div>

           
            <div className="flex flex-col gap-2 text-[#313131]">
                <h1 className="text-[25px] font-semibold">Advanced Courses</h1>
                <p>Web 3 and Metaverse</p>
                <p>Cloud-Native Computing</p>
                <p>Artificial Intelligence (AI) and Deep Learning</p>
                <p>Ambient Computing and IoT</p>
                <p>Genomics and Bioinformatics</p>
                <p>Network Programmability and Automation</p>
            </div>

           
            <div className="flex flex-col gap-4  text-[#313131]">
                <h1 className="text-[25px] font-semibold">Social Links</h1>
                <p>education@governorsindh.com</p>
                <div className="flex gap-3 mt-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                    >
                        <FaFacebook size={18} />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                    >
                        <FaYoutube size={18} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white p-2 rounded-full hover:scale-110 transition-transform"
                    >
                        <FaTwitter size={18} />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white p-2 rounded-full hover:scale-110 transition-transform"
                    >
                        <FaTiktok size={18} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
