---
title: Strava Tracker
description: Are you biking enough this year?
date: 2026-09-09
tags:
  - electronics
  - software
  - data-viz
coverImage: images/stravatracker-3.jpg
images:
  - images/stravatracker-2.jpg
  - images/stravatracker.jpg
featured: true
draft: false
---
Earlier this year I saw a post about a strava tracker that was created by a user named ibisette to display their running stats. They were very upfront in their post that it was extremely frustrating to get the data to behave with the display and as I tried to create my own variant I unfortunately 100% agree. The ESP32 eInk display I used was extremely processor limited and getting it to stream and calculate even trivial sums from the Strava api was infuriating. Not to mention Claude was consistently wrong about issues, saying it could not access my API key yet we just used it moments earlier.\
\
When I first finished this I was determined to write a diatribe about how frustrating AI was to build with but, now that it is 6 months later, I don't think it is especially relevant. Give your models lots of context, clear endpoints, and encouraging words and it'll solve a millennium problem (or steal it, hard to say right now). \
\
My primary change was including a graph of the cumulative number of miles for the past and current year. I really enjoy seeing the rate change over the year with large jumps attributed to memorable trips. The motivation to get ahead of that cliff has been very motivating for me to get on the bike earlier and more often.\
\
Link to the original project: https://github.com/ibisette/Ibis_Dash_Esp32s3_PhotoPainter\
\
My source code is currently missing due to our mac dying :(  I'll update this if I get around to rebuilding it.\
\
P.S. I have already surpassed 2025 with 1862.4 miles logged on the bike, follow me on strava!
