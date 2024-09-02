import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: 'value' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">Output</div>
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium text-sm">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            placeholder="Enter name" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </label>
        <label className="block text-gray-700 text-sm font-medium">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
            <option value="file">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
