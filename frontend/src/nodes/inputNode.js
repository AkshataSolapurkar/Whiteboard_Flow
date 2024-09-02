import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">Input</div>
      <div className="space-y-2">
        <label className="block">
          {inputType === 'File' ? 'Choose a file' : 'Name:'}
          {inputType === 'File' ? (
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          ) : (
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange} 
              placeholder="Enter name" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          )}
        </label>
        {selectedFile && (
          <div className="mt-2 text-gray-600">
            Selected file: {selectedFile.name}
          </div>
        )}
        <label className="block">
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
