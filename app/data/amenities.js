import uuid from 'uuid';

export const allAmenities = [
  {
    floor: 0,
    floorTitle: 'Underground',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Restrooms',
        icon: 'Amenities_Restrooms.png',
        notes: 'Accessible restroom',
        description: 'Accessible restrooms are located on the underground level.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'The Factory',
        icon: 'Amenities_Factory.png',
        notes: '',
        description:
          'Come to the Factory to try out some signature Warhol art-making techniques like blotted line drawing, acetate collage, and silkscreen printing. All ages are welcome.',
        hours: 'Tuesday-Friday  1:30-5 p.m. \nSaturday-Sunday  12:00-5 p.m.',
      },
      {
        uuid: uuid.v4(),
        title: 'Conservation Lab',
        icon: 'Amenities_Conservation.png',
        notes: '',
        description:
          "Take a look through the conservation lab window to see museum conservators working to maintain the museum's collection.",
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Photobooth',
        icon: 'Amenities_Photobooth.png',
        notes: '',
        description: 'Immortalize your visit to The Warhol in the photobooth.',
        hours: '',
      },
    ],
  },
  {
    floor: 1,
    floorTitle: 'Entrance Space',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'The Warhol Store',
        icon: 'Amenities_Shop.png',
        notes: '',
        description:
          'The Warhol Store offers one-of-a-kind gifts, Andy Warhol-inspired items, and souvenirs to remember your visit to the museum.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'The Warhol Café',
        icon: 'Amenities_Cafe.png',
        notes: '',
        description:
          'The Warhol Café serves soups, salads, sandwiches, gourmet treats, and specialty coffee drinks.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Admissions Desk',
        icon: 'Amenities_Admissions.png',
        notes: '',
        description:
          'Stop by the admission desk to purchase tickets and for information about the museum. Inquire about audio guides, wheelchairs, gallery stools, large-print labels, and digital versions of printed labels. Transmitters for sound amplification in The Warhol theater are available at the admission desk.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'The Warhol theater',
        icon: 'Amenities_Theater.png',
        notes: '',
        description:
          'The 130-seat theater features <i>Andy Warhol: Fifteen Minutes Eternal</i> screened daily, as well as hosts special film screenings and music performances. Transmitters for sound amplification are available at the admission desk.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Photobooth',
        icon: 'Amenities_Photobooth.png',
        notes: '',
        description: 'Immortalize your visit to The Warhol in the photobooth.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Coat check and lockers',
        icon: 'Amenities_Coatcheck.png',
        notes: '',
        description:
          'Use our lockers to check backpacks and any bags larger than 11 by 16 inches in size. Lockers are self-serve and require a quarter, which is refunded after use. Lockers and coat check are located near the admission desk.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Silkscreen demo',
        icon: 'Amenities_Silkscreen.png',
        notes: '',
        description:
          "Each weekday at 1 p.m., the museum's artist educators demonstrate Andy Warhol's silkscreen printing process from beginning to end. Visitors learn how Warhol used this technique to create some of his most famous works of art. \n\nPlease note that due to potential schedule conflicts, this demonstration schedule is subject to change. Check with the admission desk staff for the latest schedule.",
        hours: 'Tuesday-Friday  1:00pm',
      },
    ],
  },
  {
    floor: 2,
    floorTitle: 'Floor 2',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Special exhibitions gallery',
        icon: 'Amenities_SpecialExhibitions.png',
        notes: '',
        description: 'Temporary exhibitions are featured in this gallery space.',
        hours: '',
      },
      {
        uuid: uuid.v4(),
        title: 'Restrooms',
        icon: 'Amenities_Restrooms.png',
        notes: 'Accesible restroom',
        description:
          'Accessible restrooms are located on this floor. Additional accessible restrooms are located on the underground level.',
        hours: '',
      },
    ],
  },
  {
    floor: 3,
    floorTitle: 'Floor 3',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Archives',
        icon: 'Amenities_Archives.png',
        notes: '',
        description:
          "The keystone of the archives collection is Andy Warhol's <i>Time Capsules</i>, a serial work consisting of 610 containers, mostly cardboard boxes, filled with ephemera from the artist's life.",
        hours: '',
      },
    ],
  },
  {
    floor: 4,
    floorTitle: 'Floor 4',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Film and video gallery',
        icon: 'Amenities_FilmGallery.png',
        notes: '',
        description:
          "Andy Warhol created artworks that explored the boundaries of the moving image from the time he purchased his first movie camera in 1963 until the end of his life in 1987. The touch screens in this gallery allow you to view more than 100 full-length selections from Warhol's film, video, and television work.",
        hours: '',
      },
    ],
  },
  {
    floor: 5,
    floorTitle: 'Floor 5',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Silver Clouds',
        icon: 'Amenities_Clouds.png',
        notes: '',
        description:
          'The result of a collaboration between Andy Warhol and engineer Billy Klüver, this 1966 sculptural installation is comprised of floating, reflective scotchpak silver "clouds" filled with helium and oxygen. You are welcome to gently touch the clouds; these objects move randomly through the space and may touch you.',
        hours: '',
      },
    ],
  },
  {
    floor: 6,
    floorTitle: 'Floor 6',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Screen Test Machine',
        icon: 'Amenities_ScreenTest.png',
        notes: '',
        description:
          'Between 1964 and 1966, Andy Warhol created almost 500 <i>Screen Tests</i> of famous and anonymous visitors to his studio. Visitors are invited to create their own.',
        hours: '',
      },
    ],
  },
  {
    floor: 7,
    floorTitle: 'Floor 7',
    amenities: [
      {
        uuid: uuid.v4(),
        title: 'Tactile reproductions',
        icon: 'Amenities_Tactile.png',
        notes: '',
        description:
          "Get a sense of the texture, shape, and composition in Andy Warhol's artwork through touch.",
        hours: '',
      },
    ],
  },
];
