import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const AuthenticationNode = ({ id, data }) => {
  const [authType, setAuthType] = useState(data?.type || 'OAuth');
  const [provider, setProvider] = useState(data?.provider || 'Google');

  const handleTypeChange = (e) => {
    setAuthType(e.target.value);
  };

  const handleProviderChange = (e) => {
    setProvider(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">Authentication</div>
      <div className="space-y-2">
        <label className="block">
          Type:
          <select 
            value={authType} 
            onChange={handleTypeChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="OAuth">OAuth</option>
            <option value="Basic">Basic</option>
          </select>
        </label>
        <label className="block">
          Provider:
          <select 
            value={provider} 
            onChange={handleProviderChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Github">Github</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
