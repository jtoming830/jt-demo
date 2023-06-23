yarn

yarn --cwd service build

dir="$( dirname -- "$0"; )"

rm -r $dir/../service/clients
mkdir $dir/../service/clients

$dir/build_client.sh cv
$dir/build_client.sh movies
$dir/build_client.sh sample_landing
$dir/build_client.sh countries
$dir/build_client.sh arch_studio
