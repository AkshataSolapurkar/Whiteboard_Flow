// FeedbackNode.js

import { useState } from 'react';
import { BaseNode } from './component/basenode';
import { Position } from 'reactflow';

export const FeedbackNode = ({ id, data }) => {
  const [feedback, setFeedback] = useState(data?.feedback || '');
  const [rating, setRating] = useState(data?.rating || 5);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles}>
      <div className="p-4">
        <h3 className="text-gray-700 font-semibold mb-2">Feedback Node</h3>
        <div className="mb-3">
          <label className="block text-gray-600 mb-1">Feedback:</label>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Rating:</label>
          <select
            value={rating}
            onChange={handleRatingChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
