# React Information Flow

## Goals
You will be able to:
- Define the term “lifting state”
- Recognize the pattern for changing state in a parent component from a child component
- Explain the role that callback functions play in changing parent state

## Review
- build component hierarchy for karaoke from wireframe (on board)
- plan what states we'll need
- plan what events we'll need
- question we'll be answering: where should we put those states and events?

## Props only flow down
- best practice: keep it local
- state must be in closest common parent
- no sibling to sibling
- no child to parent

## Demonstrate lifting state

## Inverse data flow with callback functions
- You CAN pass a callback function as a prop
- Only way to get info from child up to parent
- ELI5: Parent gives cellphone to child
- ELI5: Touching a hot stove

## Reflection Qs:
1. What does the term ‘lifting state’ mean?
2. If the behavior exists inside of the child component and state is defined inside a parent component, what is the best way to update the state upon an event?
3. How is a callback function shared with a child component from the parent component?
4. Explain inverse data flow in your own words.

## Demo: Karaoke
Deliverables:
- display songs and singers in lists; import data at the lowest level it's needed
- set state of singer in singerList to show the one current karaoke singer (add microphone emoji)
- then, make the "now playing" component functional; you have to lift state to accomplish that

?? what's up with key on click?