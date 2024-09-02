import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };


  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  }, [currText]);

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="mb-2">
        <span className='text-gray-600 font-semibold text-lg'>Text</span>
      </div>
      <div className="flex flex-col">
        <label className='text-gray-700 font-medium text-sm mb-1'>
          Text:
        </label>
        <textarea
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange}
          placeholder='Enter your text'
          className='border border-gray-300 rounded p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden'
          rows={1} 
          style={{ minHeight: '2rem', lineHeight: '1.5rem', width: '100%' }} 
        />
      </div>
    </BaseNode>
  );
};
