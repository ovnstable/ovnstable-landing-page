#!/bin/bash


token=$1
url=$2
stand=$3
dockerComposePath="/home/ubuntu/docker-compose.yaml"


if [ "$stand" = "prod" ]
then
  nameDapp="landing-page"
  build="build-production"
  tag="1"
elif [ "$stand" = "dev" ]
then
  nameDapp="landing-page-dev"
  build="build-dev"
  tag="dev"
else
  exit
fi

echo "$nameDapp"


docker build . -t cr.yandex/crpg11k469bhc8lch9gm/overnight/landing-page:$tag

docker login \
         --username oauth \
         --password $token \
        cr.yandex

docker push  cr.yandex/crpg11k469bhc8lch9gm/overnight/landing-page:$tag


ssh $url docker login \
         --username oauth \
         --password $token \
        cr.yandex

ssh $url docker pull cr.yandex/crpg11k469bhc8lch9gm/overnight/landing-page:$tag
ssh $url docker-compose -f $dockerComposePath up -d --no-deps $nameDapp
