export type RaccoonMeadowsVolunteers = {
  id: number;
  name: string;
  activities: RaccoonMeadowsActivity[];
};

export type RaccoonMeadowsActivity = {
  description: string;
  hours: number;
  verified: string;
};

export const raccoonMeadowsVolunteers = [
  {
    id: 100,
    name: 'Rose Sutton',
    activities: [
      {
        description: 'Removed stump from trail head',
        hours: 3,
        verified: 'Yes',
      },
      {
        description: 'Cleared moss from storm drain',
        hours: 3,
        verified: 'No',
      },
    ],
  },
  {
    id: 101,
    name: 'Leigh Gilmour',
    activities: [
      {
        description: 'Trail maintenance',
        hours: 4,
        verified: 'Yes',
      },
    ],
  },
  {
    id: 102,
    name: 'Raj Wardle',
    activities: [
      {
        description: 'Cleaned campsite 14, 15, and 18',
        hours: 6,
        verified: 'Yes',
      },
    ],
  },
  {
    id: 103,
    name: 'Rayan Gutierrez',
    activities: [
      {
        description: 'Hung sign at new entrance of park',
        hours: 1,
        verified: 'Yes',
      },
      {
        description: 'Refilled maps at trail head 3',
        hours: 1,
        verified: 'Yes',
      },
      {
        description: 'Replaced trail markers for red trail',
        hours: 3,
        verified: 'Yes',
      },
    ],
  },
];

export type WolfPointVolunteers = {
  id: string;
  name: string;
  activities: WolfPointActivity[];
};

export type WolfPointActivity = {
  notes: string;
  time: number;
  verified: boolean;
};

export const wolfPointVolunteers = [
  {
    id: '400sg',
    name: 'Sarah Galloway',
    activities: [
      {
        notes: 'Cleaned up rock slide on south bend',
        time: 7,
        verified: true,
      },
    ],
  },
  {
    id: '401cm',
    name: 'Cormac Mcfarlane',
    activities: [
      {
        notes: 'Mowed Wolf Pup Landing',
        time: 3,
        verified: true,
      },
      {
        notes: 'Trimmed branches at Sit Point Lookout',
        time: 2,
        verified: true,
      },
    ],
  },
  {
    id: '402mm',
    name: 'Maisha Mcconnell',
    activities: [
      {
        notes: 'Picked up litter, hung signs about littering',
        time: 2,
        verified: false,
      },
    ],
  },
  {
    id: '403jr',
    name: 'Joanna Reilly',
    activities: [
      {
        notes: 'Mapped trail for Trail Lupine proposal',
        time: 5,
        verified: true,
      },
      {
        notes: 'Closed Howler Café for winter',
        time: 3,
        verified: true,
      },
    ],
  },
];
