export interface Posts {
  id: number;
  description: string;
  likes: number;
  comments: number;
  post: string[];
}

interface Stories {
  id: number;
  photoUrl: string;
}

export interface Data {
  id: number;
  name: string;
  profilePhotoUrl: string;
  followers: number;
  posts: Posts[];
  stories: Stories[];
}

const data = [
  {
    id: 1,
    name: "Laura",
    profilePhotoUrl:
      "https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg",
    followers: 25000,
    posts: [
      {
        id: 1,
        description: "Hello friend how are you?",
        likes: 7300,
        comments: 800,
        post: [
          "https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        ],
      },
      {
        id: 2,
        description: "Helloooo",
        likes: 1200,
        comments: 900,
        post: [
          "https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        ],
      },
    ],
    stories: [
      {
        id: 1,
        photoUrl:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 3,
        photoUrl:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Henry",
    profilePhotoUrl:
      "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/02/henry-cavill-007-bode-na-sala.jpg",
    followers: 25000,
    posts: [
      {
        id: 2,
        description: "Hello friend how are you?",
        likes: 7300,
        comments: 800,
        post: [
          "https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        ],
      },
      {
        id: 3,
        description: "Helloooo",
        likes: 1200,
        comments: 900,
        post: [
          "https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        ],
      },
    ],
    stories: [
      {
        id: 4,
        photoUrl:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 5,
        photoUrl:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
    ],
  },
];

export default data;
