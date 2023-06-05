# Install

install nvm e instalar node v18.16.0
para creara proyecto de nest
```
npm i -g @nestjs/cli
nest new project-name
```
npm install
npm run start:dev -- para correr el proyecto y que se quede escuchando cambios
nest g module moduleName -- para crear los modulos por terminal con nestjs cli
nest g service prisma --no-spec -- para crea el servicio sin los archivos spec / test
npx prisma init -- primera vez
npx prisma help
npx prisma migrate dev
npx prisma generate -- toma el schema y crea ts types para el schema y podemos usar los campos en el codigo 
```
import { PrismaClient } from '@prisma/client'                                                      │[+] Running 2/2
const prisma = new PrismaClient()
```
npx prisma studio -- abre un administrador que se conecta a la base de datos

## Este proyecto usa postgres
Para usar postgres con docker:
```
docker compose up db -d
```

## Este proyecto usa growthbook
Para usar growthbook con docker y sin cacheado de flags ese necesario usarlo con proxy, para probar localmente:
```
docker-compose -f docker-compose.proxy.yml up -d
```
Repositorio de growthbook: https://github.com/growthbook/growthbook
En la web: https://app.growthbook.io/features

GrowthBook usar tres puertos por defecto: 3000 -> aplicacion, 3100 -> api, 3300 -> proxy