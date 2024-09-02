import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const DeploymentPipelineNode = ({ id, data }) => {
  const [pipelineName, setPipelineName] = useState(data?.pipelineName || 'Deployment Pipeline');
  const [status, setStatus] = useState(data?.status || 'Pending');
  
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
    { type: 'target', position: Position.Left, id: 'input' },
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="text-xl font-bold text-gray-800 mb-2">Deployment Pipeline</div>
        <div className="mb-2">
          <label className="block text-gray-600">Pipeline Name:</label>
          <input
            type="text"
            value={pipelineName}
            onChange={(e) => setPipelineName(e.target.value)}
            className="mt-1 p-2 border border-blue-500 rounded-lg w-full focus:border-blue-700 transition-colors"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-2 border border-blue-500 rounded-lg w-full focus:border-blue-700 transition-colors"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
