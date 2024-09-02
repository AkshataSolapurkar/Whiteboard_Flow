// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='p-[10px] flex justify-center items-center'>
            <div className='mt-5 flex  flex-wrap gap-2.5'>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='Cloud' label='Cloud' />
                <DraggableNode type='deplyoment' label='Deployment' />
                <DraggableNode type='Feedback' label='Feedback' />
                <DraggableNode type='Authentication' label='Authenticaation' />
                <DraggableNode type='Database' label='Database' />
            </div>
        </div>
    );
};
