# Writing a Dockerfile
A Dockerfile is a text-based document that's used to create a container image. It provides instructions to the image builder on the commands to run, files to copy, startup command, and more.

## Common instructions
Some of the most common instructions in a Dockerfile include:
- `FROM <image>` - this specifies the base image that the build will extend.
- `WORKDIR <path>` - this instruction specifies the "working directory" or the path in the image where files will be copied and commands will be executed.
- `COPY <host-path> <image-path>` - this instruction tells the builder to copy files from the host and put them into the container image.
- `RUN <command>` - this instruction tells the builder to run the specified command.
- `ENV <name> <value>` - this instruction sets an environment variable that a running container will use.
- `EXPOSE <port-number>` - this instruction sets configuration on the image that indicates a port the image would like to expose.
- `USER <user-or-uid>` - this instruction sets the default user for all subsequent instructions.
- `CMD ["<command>", "<arg1>"]` - this instruction sets the default command a container using this image will run.

# 1. LabWork
- Create a new folder called `docker-workshop`.
- Inside that folder create a folder called `py-hello`.
- Create two files:
  - `app.py`
    ~~~python
    print("Python says Hello World!")
    ~~~
  - `Dockerfile`
    ~~~dockerfile
    # Use an official Python base image
    FROM python:3.9-slim

    # Copy the current directory contents into the container
    COPY . /app

    # Set the working directory
    WORKDIR /app

    # Set the command to run the app
    CMD ["python", "app.py"]
    ~~~

- Open terminal/cmd in current directory and run commands below.
  ~~~docker
  docker build -t py-hello .
  ~~~
  ~~~docker
  docker image ls
  ~~~
  ~~~docker
  docker run --rm py-hello
  ~~~

# Container Dissection
- Visualise docker file setup inside container.
  ~~~bash
  docker run -it py-hello /bin/bash
  ~~~
 
# Docker CLI commands.

- `docker pull`
  - It pulls image from docker hub.
  ~~~bash
  docker pull spd31415/python-hello-world:latest
  ~~~
  
- `docker run`
  - It runs the docker image.
  ~~~bash
  docker run spd31415/python-hello-world
  ~~~

- `docker image`
  - Functions related with docker image.
  ~~~bash
  docker image ls
  docker image rm <image-id> -f
  ~~~



- `docker ps`
  - The docker ps command is used to list all running containers.
  ~~~bash
  docker pull nginxdemos/hello
  ~~~
  ~~~bash
  docker run -d --name hello-web -p 8080:80 nginxdemos/hello
  ~~~
  Open browser and go to `http://localhost:8080`
  ~~~bash
  docker ps
  ~~~

- `docker logs`
  - Shows logs of running container.
  ~~~bash
  docker logs <container-id> --follow
  ~~~

- `docker stats`
  - Shows stats (memory, CPU usage etc.) of running container.
  ~~~bash
  docker stats <container-id>
  ~~~

- `docker container <commands>`
  - Docker container commands
  ~~~bash
  docker container ls -a
  docker container start <container-id>
  docker container stop <container-id>
  ~~~
  ~~~bash
  docker container rm <container-id>
  docker container prune
  ~~~
[Docker Volume and Networking](volume-network-compose.md)

