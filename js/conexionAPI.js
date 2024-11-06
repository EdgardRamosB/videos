async function listarVideos() {
    const conexion = await fetch("https://videos-five-brown.vercel.app/videos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarVideo(titulo, descripcion, url, imagen) {//para cargar imagenes de forma automatica, luego creamos un nuevo archivo para poder pasar los parametros
    const conexion = await fetch("https://videos-five-brown.vercel.app/videos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });
    const conexionConvertida = conexion.json(); // Esperar a que la promesa se resuelva
    if (!conexion.ok){
        throw new Error ("ha ocurrido un error al enviar video");
    }

    return conexionConvertida;
}

async function buscarVideos(palabraClave) {
    const conexion = await fetch (`https://videos-five-brown.vercel.app/videos?q=${palabraClave}`);
    const conexionConvertida =  conexion.json();
    return conexionConvertida
}


export const conexionAPI ={
 listarVideos,enviarVideo,buscarVideos
}
//listarVideos();