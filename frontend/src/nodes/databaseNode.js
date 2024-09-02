import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.name || 'Database');
  const [dbType, setDbType] = useState(data?.type || 'SQL');

  const handleNameChange = (e) => {
    setDbName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setDbType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">Database</div>
      <div className="space-y-2">
        <label className="block">
          Name:
          <input 
            type="text" 
            value={dbName} 
            onChange={handleNameChange} 
            placeholder="Database name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </label>
        <label className="block">
          Type:
          <select 
            value={dbType} 
            onChange={handleTypeChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="SQL">SQL</option>
            <option value="NoSQL">NoSQL</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
