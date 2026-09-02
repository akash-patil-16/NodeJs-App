# Docker Interview Questions with Answers

## 🟢 Beginner Docker Questions

### 1. What is Docker, and why is it used?
**Answer:** Docker is a platform that packages applications and their dependencies into lightweight, portable units called containers. It is used to ensure the application runs the same way across local machines, testing environments, and production servers. It helps improve consistency, speed, and deployment automation.

### 2. What is the difference between a Docker container and a virtual machine?
**Answer:** A virtual machine (VM) includes a full guest operating system and hypervisor, making it heavier and slower. A Docker container shares the host OS kernel and packages only the application and required libraries, so it is lighter, faster, and more efficient.

### 3. What is a Docker image?
**Answer:** A Docker image is a read-only template used to create containers. It contains the application code, runtime, libraries, environment variables, and configuration needed to run the app.

### 4. What is a Docker container?
**Answer:** A Docker container is a running instance of a Docker image. It is isolated from other processes and can be started, stopped, and removed independently.

### 5. What is the difference between a Docker image and a container?
**Answer:** An image is the blueprint or package; a container is the running instance created from that image. Images are static, while containers are live running processes.

### 6. What is Docker Hub?
**Answer:** Docker Hub is the default public registry where Docker images are stored and shared. Developers can pull official or custom images from it.

### 7. What is a Dockerfile?
**Answer:** A Dockerfile is a text file that contains instructions for building a Docker image. It defines the base image, dependencies, application code, and runtime behavior.

### 8. What is the purpose of the FROM instruction in a Dockerfile?
**Answer:** `FROM` specifies the base image used to build the new image. For example, `FROM node:18` tells Docker to start from the official Node.js image.

### 9. What is the difference between CMD and ENTRYPOINT?
**Answer:** `CMD` provides default arguments for the container's main process and can be overridden when running the container. `ENTRYPOINT` defines the executable that will always run, and arguments passed at runtime are appended to it.

### 10. What is the difference between RUN, CMD, and ENTRYPOINT?
**Answer:**
- `RUN` executes commands while building the image.
- `CMD` sets the default command to run when the container starts.
- `ENTRYPOINT` sets the main executable for the container and is usually used for fixed commands.

### 11. What is the purpose of .dockerignore?
**Answer:** `.dockerignore` lists files and folders that should not be sent to the Docker build context, reducing build size and improving performance. It is similar to `.gitignore` but for Docker builds.

### 12. How do you build a Docker image?
**Answer:** You use the `docker build` command.

```bash
docker build -t myapp:latest .
```
This builds an image named `myapp:latest` from the Dockerfile in the current directory.

### 13. How do you run a Docker container?
**Answer:** You use the `docker run` command.

```bash
docker run -d -p 8080:80 myapp:latest
```
This runs the container in detached mode and maps port 80 inside the container to port 8080 on the host.

### 14. How do you list running containers?
**Answer:**

```bash
docker ps
```
This shows all currently running containers.

### 15. How do you list all containers?
**Answer:**

```bash
docker ps -a
```
This shows both running and stopped containers.

### 16. How do you stop and remove a container?
**Answer:**

```bash
docker stop <container_id>
docker rm <container_id>
```
You can also remove a running container with `docker rm -f <container_id>`.

### 17. How do you remove a Docker image?
**Answer:**

```bash
docker rmi <image_name_or_id>
```
This removes the image, provided no containers are using it.

### 18. What is a Docker registry?
**Answer:** A Docker registry is a storage and distribution system for Docker images. Docker Hub is the most common public registry, while private registries may also be used in enterprises.

### 19. What are Docker tags?
**Answer:** Docker tags are labels attached to images, usually used to identify versions or variants. For example, `myapp:1.0`, `myapp:latest`, or `myapp:dev`.

### 20. What does docker ps do?
**Answer:** `docker ps` lists running containers and shows useful details such as container ID, image name, status, ports, and names.

---

