+++
title = "My Favorite Free Hosting Services of 2023"
date = "2023-03-16T10:58:55-04:00"
author = ""
authorTwitter = "Chand1012Dev" #do not include @
cover = ""
tags = ["hosting", "programming", "devops", "free"]
keywords = ["free", "hosting", "programming", "devops"]
description = "Broke college students and zero budget startups rejoice!"
showFullContent = false
readingTime = false
hideComments = false
+++
Are you a developer who's just starting out and looking to launch your first website or application? Or maybe you're just looking for ways to save on hosting costs? Either way, you're in luck because in this blog post, I'll be sharing my favorite free hosting services of 2023.

While many programming tools and resources are available for free, hosting services often come with a price tag. However, with the rise of cloud computing and advancements in web technology, there are now a number of hosting providers that offer free plans with generous resource allocations and features!

In this post, I'll be reviewing some of the top free hosting services available for developers in 2023. I'll cover their features, limitations, and user experience to help you make an informed decision on which provider to choose for your next project.

## Frontend

### [Vercel](https://vercel.com/)

Vercel is a cloud platform for building, deploying, and scaling web applications. It provides an all-in-one platform for developers to build, host, and deploy their applications in the cloud.

Vercel's platform offers a number of features that make it popular among developers. One of its key features is its support for serverless functions, which allow developers to run server-side code without having to manage server infrastructure. This code can be written in Javascript/Typescript, Python, Go, and a few other languages. Vercel also provides support for static sites, React, Vite, Vue, Hugo and plain old HTML sites, as well as Next.js, a popular React framework that Vercel develops in-house, and is quickly becoming the most popular method for getting a React app off the ground.

In addition to its hosting platform, Vercel also offers a number of developer tools and integrations, including Git-based workflows, continuous deployment, and collaborative editing, making it super easy to get started!

Vercel is free for hobbyists, meaning if you’re deploying from your personal GitHub account, its free, with teams starting at $20/per developer.

### [Cloudflare Pages](https://pages.cloudflare.com/)

You may know Cloudflare from their very fast and very secure DNS provider, or their CDN, or their DDoS protection, but did you know that you can have them host your website using their global CDN? 

Cloudflare Pages is a cloud-based platform for building and deploying websites and web applications. It is designed to make it easy for developers to build, test, and deploy their applications with a simple, intuitive interface and seamless integration with other Cloudflare services.

With Cloudflare Pages, developers can build and deploy static sites and single-page applications (SPAs) quickly and easily. The platform provides a Git-based workflow for building and deploying applications, and it supports a wide range of front-end frameworks and libraries, including React, Vue.js, Angular, and more.

Cloudflare Pages also offers fast build times, thanks to its distributed network of servers and caching infrastructure. This helps to reduce the time it takes to build and deploy applications, making it easier for developers to get their applications up and running quickly.

In addition to its core features, Cloudflare Pages also provides a range of integrations and tools to help developers optimize their applications for performance, security, and scalability. These include access to Cloudflare's CDN, DDoS protection, and edge caching, as well as real-time analytics and monitoring. 

Just like Vercel, you can even set up automatic deployment from GitHub, along with other CI/CD.

Unliked Vercel, Cloudflare Pages is free for as many developers you want with as many users as you want with unlimited bandwidth. They even have their own serverless compute called Cloudflare Workers (which I’ll get to later) where you can host backend code on! Once you need more advanced features past just hosting the website, or if you run Cloudflare Workers more than 100k times in a month, then you will have to pay.

## Backend

### [Fly.io](https://fly.io/)

