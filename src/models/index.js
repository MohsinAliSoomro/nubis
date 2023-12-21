// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Store, Service } = initSchema(schema);

export {
  Store,
  Service
};