## 🟡 Intermediate Questions

### 1. What are Docker volumes?
**Answer:** Docker volumes are persistent storage mechanisms used to store data outside the container filesystem. They help keep data safe even when containers are recreated or deleted.

### 2. What is the difference between a volume and a bind mount?
**Answer:** A Docker volume is managed by Docker and usually stored in a Docker-managed location. A bind mount maps a host filesystem path into the container, giving direct access to files on the host machine.

### 3. How do you persist data generated by a container?
**Answer:** Use Docker volumes or bind mounts, for example:

```bash
docker run -v mydata:/app/data myapp
```
This stores data in a Docker-managed volume so it persists across container restarts.

### 4. What is Docker networking?
**Answer:** Docker networking allows containers to communicate with each other and with the outside world. Docker provides virtual networks for container communication and port publishing for access from the host.

### 5. What are the different Docker network drivers?
**Answer:** Common network drivers include `bridge`, `host`, `overlay`, and `none`. `bridge` is the default for standalone containers, while `overlay` is used for multi-host swarm networking.

### 6. What is the difference between bridge, host, and none networking?
**Answer:**
- `bridge`: containers connect through a virtual bridge network, enabling communication between containers and host via NAT.
- `host`: container shares the host network stack directly.
- `none`: container has no network interface.

### 7. How can two Docker containers communicate with each other?
**Answer:** Put them on the same Docker network and use container names or service names as hostnames. For example, `docker network create mynet` and then connect both containers to that network.

### 8. What is Docker Compose?
**Answer:** Docker Compose is a tool used to define and run multi-container applications with a single YAML file. It makes it easier to manage services, networks, and volumes.

### 9. What is the purpose of docker-compose.yml?
**Answer:** It defines the services, networks, ports, environment variables, and volumes for an application stack. Compose uses this file to start all services together.

### 10. How do you start and stop services using Docker Compose?
**Answer:**

```bash
docker compose up
```

```bash
docker compose down
```
`up` starts services; `down` stops and removes containers, networks, and related resources.

### 11. What is the difference between docker compose up and docker compose up -d?
**Answer:** `docker compose up` starts services in the foreground and shows logs. `docker compose up -d` starts them in detached mode, running in the background.

### 12. How do you expose a container port to the host?
**Answer:** Use port mapping with `-p` or in Compose:

```bash
docker run -p 8080:80 myapp
```
This maps host port 8080 to container port 80.

### 13. What is the difference between EXPOSE and -p?
**Answer:** `EXPOSE` is a documentation/instruction in the Dockerfile and does not publish the port to the host by itself. `-p` actually maps a container port to a host port at runtime.

### 14. How do you pass environment variables to a Docker container?
**Answer:** Use the `-e` flag or environment section in Compose.

```bash
docker run -e NODE_ENV=production myapp
```

### 15. How do you access a running container's shell?
**Answer:** Use `docker exec -it <container_id> /bin/bash` or `/bin/sh`.

```bash
docker exec -it mycontainer /bin/bash
```

### 16. How do you view container logs?
**Answer:**

```bash
docker logs <container_id>
```
For real-time logs:

```bash
docker logs -f <container_id>
```

### 17. How do you inspect a Docker container?
**Answer:** Use:

```bash
docker inspect <container_id>
```
This returns metadata such as network settings, environment variables, mounted volumes, and configuration.

### 18. How do you copy files between the host and a container?
**Answer:** Use `docker cp`.

```bash
docker cp localfile.txt mycontainer:/app/
```

### 19. What happens when a container exits?
**Answer:** The container stops running and its process exits. If it was configured with restart policies, Docker may automatically restart it. Otherwise, it remains stopped until removed.

### 20. Can you run multiple processes inside a Docker container?
**Answer:** Yes, but best practice is to run one main process per container. Some containers may run multiple processes via shell scripts or supervisors, but single-process containers are simpler and more reliable.

---

## 🔴 Advanced Docker Questions

