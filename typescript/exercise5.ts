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


type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
 return volunteers.map((volunteer) => {
    let id = volunteer.id
    if (typeof id === "string") {
      id = parseInt(id, 10)
    }
    return {
    id: id, 
    name: volunteer.name,
    activities: volunteer.activities}
  })
}
function isVerified(verified: boolean | string) {
  if (typeof verified === "string") {
    verified === "Yes" ? true : false;
  }
  return verified;
}

function getHours(activity: CombinedActivity) {
   if ('hours' in activity) {
     return activity.hours
   } 
   return activity.time
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if (isVerified(activity.verified)) {
        hours += getHours(activity)
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

function byHours(a, b) {
  return b.hours - a.hours
}
const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

// console.log(combinedVolunteers);
let result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours))
