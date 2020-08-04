Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given A list of events has been loaded
When User hasn’t yet specified number of events shown on dashboard
Then 32 events around the users location will be shown by default

Scenario: User can change the number of events they want to see
Given User hasn’t yet specified number of events shown on dashboard
When User changed number of events shown on dashboard in app settings
Then Customized number of events should be shown on dashboard