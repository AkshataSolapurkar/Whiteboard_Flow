import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '25%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '75%' } },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="text-gray-600 font-semibold text-lg mb-2">LLM</div>
      <div className="text-gray-700">
        <p>This is a LLM.</p>
      </div>
    </BaseNode>
  );
};
