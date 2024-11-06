async function listarVideos() {
    const conexion = await fetch("https://videos-five-brown.vercel.app/videos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}
async function enviarVideo(titulo, descripcion, url, imagen) {
    try {
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

        if (!conexion.ok) {
            throw new Error("Ha ocurrido un error al enviar el video");
        }

        const conexionConvertida = await conexion.json(); // Esperar a que la promesa se resuelva
        return conexionConvertida;
    } catch (error) {
        console.error("Error al enviar el video:", error);
        // Mostrar un mensaje de error al usuario
        alert("Ha ocurrido un error al enviar el video. Por favor, inténtalo de nuevo más tarde.");
    }
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