#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

export DYLD_LIBRARY_PATH=/usr/local/mysql/lib 
export TERM="screen-256color"
export set PATH=$PATH:~
export PATH=~/scripts:$PATH
export CVNODE=drew
export EDITOR=vim

ESC="\e["
PCOLOR="${ESC}1;154m"
SCOLOR="${ESC}1;154m"
MCOLOR=""

#PS1="\[\e[01;37m\][\[\e[0m\]\[\e[01;33m\]\u@\H\[\e[0m\]\[\e[01;37m\]]\[\e[0m\]\[\e[00;37m\] \w\n\[\e[0m\]"

alias 'ls'="ls --color=tty"
alias 'celar'="clear"
alias 'sl'="ls"
alias 'pandora'="aoss pianobar"
alias 'go'="tmuxgo.sh"
alias 'say'='echo "$1" | espeak -s 150 2>/dev/null'
alias 'alert'='say-note.sh'
alias 'nwycdb'='mysqlnwyc.sh'

if [ -z "$SSH_CLIENT" ]; then
	source .bashrc-local
else
	source .bashrc-remote
fi

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

if [[ -r ~/.local/lib/python2.7/site-packages/powerline/bindings/zsh/powerline.zsh ]]; then
	source ~/.local/lib/python2.7/site-packages/powerline/bindings/zsh/powerline.zsh
fi

# Customize to your needs...

