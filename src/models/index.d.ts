import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly deliveryFee?: number | null;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating: number;
  readonly logo?: string | null;
  readonly image: string;
  readonly address: string;
  readonly postcode: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Services?: (Service | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly deliveryFee?: number | null;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating: number;
  readonly logo?: string | null;
  readonly image: string;
  readonly address: string;
  readonly postcode: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Services: AsyncCollection<Service>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly price: number;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}