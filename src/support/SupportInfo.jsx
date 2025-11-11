import React from 'react';
import EmailIcon from '../assets/email.png';
import PhoneIcon from '../assets/phone.png';

const Line = () => <div className="h-px bg-gray-800 my-6" />;

const SupportInfo = () => {
  return (
    <div className="text-gray-300 font-poppins">
      <p className="uppercase tracking-wider text-sm md:text-base text-gray-400 mb-4">We're here to help you</p>
      <h1 className="max-w-3xl text-3xl md:text-5xl leading-snug font-semibold">
        <span className="text-white">Discuss your problems</span>
        <br />
        <span className="text-white">with us and receive a</span>
        <br />
        <span className="text-white">response in less than</span>
        <br />
        <span className="text-white">1 hour</span> {/* Changed from text-yellow-400 to text-white */}
      </h1>

      <p className="mt-6 text-base md:text-lg text-yellow-400 max-w-2xl"> {/* Changed from text-gray-400 to text-yellow-400 */}
        Are you lost? Do you need any help in using Rich? Any recommendations? Contact us
      </p>

      <Line />

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <img src={EmailIcon} alt="Email" className="w-6 h-6 object-contain" />
          <div className="text-base md:text-lg">
            <div className="text-white font-medium">Email</div>
            <div className="text-yellow-300">rich@ngwino.co.rw</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={PhoneIcon} alt="Phone" className="w-6 h-6 object-contain" />
          <div className="text-base md:text-lg">
            <div className="text-white font-medium">Phone Number</div>
            <div className="text-yellow-300">+250786020022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInfo;