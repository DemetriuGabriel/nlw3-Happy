import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import Orphanagescontroller from './controllers/Orphanagescontroller';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', Orphanagescontroller.index);
routes.get('/orphanages/:id', Orphanagescontroller.show);
routes.post('/orphanages', upload.array('images'), Orphanagescontroller.create);

export default routes;