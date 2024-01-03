/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
