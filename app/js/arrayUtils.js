import { random } from 'lodash';

export const generateKey = index => {
    return index * 2 + random(1000000);
};
