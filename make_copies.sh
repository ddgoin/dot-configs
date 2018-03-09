#!/bin/bash
############################
# .make.sh
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

timestamp=$(date +%F_%T)
dir=$(pwd)                   # dotfiles directory
olddir="$dir/backup/$timestamp"            # old dotfiles backup directory
copy_dirs=".vim"    # list of folders to copy in homedir
copy_files=".bashrc .screenrc .tmux.conf .tmux-local.conf .tmux-remote.conf .vimrc"    # list of files to symlink in homedir

##########

# create dotfiles_old in homedir
echo "Creating $olddir for backup of any existing scripts in $HOME"
mkdir -p $olddir

# change to the dotfiles directory
echo "Changing to the $dir directory"
cd $dir

# move any existing files in homedir to backup directory, then copy files
for copy_file in $copy_files; do
	if [[ -f "$HOME/$copy_file" ]]; then
		echo "backing up ${HOME}/${copy_file} => ${OLDDIR}/${copy_file}"
		mv $HOME/$copy_file $olddir/
	fi
	echo "copying $copy_file"
	cp $dir/$copy_file $HOME/
done

# move any existing folders in homedir to backup directory, then copy folders
for copy_dir in $copy_dirs; do
	if [[ -e "${HOME}/${copy_dir}" ]]; then
		echo "backing up ${HOME}/${copy_dir} => ${OLDDIR}/${copy_dir}"
		mv $HOME/$copy_dir $olddir/$copy_dir
	fi
	echo "copying $copy_dir"
	cp -r $dir/$copy_dir $HOME/
done
