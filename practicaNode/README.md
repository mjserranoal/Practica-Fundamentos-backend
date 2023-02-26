# NodeApp

Install dependencies with:

```sh
npm install
```

Install mongoose:

```sh
npm install mongoose
```

Initialize the database with:

```sh
npm run initDB
```

Start in development mode:

```sh
npm run dev
```

## General info

Application created with:

```sh
npx express-generator nodeapp --ejs
```

## Start a MongoDB Server in Macos or Linux

In the console go to MongoDB folder and:

```sh
./bin/mongod --dbpath ./data
```

## API Methods

### GET api/anuncios/anuncio/listado


Este servicio devuelve un listado de los anuncios en base de datos
Admite los siguientes parámetros por query para filtrar:

- artículo
- venta
- tags
- precio


Este es un ejemplo de la salida de este servicio 
```sh
{
    "result": [
        {
            "_id": "63fbcede824f6abcfd514a85",
            "articulo": "Norvina",
            "venta": true,
            "precio": 90,
            "foto": "public/images/norvina.jpg",
            "tags": [
                "lifestyle",
                "work"
            ],
            "__v": 0
        },
        {
            "_id": "63fbcede824f6abcfd514a86",
            "articulo": "Sultry",
            "venta": true,
            "precio": 100,
            "foto": "public/images/sultry.jpg",
            "tags": [
                "lifestyle",
                "work"
            ],
            "__v": 0
        }
    ]
}
```

### GET api/anuncio/listado-tags


Este servicio devuelve un listado de los tags de los anuncios existentes en base de datos.



Este es un ejemplo de la salida de este servicio 
```sh
{
    "result": [
        "lifestyle",
        "work"
    ]
}
```

### POST api/anuncio/crear


Este servicio permite crear un nuevo anuncio en base de datos.

Este es un ejemplo de la entrada necesaria para que funcione el servicio


tipo de body: x-www-form-urlencoded
- articulo: "prueba2"
- venta: true
- precio: 200
- tags: work
- tags: lifestyle


Este es un ejemplo de la salida de este servicio 
```sh
{
    "result": {
        "articulo": "prueba 2",
        "venta": true,
        "precio": 200,
        "tags": [
            "work",
            "lifestyle"
        ],
        "_id": "63fbdad3810c998e18b59127",
        "__v": 0
    }
}
```


