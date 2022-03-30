import React, { useState} from 'react';



const SwitchOrg = ({defClass, activeClass, switchClass}) => {

    const [state, setState] = useState([true, false])

    const style = {
        border: 'none'
    }

    const handleClick = (currentState) => {
        const newState = state
        if (!currentState) setState(newState.map(key => key = !key))
    }

    return (
        <div className={switchClass}>
            <button style={style}
                    type={'button'}
               onClick={() => handleClick(state[0])}
               className={state[0] ?
                   [defClass, activeClass].join(' '):
                   defClass
            }
            >Фіз. особа</button>
            <button style={style}
                    type={'button'}
               onClick={() => handleClick(state[1])}
               className={state[1] ?
                   [defClass, activeClass].join(' '):
                   defClass
               }
            >Юр. особа</button>
        </div>
    );
};

export default SwitchOrg;