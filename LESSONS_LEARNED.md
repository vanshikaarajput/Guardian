# Lessons Learned – Guardian: Intelligent Personal Safety System with Real-Time Tracking

## Project Overview

Guardian is a personal safety application designed to provide emergency assistance through features such as real-time location tracking, SOS alerts, and emergency contact management. The project is being developed using React Native (Expo), Node.js, Express.js, Prisma, and Neon PostgreSQL.

# Challenges Faced

## 1. Choosing the Right Backend Architecture

Initially, I was unsure whether to use Firebase or a custom backend. Firebase was quick to set up, but I wanted to learn backend development in depth and have more control over authentication and database design.

**Solution:** I migrated to a custom backend using Node.js, Express, Prisma, and PostgreSQL.

**Lesson Learned:** Technology choices should be based on project requirements and learning goals, not only on what is easiest to implement.


## 2. Project Structure Confusion

As the project grew, I accidentally created multiple folders with similar purposes (such as duplicate service directories), which made the codebase difficult to navigate.

**Solution:** I reorganized the project structure and adopted a cleaner folder hierarchy.

**Lesson Learned:** A good folder structure from the beginning saves significant development time later.


## 3. Environment Configuration Issues

I faced issues while configuring environment variables, database connection strings, and Git ignore rules.

**Solution:** I created a proper `.env` setup and ensured sensitive information was excluded from version control.

**Lesson Learned:** Environment management and project configuration are as important as writing application code.

## 4. Database and ORM Learning Curve

Working with Prisma and PostgreSQL was initially challenging because I was unfamiliar with migrations, schema changes, and database synchronization.

**Solution:** I spent time understanding Prisma's workflow and practiced creating and updating schemas.

**Lesson Learned:** Understanding the underlying database concepts is essential and cannot be replaced by simply using an ORM.


## 5. Planning Before Coding

At several points, I started implementing features before fully planning the APIs and database design, which led to rework.

**Solution:** I began documenting APIs and thinking about data flow before implementation.

**Lesson Learned:** Spending time on design and planning reduces development mistakes.


# Mistakes Made

* Started development without a complete system design document.
* Changed technologies midway through development.
* Underestimated the importance of documentation.
* Did not maintain a detailed project roadmap initially.
* Focused more on implementation and less on architecture during the early stages.

# What I Would Improve

## 1. Better Documentation

I would maintain architecture diagrams, API documentation, and design decisions from the first day of development.

## 2. Automated Testing

I would add unit and integration tests to improve reliability and make future changes safer.

## 3. CI/CD Pipeline

I would configure automated builds and deployments using GitHub Actions.

## 4. Security Enhancements

I would implement features such as rate limiting, refresh tokens, and stronger authentication mechanisms.

## 5. Scalability

I would redesign certain modules to make the application easier to scale and maintain as new features are added.


# Key Takeaways

* Building a real project involves much more than writing code.
* Architecture and planning significantly affect development speed.
* Version control and documentation are essential engineering practices.
* Debugging and problem-solving are valuable learning experiences.
* Iteration and continuous improvement are important parts of software development.

This project taught me how to think beyond individual features and approach software development from a system design and engineering perspective.
