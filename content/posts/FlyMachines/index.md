+++
title = "Deploying with Fly Machines"
date = "2023-03-23T15:47:59-04:00"
author = ""
authorTwitter = "" #do not include @
cover = "/posts/flymachines/hotair.jpg"
tags = ["fly", "devops", "docker", "firecracker"]
keywords = ["docker", "fly", "devops", "firecracker"]
description = "Deploy your containerized app in 5 minutes."
showFullContent = false
readingTime = false
hideComments = false
+++

Fly Machines is Fly’s new runtime for FirecrackerVMs. Firecracker is a FOSS container runtime developed by AWS. Fly Machines, or AppsV2 as its also referred to, are more aimed at serverless functions but it can be used as a normal VM host with easy HTTP(S) routing.

While a normal Fly App has a configuration file, a Fly Machine doesn’t. A Fly machine is just one part of an app, which can have distributed Fly machines across different regions. Currently its on the dev to handle all of that. Any environment variables should either be put in the Docker container itself or passed at runtime (provided they are not secrets which are handled [the same as they were before](https://fly.io/docs/reference/secrets/)), as should the command to run the container. I should note that the `fly m run` command, which is the command used to start a container using a machine, does have a flag to specify a launch command ( `—-comand, -c` ), however at the time of writing it didn’t work.

## Preparations

First, you have to create a new application.

```bash
fly apps create --machines --name your-name-here
```

After that you can add volumes and secrets to it like you normally would, passing in the `--app, -a` flag to specify the application in question.

```bash
fly secrets set MY_SECRET_HERE="password" -a your-name-here
fly volume create your-volume-here --region lax -a your-name-here -s 3 # in GB
```

Unlike a normal fly app, you have to manually allocate IP addresses. If your app is just running on an HTTP server, you can use the shared IPv4 address.

```bash
fly ips allocate-v4 --shared -a your-name-here
```

If you aren’t just hosting an HTTP server, you’ll have to either settle for IPv6 (which is free) or pay $2/mo for an IPv4 address.

```bash
fly ips allocate-v6 -a your-name-here
fly ips allocate-v4 -a your-name-here # costs $2/mo per IP
```

## Deployment

When you run `fly m run` , it takes all the flags for ports, volumes, and environment variables, just the same as Docker. As mentioned earlier they have a command that is *supposed* to allow you to set the command at runtime, however it didn’t work for me. My solution was to just change the `CMD` line in my Dockerfile to the command I wanted.

Let’s assume you have an app with an HTTP server on 7500 and you want that to be accessible via your app’s Fly domain name. Since we made the region for the above volume `lax` (Los Angeles), we will assume the same for the deployment.

```bash
fly m run . -p 443:7500/tcp:tls:http -v your-volume-here:/data --region lax -a your-name-here
```

This will:

* Build a Docker container using the Dockerfile in the current directory (the `.`)
* Set up a port forward to external port 443 (which is the standard HTTPS port) and internal port 7500 (our hypothetical web server), specifying that we want this to use TLS and HTTP in the options.
* Specify volume `your-volume-here` to be mounted to `/data` inside the container.
* Deployed to `lax`
* Deployed the new machine to the app `your-name-here`
# Conclusion

In this tutorial, we have explored how to work with Fly Machines, or AppsV2, to create, configure, and deploy applications using FirecrackerVMs. We covered the steps required to create a new application, allocate IP addresses, manage secrets and volumes, and deploy the app to a specific region.

By following this guide, you should now be equipped with the knowledge to build and deploy serverless applications or even utilize Fly Machines as a normal VM host with easy HTTP(S) routing. As a developer, it is essential to adapt to new and emerging technologies that can improve the efficiency and performance of your applications, and Fly Machines is one such tool that can help you achieve that.

Now it's your turn to start building your applications with Fly Machines and harness the power of FirecrackerVMs to enhance your serverless workflows. Good luck, and happy coding!
