import { Chess } from "../node_modules/chess.js/dist/chess.js";
const chess = new Chess();
chess.load('rnbq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQq - 0 1')

export { chess }

export function move(p1, p2){
chess.move({ from: p1, to: p2});
return chess.board();
}
export function getPiece(square){
    return chess.get(square).type.toUpperCase();
}
export function hist(){
    return chess.history();
}