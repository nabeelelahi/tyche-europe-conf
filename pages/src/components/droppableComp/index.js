import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

export default function DroppableComp({ droppableId, children }) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <>
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {children}
                    </div>
                    {provided.placeholder}
                </>
            )
            }
        </Droppable>
    )
}


