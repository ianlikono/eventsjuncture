// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    Owner {
      id
      username
      userAvatar
      email
      latitude
      longitude
    }
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
    comments {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
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
      Owner {
        id
        username
        userAvatar
        email
        latitude
        longitude
      }
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
      comments {
        items {
          id
          text
          createdAt
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      userAvatar
      email
      latitude
      longitude
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    user {
      id
      username
      userAvatar
      email
      latitude
      longitude
    }
    event {
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
    text
    createdAt
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        userAvatar
        email
        latitude
        longitude
      }
      event {
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
      text
      createdAt
    }
    nextToken
  }
}
`;
