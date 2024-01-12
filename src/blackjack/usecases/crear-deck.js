import _ from 'underscore';


//Mejora la documentacion JSDoc comments
/**
 * Esta funcion cre un nuevo deck
 * @param {array<string>} tiposCarta ej. ['C','D','H','S'];
 * @param {array<string>} tipoCartaEsp ej. ['A','J','Q','K'];
 * @returns {array<string>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tipoCartaEsp) => {

    if(!tiposCarta || tiposCarta.length === 0) throw new Error('Tipos de carta es obligatorio como array de strings');
    if(!tipoCartaEsp || tipoCartaEsp.length === 0) throw new Error('Tipos de carta es obligatorio como array de strings');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tipoCartaEsp ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}