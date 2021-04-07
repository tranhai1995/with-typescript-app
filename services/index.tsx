import axios from '../libs/axios';

import MastersService from './masters';

export const mastersService = new MastersService(axios);
