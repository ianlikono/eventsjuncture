// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
