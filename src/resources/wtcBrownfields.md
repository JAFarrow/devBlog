---
title: WeThinkCode_ Brownfields Development
date: 2024-08-23
path: wtcBrownfields.js
project: n/a
iteration: 0
---
# WeThinkCode_ Brownfields Development

## Context
23/08/2024

Up until the beginning of this project, our developmental efforts at WeThinkCode_ had been focused on writing code to specification from scratch, also known as greenfields development.

In contrast, this project finds itself in the context of brownfields development, whereby we were assigned an existing codebase and tasked with further development upon it as a team of five.

The specifics of the application itself consists of a multiplayer game called RobotWars which implements a client-server architecture. it allows multiple players to connect to a server and launch into a shared world where they may explore, move around and battle against each other in order to win as the last robot standing. 

## Iterative Development

Our efforts were broadly divided into four two week sprints, of which we were assigned new tasks and goals for each, often without knowing what the next iteration would bring. 

While challenging, this curriculum format closely aligns with real world development and will surely improve our ability to thrive in the industry as we realign our focus to work readiness.

The following is a breakdown of each iterations' goals, methodologies and challenges. 

#### Week 1-2: Acceptance Testing

Our first requirements were to familiarise ourselves with the codebase and begin the process of acceptance testing our application alongside the assistance of a reference server. 

The reference server, when queried by the client, would format its response to specification and in this way, we wrote acceptance tests for different functionalities of our application. 

If the acceptance tests passed against the reference server but failed against our own codebase, we would know that our application was misaligned from the specification and we could focus our development efforts on those functionalities. 

#### Week 3-4: CI/CD Pipelines

With the amount of testing necessary for this application, along with the need to version and package each successful integration of new functionality and the challenges these requirements can pose when done on five different machines, the benefits of automating this process became apparent. 

Using GitLab's ability to script pipelines, we implemented precise stages for our pipelines to run through, including testing, packaging and versioning, along with deploying a docker container to a registry for every successful run of our pipeline.  

With this approach, we could see at a glance the state of our code on every commit, as well as storing a history of executables in the form of docker containers for every successful version of our application.  

#### Week 5-6: Database Implementation

With the server's ability to construct a game world with different arrangements of size and obstacles contained, we were tasked with adding the ability for specific arrangements to be persisted. 

With this in mind, we implemented a relational database in the form of a SQLite database that would allow users to save the current layout of their map or restore a previously saved map with a single command.

This proved to be challenging in that we needed to define a schema that was flexible enough for different configurations and that the connection between our application and database had to be as error proof as possible. 

#### Week 7-8: Separation of Concerns

In our last sprint, the focus switched to ensuring that our application architecture was as modular as possible. We had experienced the difficulties of extending the functionality of a tightly coupled application and in the effort to ensure future maintainability, we begun further atomising our components.

This took the form of separating out all of our persistence related code from our application and making it accessible only through the use of a WebAPI, with specific functionality laying behind various HTTP end points. 

We also established the use of an Object Relational Mapping to ensure that our database queries were as efficient and error proof as possible while also improving the readability and maintainability of that application layer. 

### In Reflection

The transition from greenfields to brownfields development presented both significant challenges and valuable learning opportunities for our team. 

Throughout the iterative sprints, we successfully navigated the complexities of working with an existing codebase, implementing acceptance testing, refining CI/CD pipelines, adding database functionality, and modularizing the application architecture.

Each phase enhanced our understanding of real-world development practices and prepared us for future industry demands.

### Recommendations

To build on the progress achieved during this project, it is advisable to continue emphasizing iterative development and incremental improvements. Further refinement of our CI/CD processes and continuous integration of advanced testing strategies will enhance code reliability and streamline deployment.

Additionally, ongoing attention to modularity and code maintainability will ensure that the application remains adaptable to future enhancements. Embracing these practices will not only solidify our technical skills but also reinforce our capability to effectively contribute to and manage complex software projects in a professional setting.