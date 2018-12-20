// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    username
    userAvatar
    email
    latitude
    longitude
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
