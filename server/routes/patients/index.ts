import { mergeRouters } from '../../trpc';
import byId from './byId';
import create from './create';
import list from './list';

const r = mergeRouters(byId, create, list);

export default r;
