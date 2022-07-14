# RemindTracker


---
## Requerimiento de ejecución
Para el correcto funcionamiento de la UI es necesario tener corriendo en la maquina local el servidor hecho en express alojado en el siguiente repositorio [RemindTracker API](https://github.com/Esteb4nx/remind-tracker-api)


## Instrucciones de uso de la plataforma
Proyecto desarrollado para la asignatura de Especialización tecnológica 1, por Isidora Albayay, Esteban Esparza, Jorge Mainhard y Francisca Rivas.

Consiste en una plataforma de metricas del desempeño de usuarios en la plataforma Remind a partir de sus sesiones de estudio realizadas previamente, la aplicación proporciona gráficos del desempeño general del usuario.

Para poder registrarse en la plataforma nueva, es necesario tener un usuario en la Api de Remind entregada por el docente, en caso de conicidir los usuarios, re permitirá el registro para la utilización de la plataforma. Los datos de los usuarios son migrados desde la Api de Remind al momento del registro por lo que las sessiones se mantienen.

### Login
Usuarios de prueba ya registrados y existentes en la [API](https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws).
```
Usuario 1
username: abockenn
password: 123

Usuario 2
username: millingworthr
password: 321
```

### Register
Los unicos usuarios que pueden registrarse en la aplicación deben existir en la [API](https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws)
 entregada por el docente.
 Posibles usuarios de ejemplo.
```
Usuario 1
username: tbrookwood6

Usuario 2
username: umildmottd

Usuario 3
username: gvilei
```

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
