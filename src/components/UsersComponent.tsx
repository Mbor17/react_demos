import React, {FC} from 'react';

let users=[
    {name:'asja',age:31,status:false},
    {name:'oleg',age:26,status:true},
    {name:'max',age:45,status:true},
    {name:'taras',age:40,status:false},
];
const UsersComponent:FC<any> = ({lift}) => {
    console.log(lift)

    return (
        <div>
            {
                users.map((user,index)=> {
                    return (<div key={index}>{user.name}
                        <button onClick={()=> {
                            lift(user);
                        }
                        }>xxx
                        </button>
                    </div>);
                })

            }
            
            </div>
    );
};

export default UsersComponent;