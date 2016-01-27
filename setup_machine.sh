curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm bower grunt grunt-cli yo
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.2 ruby2.2-dev
sudo gem install bundler jekyll
sudo npm install -g generator-jekyllrb

echo "Now run:"
echo "bundle install"
