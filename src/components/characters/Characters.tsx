import React from 'react';
import Character from "../character/Character";

const Characters = () => {
    return (
        <div>
            <Character
                name={'bart'}
                img={'https://i.pinimg.com/474x/85/f4/cf/85f4cfd3c777989e2858b561d991d137.jpg'}/>
            <Character
                name={'homer'}
                img={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}>
                Lorem ipsum

            </Character>
        </div>
    );
};

export default Characters;