'use strict';

const Anuncio = require('../models/Anuncio');
const connection = require('../lib/connectMongoose');

main().catch(err => console.log('Hubo un error', err));

async function main() {
    // inicializamos colección de anuncios
    await initAnuncios();

    connection.close();
}

async function initAnuncios() {
    // borrar todos los documentos de la coleccion de agentes
    const deleted = await Anuncio.deleteMany();
    console.log(`Se han borrado ${deleted.deletedCount} anuncios`)

    // crear anuncios iniciales
    const inserted = await Anuncio.insertMany([
        {
            articulo: 'Rose Metals',
            venta: false,
            precio: 55,
            foto: 'images/rose.jpg',
            tags: ["lifestyle"] 
        },
        {
            articulo: 'Noveau Palette',
            venta: false,
            precio: 50,
            foto: 'images/noveau.jpg',
            tags: ["lifestyle","work"] 
        },
        {
            articulo: 'Norvina',
            venta: true,
            precio: 90,
            foto: 'images/norvina.jpg',
            tags: ["lifestyle","work"] 
        },
        {
            articulo: 'Sultry',
            venta: true,
            precio: 100,
            foto: 'images/sultry.jpg',
            tags: ["lifestyle","work"] 
        }
    ]);
    console.log(`Se han creado ${inserted.length} anuncios`)
}