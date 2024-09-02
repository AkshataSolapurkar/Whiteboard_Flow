import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const CloudServiceNode = ({ id, data }) => {
  const [serviceName, setServiceName] = useState(data?.name || 'Cloud Service');
  const [serviceType, setServiceType] = useState(data?.type || 'AWS');

  const handleNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">Cloud Service</div>
      <div className="space-y-2">
        <label className="block">
          Name:
          <input 
            type="text" 
            value={serviceName} 
            onChange={handleNameChange} 
            placeholder="Service name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </label>
        <label className="block">
          Type:
          <select 
            value={serviceType} 
            onChange={handleTypeChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="Google Cloud">Google Cloud</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
