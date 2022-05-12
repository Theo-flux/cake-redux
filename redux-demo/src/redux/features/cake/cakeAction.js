import {BUY_CAKE} from './cakeTypes'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: "action creator to buy cake."
    }
}

export default buyCake