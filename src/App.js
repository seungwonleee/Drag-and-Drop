import React from 'react'
import Refrigerator from './refrigerator/Refrigerator'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <div className="App">

      {/* 드래그엔 드랍 냉장고 컴포넌트*/}
      <DndProvider backend={HTML5Backend}>
        <Refrigerator />
      </DndProvider>

    </div>
  )
}

export default App;
