import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';

//  router.get('/', (req: Request, res: Response) => {
//     res.send('Home page')
//  })
router.get('/', memberController.goHome);

router.get('/login', memberController.getLogin);
//  router.get('/login', (req: Request, res: Response) => {
//     res.send('Login page')
//  })

router.get('/signup', memberController.getSignup);
//  router.get('/signup', (req: Request, res: Response) => {
//     res.send('Signup page')
//  })

 export default router;