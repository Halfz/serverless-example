FROM amazonlinux:latest
ENV NODE_VERSION 10.16.0
ENV PATH=/root/.nvm/versions/node/v$NODE_VERSION/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
SHELL ["/bin/bash", "-c"]

RUN mkdir /root/.nvm
ENV NVM_DIR /root/.nvm
RUN yum install gcc44 gcc-c++ libgcc44 cmake curl tar gzip make -y
RUN touch ~/.bashrc
RUN source ~/.bashrc && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
RUN source ~/.bashrc && nvm install $NODE_VERSION
CMD source ~/.bashrc && nvm use $NODE_VERSION && node --version; bash
