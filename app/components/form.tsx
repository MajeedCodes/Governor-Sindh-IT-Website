import Footer from "./footer";

function Form() {
    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center flex-col px-4">
            <br /><br /><br />

            <div className="min-h-[450px] w-full max-w-[600px] bg-[white] shadow-2xl flex flex-col justify-center items-center">
                <div className="min-h-[130px] w-full flex justify-center items-start p-5">
                    <h1 className="text-[22px] sm:text-[25px] text-[#044e83] font-bold text-center">
                        Grand Entrance Exam Result
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-5 w-full font-bold">
                    <div className="w-full">
                        <div className="text-start pl-4 sm:pl-8 text-[16px] sm:text-[18px] text-[#334155] p-2">
                            <label htmlFor="name">Registration Number *</label>
                        </div>
                        <input
                            type="text"
                            required
                            placeholder="Registration Number"
                            className="h-[45px] sm:h-[50px] w-full max-w-[90%] pl-2 border border-[#b6b0b0] rounded outline-none"
                        />
                    </div>

                    <div className="w-full">
                        <div className="text-start pl-4 sm:pl-8 text-[16px] sm:text-[18px] text-[#334155] p-2">
                            <label htmlFor="email">CNIC or B-Form Number *</label>
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="CNIC or B-Form Number"
                            className="h-[45px] sm:h-[50px] w-full max-w-[90%] pl-2 border border-[#b6b0b0] rounded outline-none"
                        />
                    </div>

                    <button className="h-[40px] sm:h-[45px] w-[130px] sm:w-[150px] bg-[#044e83] text-white">
                        GET RESULT
                    </button>
                </div>
            </div>

            <br /><br />
        </div>
    );
}

export default Form;
