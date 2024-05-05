import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {
    return (
        <>
            <Character
                name={'bart'}
                image={"https://www.mubis.es/media/users/9164/92322/desmienten-la-muerte-de-bart-simpson-original.jpg"}

            />
            <Character
                name={'homer'}
                image={"https://www.mubis.es/media/users/9164/92322/desmienten-la-muerte-de-bart-simpson-original.jpg"}
            />
            <Character
                name={'marge'}
                image={"https://i.pinimg.com/474x/85/f4/cf/85f4cfd3c777989e2858b561d991d137.jpg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias architecto, consectetur cumque
                dicta maiores minima, optio quos repudiandae soluta tempora. Aut illo ipsa iure labore mollitia quaerat,
                unde.
            </Character>
        </>
    );
}

export default App;
