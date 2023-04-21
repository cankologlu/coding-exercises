const courses = [
  {
    id: 1,
    studyGroupId: 1,
    title: 'Improvisational Arts Lab',
    keywords: ['improv', 'art', 'performance', 'lab'],
    eventType: 'course',
  },
  {
    id: 2,
    studyGroupId: 2,
    title: 'Research Methods 1',
    keywords: ['lab', 'research', 'science', 'self-study'],
    eventType: 'course',
  },
  {
    id: 3,
    studyGroupId: 3,
    title: '19th Century Art',
    keywords: ['1800s', 'art', 'history'],
    eventType: 'course',
  },
];

const studyGroups = [
  {
    id: 1,
    courseId: 1,
    title: 'Improvisational Arts Lab Study Group',
    keywords: ['improv', 'art', 'performance', 'lab'],
    eventType: 'group',
  },
  {
    id: 2,
    courseId: 2,
    title: 'Research Methods 1 Study Group',
    keywords: ['lab', 'research', 'science', 'self-study'],
    eventType: 'group',
  },
  {
    id: 3,
    courseId: 3,
    title: '19th Century Art Study Group',
    keywords: ['1800s', 'art', 'history'],
    eventType: 'group',
  },
];

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}
type StudyGroup =  {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type SearchEventOptions = {
query: string | number;
eventType: string | number;
}


function searchEvents(options: SearchEventOptions) {
const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
return events.filter((event: Course | StudyGroup)=> { 
if(typeof options.query === "number") {
  return options.query === event.id
}
if(typeof options.query === "string"){
  return event.keywords.includes(options.query)
}
});
};
let enrolledEvents: (Course | StudyGroup)[] = [];
function enroll (event: Course | StudyGroup) {
enrolledEvents = [...enrolledEvents, event]
}

const example: SearchEventOptions = {
query: "art",
eventType: "courses"
}

const searchResults = searchEvents(example)
enroll(searchResults[0]);


// console.log(searchResults)
console.log(enrolledEvents)