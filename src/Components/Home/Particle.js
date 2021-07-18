import GridLarge from '../Home/assets/Grid-Large.svg'
import GridSmall from '../Home/assets/Grid-Small.svg'
import Cross from '../Home/assets/Cross.svg'
export const Particle = (props)=>{
    if (props.GridLarge)
        return <img src={GridLarge} style={{left:props.x, top:props.y, width:props.size}} className='particle'/>
    if (props.GridSmall)
        return <img src={GridSmall} style={{left:props.x, top:props.y, width:props.size}} className='particle'/>
    if (props.Cross)
        return <img src={Cross} style={{left:props.x, top:props.y, width:props.size}} className='particle'/>
    return null
}