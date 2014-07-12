if [ ! -d ~/scripts ]; then
	mkdir ~/scripts
fi

if [ -d ~/.vim ]; then
	rm -rf ~/.vim
fi

cp -sfr $PWD/scripts/. ~/scripts/
#cp -sfr $PWD/home/. ~/

for i in $PWD/home/*; do ln -s "$i" ~; done

#pushd .;
#cd $PWD/home;
#ln -s * ~;
#popd;
#ln -s $PWD/home/. /home/$USER/

if [ -z "$SSH_CLIENT" ]; then
	cp -sfr $PWD/local_only/scripts/. ~/scripts/
	cp -sfr $PWD/local_only/home/. ~/
else
	cp -sfr $PWD/remote_only/scripts/. ~/scripts/
	cp -sfr $PWD/remote_only/home/. ~/
fi
