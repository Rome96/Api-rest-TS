import { Request, Response, Router } from 'express';
import { readdirSync } from 'fs'; // para leer directorios

const PATH_ROUTER = `${__dirname}`
const router = Router();

//function para quitarle la extension al archivo ejemplo: item.ts queda item
const cleanFileName = (fileName: String) => {
  return fileName.split('.').shift()
}

//funcion para leer cuantos y cuales archivos estan en este path
readdirSync(PATH_ROUTER).filter(fileName => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== 'index') {
    //importacion dinamica
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se está cargando la ruta ==> /${cleanName}`)
      router.use(`/${cleanName}`, moduleRouter.router) //usando router de los routers que esten en este path
    });
  };

});

export { router };