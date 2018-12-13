// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    description
    address
    latitude
    longitude
    startDate
    endDate
    coverUrl
    largeCoverUrl
    tag
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      address
      latitude
      longitude
      startDate
      endDate
      coverUrl
      largeCoverUrl
      tag
    }
    nextToken
  }
}
`;
