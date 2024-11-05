async function listaVideos(){
    const conexion = await fetch("https://videos-five-brown.vercel.app/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    /* console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen){
    try {
        const conexion= await fetch("https://videos-five-brown.vercel.app/videos",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                titulo:titulo,
                descripcion:`${descripcion} mil visualizaciones`,
                url:url,
                imagen:imagen
            })
        });

        if (!conexion.ok) {
            throw new Error(`Error al crear el video: ${conexion.status}`);
        }

        const conexionConvertida = await conexion.json();

        return conexionConvertida;
    } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario
        alert("No fue posible enviar el video. Por favor, inténtalo de nuevo más tarde.");
    }
}

async function buscarVideo(referencia) {
    const conexion = await fetch(`https://videos-five-brown.vercel.app/videos/${referencia}`);
    const conexionConvertida = await conexion.json(); // Asegúrate de esperar a que la promesa se resuelva

    // Si la respuesta de la API es un array, devuelve el array
    if (Array.isArray(conexionConvertida)) {
        return conexionConvertida;
    } else {
        // Si la respuesta de la API no es un array, devuelve un array vacío
        return [];
    }
}