function Register() {
    return (
      <div className="min-h-screen w-[80%] flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-lg md:max-w-xl bg-white shadow-2xl p-8 rounded-md">
          <h1 className="text-[#044e83] text-[28px] font-bold text-center">
            Student Course Registration Form
          </h1>
  
          <div className="mt-6 text-center">
            <span>Already applied? </span>
            <span className="text-[#044e83] cursor-pointer font-semibold">Get Admit Card</span>
          </div>
  
          <form className="mt-8 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[18px]">Name *</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="fatherName" className="text-[18px]">Father's Full Name *</label>
              <input
                type="text"
                placeholder="Father's Full Name"
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              />
            </div>
  
            {/* Email with Send OTP Button */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[18px]">Email *</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
                />
                <button
                  type="button"
                  className="px-4 h-[50px] bg-[#044e83] text-white font-semibold rounded-md hover:bg-[#033b67] transition"
                >
                  Send OTP
                </button>
              </div>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="otp" className="text-[18px]">OTP *</label>
              <input
                type="text"
                placeholder="OTP"
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="cnic" className="text-[18px]">CNIC or B-Form Number *</label>
              <input
                type="text"
                placeholder="CNIC or B-Form Number"
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="city" className="text-[18px]">City *</label>
              <select
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              >
                <option value="">Select City</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
              </select>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="dob" className="text-[18px]">Date of Birth *</label>
              <input
                type="date"
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-[18px]">Gender *</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" /> Female
                </label>
              </div>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="qualification" className="text-[18px]">Highest Qualification *</label>
              <select
                className="h-[50px] rounded-md pl-3 border border-gray-300 outline-none focus:ring-2 focus:ring-[#044e83]"
              >
                <option value="">Select Qualification</option>
                <option value="matric">Matric</option>
                <option value="intermediate">Intermediate</option>
                <option value="graduation">Graduation</option>
                <option value="master">Master</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="w-full h-[55px] bg-[#044e83] text-white font-semibold rounded-md hover:bg-[#033b67] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;
  