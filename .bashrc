# .bashrc

# User specific aliases and functions

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

export DYLD_LIBRARY_PATH=/usr/local/mysql/lib 
export TERM="screen-256color"
export set PATH=$PATH:~

ESC="\e["
PCOLOR="${ESC}1;154m"
SCOLOR="${ESC}1;154m"

PS1=`echo -e "${PCOLOR}"`"[\u@"`echo -e "${SCOLOR}"`"\h"`echo -e "${PCOLOR}"`" \w]"`echo -e "${ESC}0m"`" \`if [ \$? = 0 ]; then echo \:-\); else echo \:-O; fi\` \\n\$ "
alias 'ls'="ls --color=tty"
alias 'celar'="clear"
alias 'sl'="ls"

# TMUX
[[ $- != *i* ]] && return 
[[ -z "$TMUX" ]] && exec tmuxgo
