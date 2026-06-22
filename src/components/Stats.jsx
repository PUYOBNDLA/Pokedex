import React from "react";
import Stat from "./Stat.jsx";

const Stats = ({stats}) => {
    return (
        <div className='mt-[1rem] grid grid-cols-3'>
            <Stat parameter={'Height'} value={stats.height} units={'ft'}/>
            <Stat parameter={'Weight'} value={stats.weight} units={'kg'}/>
            <Stat parameter={'Base Exp'} value={stats.exp} units={''}/>
            <Stat parameter={'HP'} value={stats.hp} units={''}/>
            <Stat parameter={'Attack'} value={stats.attack} units={''}/>
            <Stat parameter={'Defense'} value={stats.defense} units={''}/>
            <Stat parameter={'Spl Attack'} value={stats.splAttack} units={''}/>
            <Stat parameter={'Spl Defense'} value={stats.splDefense} units={''}/>
            <Stat parameter={'Speed'} value={stats.speed} units={''}/>
        </div>
    )
}

export default Stats
