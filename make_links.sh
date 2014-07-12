#!/bin/bash
############################
# .make.sh
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

dir=~/dot-configs                    # dotfiles directory
olddir=~/dot-configs-old             # old dotfiles backup directory
files="bash_profile bashrc bashrc-local bashrc-remote screenrc tmux.conf tmux-local.conf tmux-remote.conf vimrc vim "    # list of files/folders to symlink in homedir

##########

# create dotfiles_old in homedir
echo "Creating $olddir for backup of any existing dotfiles in ~"
mkdir -p $olddir
echo "...done"

# change to the dotfiles directory
echo "Changing to the $dir directory"
cd $dir
echo "...done"

# move any existing dotfiles in homedir to dotfiles_old directory, then create symlinks 
for file in $files; do
    echo "Moving any existing dotfiles from ~ to $olddir"
    mv ~/.$file ~/dot-configs-old/
    echo "Creating symlink to $file in home directory."
    ln -s $dir/.$file ~/.$file
done
