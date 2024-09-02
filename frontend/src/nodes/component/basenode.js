import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, handles, children }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 relative">
      {children}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, zIndex: 10 }} 
        />
      ))}
    </div>
  );
};
