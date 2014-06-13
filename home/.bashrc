# .bashrc

# User specific aliases and functions

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

export DYLD_LIBRARY_PATH=/usr/local/mysql/lib 
export TERM="screen-256color"
export set PATH=$PATH:~
export PATH=/home/drew/scripts:$PATH
export CVNODE=drew

ESC="\e["
PCOLOR="${ESC}1;154m"
SCOLOR="${ESC}1;154m"
MCOLOR=""

PS1="\[\e[01;37m\][\[\e[0m\]\[\e[01;33m\]\u@\H\[\e[0m\]\[\e[01;37m\]]\[\e[0m\]\[\e[00;37m\] \w\n\[\e[0m\]"

alias 'ls'="ls --color=tty"
alias 'celar'="clear"
alias 'sl'="ls"

if [ -z "$SSH_CLIENT" ]; then
	source ./.bashrc-local
else
	source ./.bashrc-remote
fi
