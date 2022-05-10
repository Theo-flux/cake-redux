import { IS_BROKE } from "./brokeTypes";

function isBroke(){
    return {
        type: IS_BROKE,
        info: "state of brokeness! lol"
    }
}

export default isBroke;