Heroku free tier is dead. [Fly.io](http://Fly.io) is here to pick up the pieces. 

Fly.io is a public cloud platform that is built on top of bare-metal servers in data centers around the world. The platform is designed to make it easy for developers to deploy distributed and real-time apps close to their users, no matter where they are. The goal of Fly.io is to deliver applications with the highest possible availability and the lowest possible latency, all while providing a great developer experience.

One of the key features of Fly.io is its ability to allow developers to run their full stack close to their users. This means that developers can deploy simple web services or complex applications with multiple supporting services, all with ease. Fly.io offers persistent storage volumes and a ready-to-run Postgres database, as well as a fast internal WireGuard network for private communication between applications.

Fly.io also offers a unique approach to containerization. Instead of using Docker, Fly.io upgrades containers to full-fledged Firecracker microVMs. Developers can use a Dockerfile and remote builders to build an image with their app and its environment, or they can point to a pre-built Docker image. However, in many cases, developers won't even have to touch Docker. The platform's fly launch feature can scan source code and configure a project for deployment on Fly.io, and the builders will build the app's Docker image automatically when it's deployed.

Since your app is basically just a normal Docker container, if you ever decide you want to move it to another paid service, like AWS Elastic Container Service, or just run it in Docker on a server somewhere, you can!

Their free tier allows for up to 3 VMs total with 256MB of RAM each, 3GB of storage, and 160GB of bandwidth. That may not sound like a lot, but if all you’re working on is a hobby project, or you’re just getting started, that’s more than enough for most things. They also recently launch a free 100MB Redis Key-Value database that you can run with your app as well, which is a really nice way to cache information in your app.

### [Deta Space](https://deta.space/)

This one is a bit strange. Deta was originally more along the lines of a Heroku competitor with a bit more restrictions. Now they’re kind of an odd hybrid platform-as-a-service that’s also a startup incubator.

The TLDR of how they work is that you create an app using their workflow using standard web technologies (NextJS, React, Vue, etc) as well as a backend (Python, Go, Rust, etc) and other people install the app to their own “personal cloud”. This has the advantage of meaning you can write your app as if you were the only user, but means that scaling it in the future may be difficult.

If you can get over their unusual workflow, your app is hosted for completely free. But only to other users of Deta Space for now. Their website makes it sound like in the future there is going to be a way for you to deploy your app with them somehow hosting it for you as well as collecting revenue for you but since they’re in Beta that could change.

### [Cloudflare Workers](https://workers.cloudflare.com/)

Cloudflare Workers might be a bit tricky to work with, considering their runtime and API restrictions, but let me tell you, the perks they bring to the table make them absolutely worth the effort. Cloudflare Workers provide an impressive free tier of 100k runs, giving you the chance to explore and tweak your deployment without spending a dime.

Now, what makes these Workers so irresistible? They've got automatic scaling and a high-performance global network that makes your life as a developer a whole lot easier. No more fussing around with auto-scaling, load balancers, or paying for idle capacity! Plus, they support multiple languages like JS, Rust, C, and C++, with a bunch of templates and tutorials to get you going in no time. 

Cloudflare Workers are super budget-friendly, offering the first 100, 000 requests per day free of charge and paid plans starting at a mere $5 for 10 million requests. With no servers to worry about and built-in edge storage through Workers KV, you can concentrate on crafting and innovating, leaving infrastructure headaches behind. They even let you generate assets like images, SVGs, and PDFs on the fly, delivering them to users as fast as static assets.

So, even though Cloudflare Workers come with a learning curve due to their runtime and API limitations, the benefits they offer in terms of distribution, speed, and affordability make them a fantastic choice for developers eager to harness the power of serverless architecture.

## Database

### [Supabase](https://supabase.com/)

I’ll be upfront with you: I absolutely love Supabase.

Supabase is an open-source alternative to Firebase, which is a cloud-based mobile and web application development platform. It provides a suite of tools and services for building scalable, real-time applications with ease. Supabase is built on top of PostgreSQL, an open-source relational database, and provides a range of tools and services for working with data, authentication, and real-time events.

Here is something I’m going to say that will make every web developer ever swoon: **they write the backend code for you**.

Yeah, you read that right. Using their libraries, you can run a database on their cloud, have your users authenticate, and make authenticated requests to your database, without writing a single line of backend API code.

Supabase handles this by offering a feature called Row Level Security, where you can set security measures so your users have to pass a check before they can even see if a row exists, or before they can add or modify existing rows. This means that while you don’t write any backend code, its not any less secure than any other full stack application!

They also offer other services, such as an S3-compatible database-linked file storage service, as well as Deno-based serverless hosting!

You can have up to 2 databases with 500MB of storage and 512MB of RAM each. You also get 1GB of of file storage, and 500k function runs (which is more than Cloudflare!). This doesn’t sound like a lot, but with all the features and the the ease of development I consider their paid tier of $25/mo per database well worth it.

### [MongoDB](https://www.mongodb.com/atlas/database)

MongoDB is a popular open-source document-oriented database management system (DBMS) that uses a flexible, schema-free data model to store data in a JSON-like format. It was first released in 2009 by MongoDB Inc. and is designed to handle large volumes of structured, semi-structured, and unstructured data.

MongoDB is easy to interface with, especially in higher level languages like Python, Typescript, Java, among others. When I don’t need structured data, Mongo is my go-to database.

MongoDB offers a cloud-based database hosting service called MongoDB Atlas that provides free and paid plans for developers and organizations. The free plan is called the "M0 Sandbox" and provides users with a fully-managed MongoDB cluster with 512 MB of storage and shared RAM. The M0 Sandbox plan also includes access to MongoDB's community support and allows users to deploy up to three clusters for free.

### Google Sheets

You can make an entire application using Google Sheets as a database. Would this work well if you’re trying to build the next Twitter? Of course not! But if all you’re trying to do is store data in a single table in a SQLite database for a hobby project, this may be worth the effort. Fireship did [an entire video](https://youtu.be/K6Vcfm7TA5U) on the subject and he explains it much better job explaining why and how you would do this, so maybe go watch that if this seems interesting to you.

## File Storage

### [Cloudflare R2](https://www.cloudflare.com/products/r2/)

Cloudflare used their knowledge of affordable, distributed computing and put it to use creating R2. R2 is *significantly* cheaper than nearly all the competition, and its distributed, meaning your data is close to your users. The S3-compatible API lets you build versatile multi-cloud systems tailored to your needs, and you can move data around without any pesky egress fees. Plus, you'll get a cool 10GB for free! So if you're planning your next project, give Cloudflare R2 a spin and see how it can help you build an efficient, scalable, and affordable solution!

### [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html)

You may have heard of Blackblaze’s backup service for Mac and PC. Their service offers unlimited backup of your computer’s file storage for $6 per month. Well they have taken their knowledge from storing petabytes of people’s personal information and made a quite affordable option in the Object Storage space with their B2 service. Its 100% S3 compatible, and you get 10GB for free!

## Conclusion

Whether you're looking for a frontend or backend solution, a database, or file storage, there's something here for everyone. While free plans may come with limitations, they're a great way to get started on your first project or experiment with new technologies without breaking the bank. So why not give one (or more) of these services a try and see what you can build!
