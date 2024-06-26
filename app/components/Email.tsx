import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';

interface EmailProps {
}

const Email: React.FC<EmailProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleResend = () => {
    // Logic to resend the email will be implemented here
    console.log(`Resending email to: ${inputValue}`);
  };

  return (
    <div className="lg:flex gap-x-4">
      <div className="flex items-center dark:bg-neutral-900 border border-neutral-700 border-opacity-40 h-11 flex-1 rounded-md">
        <CiMail className="ml-4" />
        <input
          className="w-full h-full bg-transparent placeholder:text-neutral-600 pl-2 focus:outline-none focus:border-blue-500"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Your fancy email"
          autoFocus
        />
      </div>
      <button className="dark:bg-neutral-900 border border-neutral-700 border-opacity-40 p-2 shrink-0 h-11 bg-black text-white/90 rounded-md w-full lg:w-36 text-sm mt-2 lg:mt-0" onClick={handleResend}>
        Resend Email
      </button>
    </div>
  );
};

export default Email;
