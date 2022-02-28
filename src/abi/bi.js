import gaz from "./bian/gaz.json";
import Usdt from "./bian/Usdt.json"
import Eat from "./bi/Eat.json"
import Mrt from "./bi/Mrt.json"
var bi = [
    {
        heyue:"0x55d398326f99059ff775485246999027b3197955",
		abi:Usdt,
    },
    {
        heyue:"0xCE5C72a775A3e4D032Fbb08C66c8BdfA9A5d216F",
        abi:gaz,
    },
    {
        heyue:"0x0f77144eba9c24545aA520a03f9874C4f1f4850F",
        abi:Eat
    },
    {
        heyue:"0x431fcd7FeB856a190eE153F7465553D69b5Dd842",
        abi:Mrt
    }
]

export default bi