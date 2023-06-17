yarn --cwd service install
yarn --cwd service build

dir="$( dirname -- "$0"; )"

rm -r $dir/../service/clients
mkdir $dir/../service/clients

$dir/build_client.sh cv
$dir/build_client.sh movies
$dir/build_client.sh sample_landing