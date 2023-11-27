// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, Store } = initSchema(schema);

export {
  Service,
  Store
};