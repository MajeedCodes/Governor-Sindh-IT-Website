import Link from "next/link"

function Navbar() {
    return (
        <div className="navbar h-[80px] w-full bg-[#044e83] flex  sm:flex-row justify-between items-center sm:p-5 p-3 text-white sticky top-0 z-50">
            <div className="navbar__logo flex-shrink-0 mb-3 sm:mb-0">
                <Link href={"/"}>
                    <img 
                        src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" 
                        className="h-[130px] mt-20" 
                        alt="logo" 
                    />
                </Link>
            </div>

            <div className="text-center sm:text-left mb-3 sm:mb-0">
                <h1 className="mainHead font-bold text-[22px] ">
                    Tuition Free Education Program on Latest Technologies
                </h1>

                <h1 className="program font-bold text-[22px]">Tution Free Program</h1>
            </div>

            <span className="togle hidden  text-white text-[25px]">&#9776;</span>

            <ul className="list flex flex-row justify-center items-center gap-4">
                <Link href="/"><li>Home</li></Link>
                <Link href="/apply"><li>Apply</li></Link>
                <Link href="/jobes"><li>Jobes</li></Link>
                <Link href="/result"><li>Result</li></Link>
                <Link href="/courses"><li>Courses</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;

