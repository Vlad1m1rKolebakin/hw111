import React from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW11 from '../s2-homeworks/hw11/HW11'
import HW5 from '../s2-homeworks/hw05/HW5'
import HW12 from '../s2-homeworks/hw12/HW12'

function App() {
    return (
        <div className={s.App}>
            {/* <HW1/> */}
            {/*раскомментировать по ходу выполнения*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
            {/* <HW11/> */}
            <HW12/>
        </div>
    )
}

export default App
