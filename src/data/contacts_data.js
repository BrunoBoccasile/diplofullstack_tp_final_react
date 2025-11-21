const contacts =
  [
    {
      id: 1,
      user_id: 'MFF9SBOB',
      name: 'Michael',
      profile_picture: 'https://img.asmedia.epimg.net/resizer/v2/MVVLGIFVPJIKZFBP4AWCGPI3SU.jpg?auth=3da4633592834dfb6b0088ae57e706c0093350e45d65b1f64015cddf26cfc91f&width=360',
      last_connection: new Date(2025, 10, 21, 18, 30, 0),
      is_connected: false,
      messages:
        [
          {
            id: 1,
            content: 'Hello there!',
            author_id: 'MFF9SBOB',
            author_name: "Santino",
            created_at: new Date(2025, 10, 21, 18, 26, 0),
            status: 'VIEWED'
          }
        ]
    },
    {
      id: 2,
      user_id: 'HK94Q56U',
      name: 'Albert',
      profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1536px-Albert_Einstein_Head.jpg',
      last_connection: new Date(),
      is_connected: true,
      messages:
        [
          {
            id: 1,
            content: "Hey, what's up?",
            author_id: 'HK94Q56U',
            author_name: "Esteban",
            created_at: new Date(),
            status: 'VIEWED'
          }
        ]
    }
  ]

export default contacts;
