yarn --cwd service install
yarn --cwd service build

yarn --cwd client install
yarn --cwd client build

cp -r client/build service/client