### 1. Explain the architecture of Docker.
**Answer:** Docker uses a client-server architecture. The Docker CLI communicates with the Docker daemon, which manages containers, images, networks, and storage. Containers run on the host kernel using namespaces and control groups (cgroups).

### 2. What is the Docker daemon?
**Answer:** The Docker daemon is the background service that manages Docker objects such as images, containers, networks, and volumes. It listens for API requests from the Docker CLI and performs the actual work.

### 3. What is the Docker CLI?
**Answer:** The Docker CLI is the command-line interface used by developers to interact with the Docker daemon using commands like `docker run`, `docker build`, and `docker ps`.

### 4. What is a Docker layer?
**Answer:** A Docker image is built as a stack of read-only layers. Each instruction in a Dockerfile creates a new layer, and Docker reuses cached layers when possible.

### 5. How does Docker image caching work?
**Answer:** Docker caches image layers based on file contents and build instructions. If a layer has not changed, it reuses the cached version, which speeds up future builds. This is why ordering instructions in a Dockerfile matters.

### 6. How can you reduce Docker image size?
**Answer:** Use smaller base images, remove unnecessary package installs, clean caches, copy only required files, and use multi-stage builds to exclude build tools from the final image.

### 7. What is a multi-stage Docker build?
**Answer:** A multi-stage build uses multiple `FROM` statements in a Dockerfile to build artifacts in one stage and copy only the required output into a smaller final image. This reduces image size and avoids shipping build tools.

### 8. What is the difference between COPY and ADD?
**Answer:** `COPY` copies files from the host into the image in a straightforward way. `ADD` has extra features such as automatically extracting tar archives and downloading remote URLs, but it is not always preferred because it is less explicit.

### 9. What is the difference between ARG and ENV?
**Answer:** `ARG` is used during the build process and is not available in the running container. `ENV` sets environment variables available at runtime.

### 10. How does Docker implement container isolation?
**Answer:** Docker uses Linux features such as namespaces, cgroups, and seccomp to isolate containers from each other and the host. These features provide process, network, mount, and resource isolation.

### 11. What are Linux namespaces and cgroups, and how does Docker use them?
**Answer:** Namespaces isolate system resources like PID, network, mount, and user views; cgroups limit and track resource usage such as CPU, memory, and I/O. Docker uses them to create isolated, resource-controlled containers.

### 12. What is the difference between docker stop and docker kill?
**Answer:** `docker stop` gracefully asks the container to stop by sending SIGTERM, then SIGKILL if needed. `docker kill` immediately sends SIGKILL and stops it without graceful shutdown.

### 13. What happens internally when you execute docker run?
**Answer:** Docker checks the image, creates a container filesystem, allocates network resources, creates a container process, and starts it using the configured entrypoint and command. It also sets up mounts, environment variables, and resource limits.

### 14. How do you troubleshoot a container that keeps restarting?
**Answer:** Check the container logs with `docker logs`, inspect status with `docker ps -a`, verify environment variables and config, and investigate application startup errors or crashes.

### 15. How do you troubleshoot a container that cannot connect to another container?
**Answer:** Check whether both containers are on the same network, confirm exposed ports and proper hostnames, run network inspection commands, and verify firewall or service bindings.

### 16. How do you optimize Docker builds in CI/CD?
**Answer:** Use layer caching, minimize build context, separate dependency install steps, use multi-stage builds, and leverage build cache in CI pipelines.

### 17. How do you securely manage secrets in Docker?
**Answer:** Use Docker secrets in Swarm, environment variables for non-sensitive values, external secret managers like Vault, and avoid hardcoding secrets in Dockerfiles or images.

### 18. What are Docker health checks?
**Answer:** Health checks define commands Docker runs to determine whether a container is healthy. If a health check fails repeatedly, Docker can mark the container unhealthy or restart it based on configuration.

