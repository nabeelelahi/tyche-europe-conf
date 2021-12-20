import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function DraggableComp({ index, draggableId, children }) {
    return (
        <Draggable
            draggableId={draggableId}
            index={index}
        >
            {(provider) => (
                <>
                    <div
                        ref={provider.innerRef}
                        {...provider.draggableProps}
                    >
                        <div {...provider.dragHandleProps}>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </Draggable>
    )
}


