/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
      id
      name
      category
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      logo
      image
      address
      postcode
      lat
      lng
      Services {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
      id
      name
      category
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      logo
      image
      address
      postcode
      lat
      lng
      Services {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
      id
      name
      category
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      logo
      image
      address
      postcode
      lat
      lng
      Services {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
      id
      image
      name
      description
      price
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
      id
      image
      name
      description
      price
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
      id
      image
      name
      description
      price
      storeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
