import express from 'express';
import multer from 'multer';

const upload = multer({ dest: 'public/images/' })
const pfp = multer({ dest: 'public/profiles_pic/'})

import { fetchCollections, addCollections, editCollections, deleteCollection, fetchSeries, editSeries, addSeries, deleteSeries, fetchAllSeries, followCollection, unfollowCollection, fetchFollowedCollections, fetchUserCollections, followSerie, unfollowSerie, fetchFollowedSeries } from '../controllers/manga.js';
import { fetchPublishersEs, fetchPublishersJp, fetchBookTypes } from '../controllers/publishers.js';
import { userLogin, userRegister, userUpdate } from '../controllers/login.js';

const router = express.Router();

router.get('/', fetchCollections);
router.get('/user/:id', fetchUserCollections);
router.get('/follow/:id', fetchFollowedCollections);
router.post('/add', upload.single('seriesCover'), addCollections);
router.post('/edit', upload.single('seriesCover'), editCollections);
router.post('/delete/:id', upload.single('seriesCover'), deleteCollection);
router.get('/publishers_es', fetchPublishersEs);
router.get('/publishers_jp', fetchPublishersJp);
router.get('/booktype', fetchBookTypes);
router.get('/serie/:id/:user', fetchSeries);
router.get('/serie', fetchAllSeries);
router.get('/serie/get/followed/:user', fetchFollowedSeries);
router.post('/serie/edit', upload.single('volCover'), editSeries);
router.post('/serie/add', upload.single('volCover'), addSeries);
router.post('/serie/delete/:id', upload.single('volCover'), deleteSeries);
router.post('/register', upload.single('volCover'), userRegister);
router.post('/login', upload.single('volCover'), userLogin);
router.post('/update-user', pfp.single('profile_image'), userUpdate);
router.post('/follow', upload.single('profile_image'), followCollection);
router.post('/unfollow', upload.single('profile_image'), unfollowCollection);
router.post('/serie/follow', upload.single('profile_image'), followSerie);
router.post('/serie/unfollow', upload.single('profile_image'), unfollowSerie);
export default router;