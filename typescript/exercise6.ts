function getObstacleEvents() {
  const coinFlip = Boolean(Math.random() > 0.5);
  return { 
    'ObstacleLeft': coinFlip, 
    'ObstacleRight': !coinFlip 
  };
}

//types
interface Events {
  [event:string] :boolean;
}
interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering
}

interface Control {
  execute: (command:string) => void
}

interface Steering extends Control {
  turn: (direction: string) => void
}


//class
class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning
    this.steeringControl = props.steeringControl
  }
  respond (events:Events) {
    if (!this.isRunning) {
     console.log("Car is off")
    }
    const everyKey = Object.keys(events)
    everyKey.forEach((eventKey)=>{
      if(!eventKey){
        return
      }
      if(eventKey === 'ObstacleLeft'){
        this.steeringControl.turn("right")
      }
      if(eventKey === "ObstacleRight") {
        this.steeringControl.turn("left")
      }
    })
  }
}

class SteeringControl implements Steering {
  execute (command: string) {
    console.log(`Executing ${command}`)
  }
  turn (direction: string) {
    this.execute(`turn ${direction}`)
  }
}

const steering = new SteeringControl

// console.log(steering.turn("right"))

const autonomousCar = new Car({isRunning: true, steeringControl: steering})

console.log(autonomousCar.respond(getObstacleEvents()))
