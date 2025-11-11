import React from 'react';

const Field = ({ label, placeholder, type = 'text', required=false }) => {
  return (
    <div className="flex flex-col gap-3 font-poppins">
      <label className="text-yellow-400 text-base md:text-lg font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-[#EBC4854D] border border-yellow-600/60 rounded-lg px-5 py-3 text-base md:text-lg text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-yellow-400"
      />
    </div>
  );
};

const SupportForm = () => {
  return (
    <div className="mr-0 md:mr-[100px]">
      <div className="border border-yellow-600 rounded-md p-5 md:p-8 bg-black/40 font-poppins">
        <form className="flex flex-col gap-5">
          <Field label="Name" placeholder="Will Smith" required />
          <Field label="Email" placeholder="willsmith@gmail.com" type="email" required />
          <div className="flex flex-col gap-2">
            <label className="text-yellow-400 text-base md:text-lg font-medium">Message</label>
            <textarea
              placeholder="Type something..."
              rows={6}
              required
              className="bg-[#EBC4854D] border border-yellow-600/60 rounded-lg px-5 py-3 text-base md:text-lg text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="flex justify-end">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/25">
              <span className="font-bold">Send</span>
              <span className="inline-block w-7 h-7 rounded-full bg-black text-yellow-400 flex items-center justify-center font-bold">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;