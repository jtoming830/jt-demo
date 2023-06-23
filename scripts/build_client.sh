path=clients/$1

echo $path build started

yarn --cwd $path build

cp -r $path/build service/$path

echo $path build finished