### 19. What is the difference between a Docker container and a Docker service?
**Answer:** A container is a single running instance of an image. A Docker service is a scalable, managed unit in Docker Swarm that runs multiple replicas of a container across a cluster.

### 20. What is Docker Swarm, and how does it compare with Kubernetes?
**Answer:** Docker Swarm is Docker's native container orchestration system for clustering and scaling containers. Kubernetes is more feature-rich and widely adopted for large-scale orchestration. Swarm is simpler, while Kubernetes offers more advanced scheduling, networking, and self-healing features.

---

## 💻 Practical / Scenario-Based Questions

### 1. Your Docker image is 2 GB. How would you reduce its size?
**Answer:** Use a smaller base image, avoid installing unnecessary packages, clean package manager caches, compress dependencies, and use a multi-stage build so only production artifacts remain in the final image.

### 2. A container works locally but fails in production. How would you debug it?
**Answer:** Compare environment variables and config, inspect logs, verify image tag and runtime differences, check file permissions, network setup, secret values, and deploy the same image or build artifact to recreate the environment.

### 3. A container keeps restarting. What commands would you use to investigate?
**Answer:**

```bash
docker ps -a
docker logs <container>
docker inspect <container>
```
These help reveal restart reasons, exit codes, and configuration issues.

### 4. Two containers need to communicate. How would you configure networking?
**Answer:** Put both containers on the same Docker network using `docker network create` and `docker network connect`, or define them in a Compose file with shared service names.

### 5. Your application loses data whenever the container is deleted. How would you fix it?
**Answer:** Use Docker volumes or bind mounts so application data is stored outside the container filesystem and persists after container removal.

### 6. You need different configurations for dev, staging, and production. How would you handle them with Docker?
**Answer:** Use environment variables, Docker Compose override files, or separate configuration files and secrets for each environment. You can also create distinct image tags or deployment environments.

### 7. Your Docker build takes 10 minutes. How would you make it faster?
**Answer:** Optimize the Dockerfile by ordering instructions well, using caching effectively, avoiding repeated package installs, minimizing build context, and using a smaller base image.

### 8. You need to build a Node.js application but don't want Node.js and development dependencies in the production image. What would you do?
**Answer:** Use a multi-stage build: install dependencies in a build stage, compile or bundle the app, then copy only the built output into a lightweight runtime image such as `node:alpine` or a minimal Debian-based image.

### 9. A container is consuming too much CPU/memory. How would you investigate and control it?
**Answer:** Use `docker stats`, inspect resource limits in the container configuration, and adjust CPU and memory limits or optimize the application itself. You can set `--memory` and `--cpus` in `docker run`.

### 10. How would you deploy a Dockerized application using a CI/CD pipeline?
**Answer:** Build the image in CI, run tests, push it to a registry, and deploy it to staging or production using tools like Docker Compose, Kubernetes, or a deployment pipeline with environment-specific secrets and configurations.

---

## ⭐ Questions You Should Definitely Prepare

If you're interviewing for a DevOps or Docker role, prioritize these:

- Docker vs VM
- Image vs container
- `CMD` vs `ENTRYPOINT`
- `RUN` vs `CMD` vs `ENTRYPOINT`
- `COPY` vs `ADD`
- `EXPOSE` vs port mapping
- Volumes vs bind mounts
- Docker networking
- Docker Compose
- Multi-stage builds
- Docker layers and caching
- Dockerfile optimization
- Container troubleshooting
- Docker security
- Docker health checks
- Docker vs Kubernetes

---

## Quick Docker Commands Cheat Sheet

```bash
# Build image
docker build -t myapp:latest .

# Run container
docker run -d -p 8080:80 myapp:latest

# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container_id>

# Remove container
docker rm <container_id>

# Remove image
docker rmi myapp:latest

# View logs
docker logs -f <container_id>

# Enter running container
docker exec -it <container_id> /bin/bash

# Inspect config
docker inspect <container_id>
```

This file is a practical study guide for Docker interviews and real-world containerization work.
