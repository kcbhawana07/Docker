#  What is Docker?

- Docker is an open platform for _developing_, _shipping_, and _running_ applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code, you can significantly reduce the delay between writing code and running it in production.

##  The Docker Platform

- Packages and runs applications in isolated environments called containers.
- Containers are lightweight and include all dependencies to run an app.
- Allows multiple containers to run on the same host securely and efficiently.
- Ensures consistency across environments when sharing containers.

##  Container Lifecycle Management

- Develop applications and supporting components as containers.
- Containers are units of distribution and testing.
- Deploy the same container in production across different environments (local/cloud/hybrid).

##  What Can I Use Docker For?

###  Fast, Consistent Application Delivery
- Standardized local environments using containers.
- Supports CI/CD workflows.
- Easy bug fixes and redeployment during development and testing.

###  Responsive Deployment & Scaling
- Portable across laptops, data centers, and cloud providers.
- Easily scale up/down workloads in near real-time.

###  Efficient Resource Usage
- Lightweight alternative to virtual machines.
- Optimized for high-density and small/medium deployments.

##  Docker Architecture
- Uses a client-server model.
- Docker client communicates with Docker daemon via REST API.
![docker-architecture-ezgif com-webp-to-jpg-converter](https://github.com/user-attachments/assets/2639831b-d143-46b2-b361-defe37340928)

###  Docker Daemon (`dockerd`)
- Handles container/image management and API requests.

###  Docker Client (`docker`)
- Primary CLI tool for interacting with Docker (`docker run`, etc.).

###  Docker Desktop
- GUI app for Mac/Windows/Linux with Docker Engine, CLI, Compose, and Kubernetes.

###  Docker Registries
- Stores and shares Docker images (e.g., Docker Hub or private registries).
- Commands like `docker pull` and `docker push` interact with registries.

##  Docker Objects

###  Images
- Read-only templates to create containers.
- Built from Dockerfiles using layered architecture.

###  Containers
- Runnable instances of images.
- Can be started, stopped, deleted, and network-attached.
- Ephemeral unless configured with persistent storage.


# Installation and Setup
## Windows
### 1. Install Chocolatey
- Open powershell as admin.
- Paste the following command.
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
### 2. Install WSL
- Open powershell as admin.
- Paste the following command.
```bash
wsl --install -y
```
### 3. Install Docker Desktop
```bash
choco install docker-desktop
```

## Mac
### 1. Open terminal
### 2. Install brew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
### 3. Install docker
```bash
brew install --cask docker
```
## Linux
### 1. Open terminal (Ubuntu and its derivatives)
### 2. Set up Docker's apt repository.
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
### 3. Install the Docker packages.
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
### 4. Start the docker daemon.
```bash
sudo service docker start
```
### 5. Add User to `docker` group.
```bash
sudo usermod -aG docker $USER
```

## Confirm Installation.
```bash
docker --version
```
## Run your first docker container.
```bash
sudo docker run hello-world
```
[Getting Started](getting-started.md)
