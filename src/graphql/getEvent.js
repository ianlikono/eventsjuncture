// eslint-disable
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
          user {
                id
                username
                userAvatar
            }
        }
        nextToken
      }
    }
  }
  `;
