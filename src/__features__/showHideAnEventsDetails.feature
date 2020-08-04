Feature: Show/Hide an events details

Scenario: An event element is collapsed by default
Given A list of events has been loaded
When User hasn’t yet click the “show details” button on a certain event
Then The events element are collapsed by default

Scenario: User can expand an event to see its details
Given A list of events has been loaded
When User clicks on ”show details” button of a certain event
Then This certain event expands and shows event information for the user

Scenario: User can collapse an event to hide its details
Given User has expanded a certain event for more details
When User clicks ”hide details” button of this event
Then The information collapses