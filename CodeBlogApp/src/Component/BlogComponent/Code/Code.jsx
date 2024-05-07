import React, { useRef } from 'react';

const Code = ({ code }) => {
  const codeRef = useRef(null);

  const copyCode = () => {
    const codeBlock = codeRef.current;
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  return (
    <div className="w-full h-auto text-white bg-black px-10 py-4 rounded-lg flex justify-between items-center">
      <pre className='' ref={codeRef}>
          {code}
      </pre>
      <div className='rounded-md bg-white self-start'>
        <button onClick={copyCode} className='bg-slate-800 px-4 py-1 rounded-sm hover:-translate-x-[-4px] hover:translate-y-[-4px] z-10'>Copy</button>
      </div>
    </div>
  );
};

export default Code;
